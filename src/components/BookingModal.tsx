import React, { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FullDayTour } from "@/data/fullDayTours";
import { Tour } from "@/types/tour";
import { format, addDays, isValid } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, Users, User, MessageSquare, ChevronRight, ChevronLeft, CreditCard, Building2, Bed, MapPin, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { countries } from "@/data/countries";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: FullDayTour | Tour;
}

type Step = "package" | "participants" | "payment";

type RoomCombo = { single: number; doble: number; triple: number };

const getValidCombinations = (pax: number, rate: any): RoomCombo[] => {
  if (!rate) return [];
  const hasTriple = rate.triple && rate.triple !== "-";
  const hasDoble = rate.doble && rate.doble !== "-";
  const combos: RoomCombo[] = [];

  for (let t = 0; t * 3 <= pax; t++) {
    if (t > 0 && !hasTriple) continue;
    for (let d = 0; d * 2 + t * 3 <= pax; d++) {
      if (d > 0 && !hasDoble) continue;
      const s = pax - (t * 3) - (d * 2);
      if (s > 0 && (!rate.single || rate.single === "-")) continue;
      combos.push({ single: s, doble: d, triple: t });
    }
  }
  combos.sort((a, b) => (a.single + a.doble + a.triple) - (b.single + b.doble + b.triple));
  return combos.slice(0, 3);
};

const formatCombo = (c: RoomCombo) => {
  const parts = [];
  if (c.triple > 0) parts.push(`${c.triple} Triple${c.triple > 1 ? 's' : ''}`);
  if (c.doble > 0) parts.push(`${c.doble} Doble${c.doble > 1 ? 's' : ''}`);
  if (c.single > 0) parts.push(`${c.single} Simple${c.single > 1 ? 's' : ''}`);
  return parts.join(" + ") || "Sin acomodación";
};

const getComboPrice = (c: RoomCombo | undefined, rate: any) => {
  if (!c || !rate) return 0;
  let total = 0;
  const triplePrice = parseFloat(String(rate.triple).replace('$', '')) || 0;
  const doblePrice = parseFloat(String(rate.doble).replace('$', '')) || 0;
  const singlePrice = parseFloat(String(rate.single).replace('$', '')) || 0;
  
  if (c.triple > 0) total += c.triple * 3 * triplePrice;
  if (c.doble > 0) total += c.doble * 2 * doblePrice;
  if (c.single > 0) total += c.single * 1 * singlePrice;
  return total;
};

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, tour }) => {
  const isFullDay = 'id' in tour;
  const [step, setStep] = useState<Step>("package");
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // State for FullDayTour
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  // State for Multi-day Tour
  const [selectedHotelRate, setSelectedHotelRate] = useState<any>(null);
  const [selectedComboIndex, setSelectedComboIndex] = useState<number>(0);

  const [participantsCount, setParticipantsCount] = useState(1);
  const [buyerInfo, setBuyerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
  });
  const [participantsInfo, setParticipantsInfo] = useState<{
    [key: number]: { firstName: string; lastName: string; email: string; whatsapp: string; nationality: string };
  }>({});
  const [countrySearch, setCountrySearch] = useState("");

  // Initialize selected options when tour changes
  useEffect(() => {
    if (isFullDay) {
      const fdt = tour as FullDayTour;
      if (fdt.packages?.[0]) setSelectedPackage(fdt.packages[0]);
    } else {
      const t = tour as Tour;
      if (t.rates?.[0]) setSelectedHotelRate(t.rates[0]);
    }
  }, [tour, isFullDay]);

  // Duration Logic
  const durationDays = useMemo(() => {
    if (!tour.duration) return 1;
    const match = tour.duration.match(/(\d+)/);
    return match ? parseInt(match[0]) : 1;
  }, [tour.duration]);

  const endDate = useMemo(() => {
    if (!date || !isValid(date)) return undefined;
    return addDays(date, durationDays - 1);
  }, [date, durationDays]);

  // Memoize room combinations to avoid redundant calculations
  const availableCombos = useMemo(() => {
    if (isFullDay) return [];
    return getValidCombinations(participantsCount, selectedHotelRate);
  }, [participantsCount, selectedHotelRate, isFullDay]);

  const currentCombo = availableCombos[selectedComboIndex];

  const getPricePerPerson = () => {
    if (isFullDay) {
      return selectedPackage?.price || 0;
    } else {
      const comboTotal = getComboPrice(currentCombo, selectedHotelRate);
      return participantsCount > 0 ? comboTotal / participantsCount : 0;
    }
  };

  const total = isFullDay 
    ? (selectedPackage?.price || 0) * participantsCount 
    : getComboPrice(currentCombo, selectedHotelRate);

  const handleNext = () => {
    if (step === "package") setStep("participants");
    else if (step === "participants") setStep("payment");
    // Scroll to top of modal content
    setTimeout(() => {
      const scrollContainer = document.querySelector(".custom-scrollbar");
      if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleBack = () => {
    if (step === "participants") setStep("package");
    else if (step === "payment") setStep("participants");
  };

  const handleParticipantChange = (index: number, field: string, value: string) => {
    setParticipantsInfo(prev => ({
      ...prev,
      [index]: { ...prev[index], [field]: value },
    }));
  };

  const handleFinish = () => {
    const dateStr = date ? format(date, "PPP", { locale: es }) : "No seleccionada";
    const endDateStr = endDate ? format(endDate, "PPP", { locale: es }) : "";
    
    let message = `*SOLICITUD DE RESERVA: ${tour.title.toUpperCase()}*%0A%0A`;
    message += `*DETALLES DEL VIAJE*%0A`;
    message += `Inicio: ${dateStr}%0A`;
    if (!isFullDay && endDateStr) {
      message += `Fin: ${endDateStr}%0A`;
      message += `Duración: ${tour.duration}%0A`;
    }
    
    if (isFullDay) {
      message += `Paquete: ${selectedPackage?.name}%0A`;
    } else {
      message += `Hotel: ${selectedHotelRate?.hotel}%0A`;
      message += `Acomodación: ${currentCombo ? formatCombo(currentCombo) : 'No seleccionada'}%0A`;
    }
    
    message += `Pasajeros: ${participantsCount}%0A`;
    message += `Inversión Estimada: $${total.toFixed(2)} USD%0A%0A`;
    
    message += `*DATOS DEL COMPRADOR*%0A`;
    message += `Nombre: ${buyerInfo.firstName} ${buyerInfo.lastName}%0A`;
    message += `Email: ${buyerInfo.email}%0A%0A`;

    message += `*INFORMACIÓN DE PASAJEROS*%0A`;
    for (let i = 1; i <= participantsCount; i++) {
      const p = participantsInfo[i];
      if (p) {
        message += `Pasajero ${i}: ${p.firstName} ${p.lastName} | WhatsApp: ${p.whatsapp} | Nacionalidad: ${p.nationality || 'No especificada'}%0A`;
      } else {
        message += `Pasajero ${i}: Pendiente de completar%0A`;
      }
    }

    const whatsappUrl = `https://wa.me/51942293293?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 overflow-hidden bg-white border-none shadow-2xl rounded-none sm:rounded-[2.5rem] h-full sm:h-[90vh] lg:h-[85vh] flex flex-col focus:outline-none transition-all duration-500">
        <div className="flex flex-col md:flex-row h-full overflow-hidden relative">
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">
            <div className="flex-1 p-5 sm:p-10 lg:p-14 overflow-y-auto custom-scrollbar pb-32 sm:pb-32 lg:pb-36">
              <DialogHeader className="mb-6 sm:mb-8 md:mb-12 text-left">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 capitalize px-3 py-1 text-[10px] font-bold tracking-widest">
                      {tour.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                    <span>Paso {step === "package" ? "1" : step === "participants" ? "2" : "3"}</span>
                    <span className="opacity-30">/</span>
                    <span className="text-primary">3</span>
                  </div>
                </div>
                <DialogTitle className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-foreground tracking-tight leading-tight mb-2">
                  {tour.title}
                </DialogTitle>
                <p className="text-muted-foreground text-xs md:text-sm font-medium">Completa los detalles para tu próxima aventura.</p>
              </DialogHeader>

              {/* Stepper - Modern Version */}
              <div className="flex items-center gap-2 mb-6 sm:mb-8 md:mb-12 max-w-xs">
                 <div className={cn("h-1.5 flex-1 rounded-full transition-all duration-500", step === "package" ? "bg-primary w-full" : "bg-primary/20")} />
                 <div className={cn("h-1.5 flex-1 rounded-full transition-all duration-500", step === "participants" ? "bg-primary w-full" : step === "payment" ? "bg-primary/20" : "bg-muted")} />
                 <div className={cn("h-1.5 flex-1 rounded-full transition-all duration-500", step === "payment" ? "bg-primary w-full" : "bg-muted")} />
              </div>

              {step === "package" && (
                <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                    <div className="space-y-6">
                      <Label className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2 mb-1">
                        <CalendarIcon size={14} className="text-primary" /> 1. Fecha del viaje
                      </Label>
                      
                      <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm">
                        <div className="space-y-1">
                          <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Salida</p>
                          <p className="text-xs font-black text-foreground">{date ? format(date, "dd MMM, yyyy", { locale: es }) : "---"}</p>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-40">
                          <span className="text-[8px] font-black uppercase tracking-tighter text-primary">{durationDays} DÍAS</span>
                          <ArrowRight size={14} className="text-primary" />
                        </div>
                        <div className="space-y-1 text-right">
                          <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Regreso</p>
                          <p className="text-xs font-black text-foreground">{endDate ? format(endDate, "dd MMM, yyyy", { locale: es }) : "---"}</p>
                        </div>
                      </div>

                      <div className="border border-border/50 rounded-[1.5rem] lg:rounded-[2.5rem] p-4 lg:p-8 bg-zinc-50/30 shadow-inner relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <Calendar
                          mode="range"
                          selected={{ from: date, to: endDate }}
                          onSelect={(range) => {
                            if (range?.from) setDate(range.from);
                          }}
                          className="rounded-md border-none p-0 scale-95 sm:scale-100 lg:scale-110 origin-top mx-auto relative z-10"
                          locale={es}
                          disabled={{ before: new Date() }}
                        />
                      </div>

                      {!isFullDay && (
                        <div className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-primary/5 border border-primary/10 animate-in fade-in slide-in-from-top-2 duration-700">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                            <CalendarIcon size={18} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-primary/50 uppercase tracking-widest mb-1">Información de Retorno</p>
                            <p className="text-xs font-bold text-primary/80 leading-tight">
                              Tu aventura de <span className="font-black text-primary">{tour.duration}</span> concluye el día <span className="font-black underline">{endDate ? format(endDate, "EEEE d 'de' MMMM", { locale: es }) : "---"}</span>.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-10 lg:space-y-12">
                      {isFullDay ? (
                        <div className="space-y-5">
                          <Label className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2 mb-1">
                            <CreditCard size={14} className="text-primary" /> 2. Selecciona un paquete
                          </Label>
                          <div className="space-y-3 max-h-[300px] lg:max-h-[420px] overflow-y-auto pr-3 custom-scrollbar pb-2">
                            {(tour as FullDayTour).packages?.map((pkg) => (
                              <div
                                key={pkg.name}
                                onClick={() => setSelectedPackage(pkg)}
                                className={cn(
                                  "p-5 lg:p-6 rounded-2xl border-2 transition-all duration-300 relative group cursor-pointer",
                                  selectedPackage?.name === pkg.name 
                                    ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" 
                                    : "border-border hover:border-primary/30 hover:bg-zinc-50"
                                )}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-bold text-sm lg:text-base tracking-tight group-hover:text-primary transition-colors pr-10">{pkg.name}</h4>
                                  <span className="text-primary font-black text-lg lg:text-xl leading-none">{"$"}{pkg.price}</span>
                                </div>
                                <p className="text-[11px] lg:text-xs text-muted-foreground leading-relaxed italic line-clamp-2">{pkg.description}</p>
                                {selectedPackage?.name === pkg.name && (
                                  <div className="absolute top-5 right-5 w-3 h-3 bg-primary rounded-full animate-pulse" />
                                )}
                              </div>
                            ))}
                          </div>
                          
                          <div className="pt-8 border-t border-dashed">
                            <Label className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2 mb-4">
                              <Users size={14} className="text-primary" /> 3. Número de personas
                            </Label>
                            <Select value={participantsCount.toString()} onValueChange={(v) => setParticipantsCount(parseInt(v))}>
                              <SelectTrigger className="rounded-xl lg:rounded-2xl h-14 border-2 hover:border-primary/50 transition-all focus:ring-primary/20 bg-white">
                                <SelectValue placeholder="Selecciona cantidad" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl lg:rounded-2xl shadow-2xl border-border/50 p-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                  <SelectItem key={n} value={n.toString()} className="rounded-lg my-1 focus:bg-primary/5">
                                    <div className="flex items-center gap-2 font-bold text-sm">
                                      <User size={14} className="text-primary" />
                                      {n} {n === 1 ? 'Persona' : 'Personas'}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-10">
                          <div className="pt-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2 mb-4">
                              <Users size={14} className="text-primary" /> 2. Número de personas
                            </Label>
                            <Select value={participantsCount.toString()} onValueChange={(v) => { setParticipantsCount(parseInt(v)); setSelectedComboIndex(0); }}>
                              <SelectTrigger className="rounded-xl lg:rounded-2xl h-14 border-2 hover:border-primary/50 transition-all focus:ring-primary/20 bg-white">
                                <SelectValue placeholder="Selecciona cantidad" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl lg:rounded-2xl shadow-2xl border-border/50 p-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                  <SelectItem key={n} value={n.toString()} className="rounded-lg my-1 focus:bg-primary/5">
                                    <div className="flex items-center gap-2 font-bold text-sm">
                                      <User size={14} className="text-primary" />
                                      {n} {n === 1 ? 'Persona' : 'Personas'}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2 mb-4">
                              <Building2 size={14} className="text-primary" /> 3. Categoría de Hotel
                            </Label>
                            <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                              {(tour as Tour).rates?.map((rate, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => { setSelectedHotelRate(rate); setSelectedComboIndex(0); }}
                                  className={cn("p-4 lg:p-5 rounded-xl lg:rounded-2xl border-2 cursor-pointer transition-all duration-300", selectedHotelRate?.hotel === rate.hotel ? "border-primary bg-primary/5 shadow-lg shadow-primary/5" : "border-border hover:border-primary/50")}
                                >
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                      <Building2 size={16} className="text-primary" />
                                      <h4 className="font-bold text-xs lg:text-sm">{rate.hotel}</h4>
                                    </div>
                                    {rate.isRecommended && <Badge className="bg-primary text-white text-[8px] lg:text-[10px] px-2.5 font-black tracking-tighter">RECOMENDADO</Badge>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2 mb-4">
                              <Bed size={14} className="text-primary" /> 4. Distribución de Habitaciones
                            </Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                               {availableCombos.length === 0 ? (
                                 <div className="col-span-full text-xs text-muted-foreground p-4 text-center border-2 border-dashed rounded-xl">No hay combinaciones disponibles para esta cantidad de personas.</div>
                               ) : (
                                 availableCombos.map((combo, idx) => {
                                   const comboPrice = getComboPrice(combo, selectedHotelRate);
                                   const isSelected = selectedComboIndex === idx;
                                   return (
                                     <div
                                       key={idx}
                                       onClick={() => setSelectedComboIndex(idx)}
                                       className={cn(
                                         "p-4 lg:p-5 rounded-xl lg:rounded-2xl border-2 text-center cursor-pointer transition-all flex flex-col items-center gap-2 lg:gap-3",
                                         isSelected ? "border-primary bg-primary/5 shadow-lg shadow-primary/5" : "border-border hover:border-primary/30"
                                       )}
                                     >
                                       <Bed size={18} className={isSelected ? "text-primary" : "text-muted-foreground"} />
                                       <span className="text-[10px] uppercase font-black tracking-tight leading-snug">{formatCombo(combo)}</span>
                                       <span className="text-sm lg:text-base font-black text-foreground">{"$"}{comboPrice.toFixed(2)} <span className="text-[9px] font-bold text-muted-foreground ml-1">TOTAL</span></span>
                                     </div>
                                   );
                                 })
                               )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === "participants" && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-8">
                     <h3 className="text-xl lg:text-2xl font-display font-black flex items-center gap-4 text-foreground">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                        <User size={24} />
                      </div>
                      Datos del Comprador
                     </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Nombre</Label>
                          <Input placeholder="Ej: Juan" value={buyerInfo.firstName} onChange={(e) => setBuyerInfo({...buyerInfo, firstName: e.target.value})} className="rounded-2xl h-14 border-2 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Apellidos</Label>
                          <Input placeholder="Ej: Pérez" value={buyerInfo.lastName} onChange={(e) => setBuyerInfo({...buyerInfo, lastName: e.target.value})} className="rounded-2xl h-14 border-2 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Email</Label>
                          <Input type="email" placeholder="email@ejemplo.com" value={buyerInfo.email} onChange={(e) => setBuyerInfo({...buyerInfo, email: e.target.value})} className="rounded-2xl h-14 border-2 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Confirmar Email</Label>
                          <Input type="email" placeholder="Repite tu email" value={buyerInfo.confirmEmail} onChange={(e) => setBuyerInfo({...buyerInfo, confirmEmail: e.target.value})} className="rounded-2xl h-14 border-2 focus:border-primary" />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-10 pt-12 border-t">
                    <h3 className="text-xl lg:text-2xl font-display font-black flex items-center gap-4 text-foreground">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                        <Users size={24} />
                      </div>
                      Datos de Pasajeros
                    </h3>
                    <div className="max-h-[400px] lg:max-h-[500px] overflow-y-auto pr-2 sm:pr-4 space-y-6 sm:space-y-8 custom-scrollbar pb-8">
                      {Array.from({ length: participantsCount }).map((_, i) => (
                        <div key={i} className="p-5 sm:p-8 lg:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border-2 border-dashed border-zinc-200 bg-zinc-50/30 space-y-6 sm:space-y-8 relative group hover:bg-white hover:border-primary/20 transition-all duration-500">
                          <Badge className="absolute -top-3 left-5 sm:left-8 bg-zinc-900 text-white font-black tracking-[0.2em] text-[9px] sm:text-[10px] px-3 sm:px-4 py-1 sm:py-1.5 shadow-xl">PASAJERO {i + 1}</Badge>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                            <div className="space-y-1.5">
                              <Label className="text-[8px] sm:text-[9px] font-bold text-muted-foreground ml-1 uppercase">Nombres</Label>
                              <Input placeholder="Nombre *" className="rounded-xl sm:rounded-2xl h-12 sm:h-14 border-2 bg-white text-sm sm:text-base" value={participantsInfo[i+1]?.firstName || ""} onChange={(e) => handleParticipantChange(i + 1, 'firstName', e.target.value)} />
                            </div>
                            <div className="space-y-1.5">
                              <Label className="text-[8px] sm:text-[9px] font-bold text-muted-foreground ml-1 uppercase">Apellidos</Label>
                              <Input placeholder="Apellido *" className="rounded-xl sm:rounded-2xl h-12 sm:h-14 border-2 bg-white text-sm sm:text-base" value={participantsInfo[i+1]?.lastName || ""} onChange={(e) => handleParticipantChange(i + 1, 'lastName', e.target.value)} />
                            </div>
                            <div className="space-y-1.5">
                              <Label className="text-[8px] sm:text-[9px] font-bold text-muted-foreground ml-1 uppercase">WhatsApp</Label>
                              <Input placeholder="Cód. País + Número" className="rounded-xl sm:rounded-2xl h-12 sm:h-14 border-2 bg-white text-sm sm:text-base" value={participantsInfo[i+1]?.whatsapp || ""} onChange={(e) => handleParticipantChange(i + 1, 'whatsapp', e.target.value)} />
                            </div>
                            
                            <div className="space-y-1.5 relative">
                              <Label className="text-[8px] sm:text-[9px] font-bold text-muted-foreground ml-1 uppercase">Nacionalidad</Label>
                              <Select 
                                onValueChange={(v) => handleParticipantChange(i + 1, 'nationality', v)}
                                value={participantsInfo[i+1]?.nationality || ""}
                              >
                                <SelectTrigger className="rounded-xl sm:rounded-2xl h-12 sm:h-14 border-2 bg-white font-bold text-sm sm:text-base">
                                  <SelectValue placeholder="Seleccionar *" />
                                </SelectTrigger>
                                <SelectContent className="max-h-[300px] rounded-[2rem] shadow-2xl border-none p-2">
                                  <div className="flex items-center px-4 pb-3 border-b sticky top-0 bg-white z-10 pt-2">
                                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                                    <input
                                      className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                                      placeholder="Buscar país..."
                                      value={countrySearch}
                                      onChange={(e) => setCountrySearch(e.target.value)}
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                  </div>
                                  {countries
                                    .filter(c => c.toLowerCase().includes(countrySearch.toLowerCase()))
                                    .map((country) => (
                                      <SelectItem key={country} value={country} className="rounded-xl my-1 focus:bg-primary/10">
                                        {country}
                                      </SelectItem>
                                    ))
                                  }
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === "payment" && (
                <div className="space-y-10 animate-in fade-in duration-700 flex flex-col items-center justify-center py-12 text-center">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 animate-pulse shadow-inner">
                      <CreditCard size={56} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-bounce">
                      <MessageSquare size={18} className="fill-current" />
                    </div>
                  </div>
                  <div className="space-y-4 max-w-md">
                    <h3 className="text-4xl font-display font-black text-foreground tracking-tight leading-none">¡Tu reserva está lista!</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed px-4">
                      Estamos listos para organizar tu viaje. Al confirmar, iniciaremos una conversación en WhatsApp para coordinar los detalles finales de pago y logística.
                    </p>
                  </div>
                  <div className="p-10 lg:p-14 rounded-[3rem] bg-zinc-950 text-white w-full max-w-lg text-left mt-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -mr-16 -mt-16 group-hover:bg-primary/30 transition-all duration-1000" />
                     <h4 className="font-display font-black mb-10 text-[11px] uppercase tracking-[0.3em] text-primary">Resumen del Itinerario</h4>
                     <div className="space-y-6 text-sm">
                        <div className="flex justify-between items-start gap-8 pb-5 border-b border-white/10">
                          <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Experiencia</span>
                          <span className="font-black text-right text-white text-base leading-tight">{tour.title}</span>
                        </div>
                        <div className="flex justify-between pb-5 border-b border-white/10 items-center">
                          <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Fecha</span>
                          <span className="text-white font-bold">{date ? format(date, "PPP", { locale: es }) : '-'}</span>
                        </div>
                        <div className="flex justify-between pb-5 border-b border-white/10 items-center">
                          <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Paquete</span>
                          <span className="text-white font-bold">{isFullDay ? selectedPackage?.name : selectedHotelRate?.hotel}</span>
                        </div>
                        <div className="flex justify-between pt-8 text-3xl lg:text-4xl font-display font-black text-primary tracking-tighter">
                          <span>TOTAL</span>
                          <span>{"$"}{total.toFixed(2)}</span>
                        </div>
                     </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons - Sticky on mobile, Fixed bar on Desktop */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-zinc-100 p-4 sm:p-8 lg:p-10 flex items-center justify-between gap-3 z-50 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.08)]">
              <Button
                variant="ghost"
                onClick={step === "package" ? onClose : handleBack}
                className="rounded-xl sm:rounded-2xl h-12 sm:h-14 lg:h-16 px-4 sm:px-10 font-bold hover:bg-zinc-100 transition-all text-zinc-400 hover:text-zinc-900 group text-xs sm:text-sm uppercase tracking-wider"
              >
                {step === "package" ? (
                  "Cerrar"
                ) : (
                  <>
                    <ChevronLeft className="mr-1.5 sm:mr-3 group-hover:-translate-x-1 transition-transform" size={18} /> 
                    Volver
                  </>
                )}
              </Button>
              <Button
                onClick={step === "payment" ? handleFinish : handleNext}
                className={cn(
                  "flex-1 sm:flex-none rounded-xl sm:rounded-2xl h-12 sm:h-14 lg:h-16 px-6 sm:px-14 font-black transition-all shadow-xl group uppercase tracking-widest text-[10px] sm:text-sm",
                  step === "payment" ? "bg-primary text-white hover:bg-primary/90 shadow-primary/40" : "bg-black text-white hover:bg-black/90 shadow-black/40"
                )}
              >
                {step === "payment" ? (
                  <>
                    <MessageSquare className="mr-2 sm:mr-3 fill-current" size={18} /> 
                    <span className="truncate">Confirmar Reserva</span>
                  </>
                ) : (
                  <>
                    Siguiente Paso 
                    <ChevronRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" size={18} />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Sidebar - Your Booking (Fixed Desktop Sidebar) */}
          <aside className="w-full md:w-[380px] lg:w-[450px] bg-zinc-50 p-10 lg:p-14 hidden md:flex flex-col border-l border-zinc-100 overflow-y-auto custom-scrollbar">
            <div className="h-full flex flex-col">
              <h3 className="text-2xl font-display font-black mb-12 flex items-center gap-4 text-zinc-900">
                <div className="w-12 h-12 rounded-[1.25rem] bg-white shadow-xl flex items-center justify-center text-primary border border-zinc-50">
                  <Users size={24} />
                </div>
                Tu Reserva
              </h3>
              
              <div className="space-y-12 flex-1">
                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-zinc-100 flex items-center justify-center text-primary flex-shrink-0">
                      <CalendarIcon size={24} />
                    </div>
                    <div className="pt-1">
                      <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em] mb-2">
                        {isFullDay ? 'Fecha seleccionada' : 'Periodo de viaje'}
                      </p>
                      <p className="text-base font-black text-zinc-800 leading-none">
                        {date ? (
                          isFullDay 
                            ? format(date, "MMM dd, yyyy", { locale: es })
                            : `${format(date, "MMM dd", { locale: es })} - ${endDate ? format(endDate, "MMM dd, yyyy", { locale: es }) : '...'}`
                        ) : "Pendiente"}
                      </p>
                      {!isFullDay && date && (
                        <span className="inline-block mt-2 text-[9px] font-black text-primary bg-primary/5 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                          {tour.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-zinc-100 flex items-center justify-center text-primary flex-shrink-0">
                      {isFullDay ? <MapPin size={24} /> : <Building2 size={24} />}
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em] mb-2">{isFullDay ? 'Opción elegida' : 'Alojamiento'}</p>
                      <p className="text-base font-black text-zinc-800 leading-tight truncate">{isFullDay ? (selectedPackage?.name || "No seleccionado") : (selectedHotelRate?.hotel || "No seleccionado")}</p>
                      {!isFullDay && selectedHotelRate && (
                        <Badge className="mt-3 bg-zinc-900 text-white border-none text-[9px] uppercase font-black tracking-widest px-3 py-1.5">
                           {currentCombo ? formatCombo(currentCombo) : ''}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-zinc-200 space-y-10">
                   <div className="flex justify-between items-center group">
                     <div className="flex flex-col">
                        <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">{participantsCount} x Viajeros</span>
                        <span className="text-xs font-bold text-zinc-500 italic">Tarifa: {"$"}{getPricePerPerson().toFixed(2)} / pax</span>
                     </div>
                     <span className="font-display font-black text-zinc-900 tracking-tighter text-3xl">{"$"}{total.toFixed(2)}</span>
                   </div>
                </div>

                <div className="mt-12 pt-14 border-t-4 border-double border-zinc-200 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-50 px-5 text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em]">Total estimado</div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-display font-black text-zinc-900 uppercase tracking-[0.2em] text-sm mb-2">INVERSIÓN</span>
                    <span className="text-6xl font-display font-black text-primary tracking-tighter leading-none">{"$"}{total.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 text-right font-black italic uppercase tracking-tighter mt-6 opacity-60 leading-relaxed">Tarifa dinámica sujeta a disponibilidad del operador local</p>
                </div>

                <div className="bg-primary/5 rounded-[2.5rem] p-10 border border-primary/10 mt-14 relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  <p className="text-xs text-primary font-bold leading-relaxed relative z-10">
                    <span className="font-black uppercase tracking-widest block mb-3 text-[10px]">Nota de Expertos:</span> 
                    Al enviar la solicitud, un especialista se pondrá en contacto contigo vía WhatsApp para confirmar los cupos en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
