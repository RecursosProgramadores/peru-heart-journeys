import React, { useState, useEffect } from "react";
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
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, Users, User, Mail, MessageSquare, ChevronRight, ChevronLeft, CreditCard, Building2, Bed, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: FullDayTour | Tour;
}

type Step = "package" | "participants" | "payment";

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, tour }) => {
  const isFullDay = 'id' in tour;
  const [step, setStep] = useState<Step>("package");
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // State for FullDayTour
  const [selectedPackage, setSelectedPackage] = useState<any>(isFullDay ? (tour as FullDayTour).packages?.[0] : null);
  
  // State for Multi-day Tour
  const [selectedHotelRate, setSelectedHotelRate] = useState<any>(!isFullDay ? (tour as Tour).rates?.[0] : null);
  const [accommodationType, setAccommodationType] = useState<"single" | "doble" | "triple">("doble");

  const [participantsCount, setParticipantsCount] = useState(1);
  const [buyerInfo, setBuyerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
  });
  const [participantsInfo, setParticipantsInfo] = useState<{
    [key: number]: { firstName: string; lastName: string; email: string; whatsapp: string };
  }>({});

  useEffect(() => {
    if (isFullDay) {
      const fdt = tour as FullDayTour;
      if (fdt.packages?.[0]) setSelectedPackage(fdt.packages[0]);
    } else {
      const t = tour as Tour;
      if (t.rates?.[0]) setSelectedHotelRate(t.rates[0]);
    }
  }, [tour, isFullDay]);

  const serviceFee = 1.5;
  
  const getPricePerPerson = () => {
    if (isFullDay) {
      return selectedPackage?.price || 0;
    } else {
      const priceStr = selectedHotelRate?.[accommodationType];
      if (!priceStr || priceStr === "-") return 0;
      return parseFloat(priceStr);
    }
  };

  const total = getPricePerPerson() * participantsCount + serviceFee;

  const handleNext = () => {
    if (step === "package") setStep("participants");
    else if (step === "participants") setStep("payment");
  };

  const handleBack = () => {
    if (step === "participants") setStep("package");
    else if (step === "payment") setStep("participants");
  };

  const handleParticipantChange = (index: number, field: string, value: string) => {
    setParticipantsInfo({
      ...participantsInfo,
      [index]: { ...participantsInfo[index], [field]: value },
    });
  };

  const handleFinish = () => {
    const dateStr = date ? format(date, "PPP", { locale: es }) : "No seleccionada";
    let message = `*Nueva Reserva: ${tour.title}*\n\n`;
    message += `📅 *Fecha:* ${dateStr}\n`;
    
    if (isFullDay) {
      message += `📦 *Paquete:* ${selectedPackage?.name}\n`;
    } else {
      message += `🏨 *Hotel:* ${selectedHotelRate?.hotel}\n`;
      message += `🛏️ *Acomodación:* ${accommodationType.toUpperCase()}\n`;
    }
    
    message += `👤 *Pasajeros:* ${participantsCount}\n`;
    message += `💰 *Total estimada:* $${total.toFixed(2)}\n\n`;
    
    message += `*Datos del Comprador:*\n`;
    message += `- Nombre: ${buyerInfo.firstName} ${buyerInfo.lastName}\n`;
    message += `- Email: ${buyerInfo.email}\n\n`;

    message += `*Información de Pasajeros:*\n`;
    for (let i = 1; i <= participantsCount; i++) {
      const p = participantsInfo[i];
      if (p) {
        message += `Pasajero ${i}: ${p.firstName} ${p.lastName} (${p.whatsapp})\n`;
      }
    }

    const whatsappUrl = `https://wa.me/51942293293?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-none shadow-2xl rounded-3xl sm:max-h-[90vh]">
        <div className="flex flex-col md:flex-row h-full">
          {/* Main Content Area */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto">
            <DialogHeader className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 capitalize">
                  {tour.category}
                </Badge>
                {step === "package" && <Badge>Paso 1: {isFullDay ? 'Paquete' : 'Hotel & Acomodación'}</Badge>}
                {step === "participants" && <Badge>Paso 2: Participantes</Badge>}
                {step === "payment" && <Badge>Paso 3: Confirmación</Badge>}
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
                {tour.title}
              </DialogTitle>
            </DialogHeader>

            {/* Stepper */}
            <div className="flex items-center gap-4 mb-8">
               <div className={cn("flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold", step === "package" ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>1</div>
               <div className="h-px bg-border flex-1"></div>
               <div className={cn("flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold", step === "participants" ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>2</div>
               <div className="h-px bg-border flex-1"></div>
               <div className={cn("flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold", step === "payment" ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>3</div>
            </div>

            {step === "package" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-sm font-bold mb-3 block">Selecciona la fecha de salida</Label>
                    <div className="border rounded-2xl p-2 bg-muted/20">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border-none"
                        locale={es}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {isFullDay ? (
                      <>
                        <Label className="text-sm font-bold block">Selecciona un paquete</Label>
                        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                          {(tour as FullDayTour).packages?.map((pkg) => (
                            <div
                              key={pkg.name}
                              onClick={() => setSelectedPackage(pkg)}
                              className={cn(
                                "p-4 rounded-xl border-2 cursor-pointer transition-all",
                                selectedPackage?.name === pkg.name 
                                  ? "border-primary bg-primary/5 ring-4 ring-primary/10" 
                                  : "border-border hover:border-primary/50"
                              )}
                            >
                              <div className="flex justify-between items-start">
                                <h4 className="font-bold text-sm tracking-tight">{pkg.name}</h4>
                                <span className="text-primary font-bold text-lg">${pkg.price}</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{pkg.description}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <Label className="text-sm font-bold block">Selecciona Categoría de Hotel</Label>
                        <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                          {(tour as Tour).rates?.map((rate, idx) => (
                            <div
                              key={idx}
                              onClick={() => setSelectedHotelRate(rate)}
                              className={cn(
                                "p-3 rounded-xl border-2 cursor-pointer transition-all",
                                selectedHotelRate?.hotel === rate.hotel 
                                  ? "border-primary bg-primary/5 ring-4 ring-primary/10" 
                                  : "border-border hover:border-primary/50"
                              )}
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <Building2 size={14} className="text-primary" />
                                  <h4 className="font-bold text-xs">{rate.hotel}</h4>
                                </div>
                                {rate.isRecommended && <Badge className="text-[9px] bg-primary/20 text-primary border-none">Top</Badge>}
                              </div>
                            </div>
                          ))}
                        </div>

                        <Label className="text-sm font-bold block mt-4">Tipo de Acomodación</Label>
                        <div className="grid grid-cols-3 gap-2">
                           {(['single', 'doble', 'triple'] as const).map((type) => {
                             const price = selectedHotelRate?.[type];
                             const isDisabled = !price || price === "-";
                             return (
                               <div
                                 key={type}
                                 onClick={() => !isDisabled && setAccommodationType(type)}
                                 className={cn(
                                   "p-3 rounded-xl border-2 text-center cursor-pointer transition-all flex flex-col items-center",
                                   accommodationType === type 
                                      ? "border-primary bg-primary/5" 
                                      : "border-border hover:border-primary/30",
                                   isDisabled && "opacity-30 cursor-not-allowed grayscale"
                                 )}
                               >
                                 <Bed size={16} className={cn(accommodationType === type ? "text-primary" : "text-muted-foreground")} />
                                 <span className="text-[10px] uppercase font-bold mt-1">{type === 'single' ? 'Simple' : type}</span>
                                 <span className="text-xs font-black mt-1">${price || '-'}</span>
                               </div>
                             );
                           })}
                        </div>
                      </>
                    )}

                    <div>
                      <Label className="text-sm font-bold mb-2 block">Número de personas</Label>
                      <Select value={participantsCount.toString()} onValueChange={(v) => setParticipantsCount(parseInt(v))}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Personas" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[200px]">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                            <SelectItem key={n} value={n.toString()}>
                              <div className="flex items-center gap-2">
                                <Users size={14} />
                                {n} {n === 1 ? 'Persona' : 'Personas'}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === "participants" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-3">
                   <h3 className="font-bold flex items-center gap-2 text-primary">
                    <User size={18} /> Información del Comprador
                   </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input placeholder="Nombre *" value={buyerInfo.firstName} onChange={(e) => setBuyerInfo({...buyerInfo, firstName: e.target.value})} className="rounded-xl" />
                      <Input placeholder="Apellido *" value={buyerInfo.lastName} onChange={(e) => setBuyerInfo({...buyerInfo, lastName: e.target.value})} className="rounded-xl" />
                      <Input type="email" placeholder="Email *" value={buyerInfo.email} onChange={(e) => setBuyerInfo({...buyerInfo, email: e.target.value})} className="rounded-xl" />
                      <Input type="email" placeholder="Confirmar Email *" className="rounded-xl" />
                   </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold flex items-center gap-2 text-primary">
                    <Users size={18} /> Información de Pasajeros
                  </h3>
                  <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                    {Array.from({ length: participantsCount }).map((_, i) => (
                      <div key={i} className="p-4 rounded-xl border bg-muted/10 space-y-3">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Pasajero {i + 1}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input placeholder="Nombre *" className="rounded-xl" onChange={(e) => handleParticipantChange(i + 1, 'firstName', e.target.value)} />
                          <Input placeholder="Apellido *" className="rounded-xl" onChange={(e) => handleParticipantChange(i + 1, 'lastName', e.target.value)} />
                          <Input placeholder="WhatsApp / Teléfono *" className="rounded-xl" onChange={(e) => handleParticipantChange(i + 1, 'whatsapp', e.target.value)} />
                          <Input placeholder="Nacionalidad" className="rounded-xl" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="space-y-6 animate-in fade-in duration-500 flex flex-col items-center justify-center py-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 animate-bounce">
                  <CreditCard size={40} />
                </div>
                <h3 className="text-2xl font-bold">Reserva casi lista</h3>
                <p className="text-muted-foreground max-w-sm text-sm">
                  Serás redirigido a WhatsApp con toda la información estructurada. Nuestro equipo confirmará disponibilidad y métodos de pago.
                </p>
                <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 w-full max-w-md text-left mt-4 shadow-sm">
                   <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-primary">Resumen del Viaje</h4>
                   <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-muted-foreground shrink-0">Tour:</span>
                        <span className="font-bold text-right">{tour.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fecha:</span>
                        <span className="font-bold">{date ? format(date, "PPP", { locale: es }) : '-'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Selección:</span>
                        <span className="font-bold">{isFullDay ? selectedPackage?.name : selectedHotelRate?.hotel}</span>
                      </div>
                      <div className="flex justify-between border-t pt-3 font-black text-xl text-primary">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                   </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="ghost"
                onClick={step === "package" ? onClose : handleBack}
                className="rounded-xl h-12 px-6 font-bold"
              >
                {step === "package" ? "Cancelar" : (
                  <><ChevronLeft className="mr-2" size={16} /> Volver</>
                )}
              </Button>
              <Button
                onClick={step === "payment" ? handleFinish : handleNext}
                className={cn(
                  "rounded-xl h-12 px-8 font-black transition-all",
                  step === "payment" ? "bg-primary text-white hover:bg-primary/90" : "bg-black text-white hover:bg-black/90"
                )}
              >
                {step === "payment" ? (
                  <><MessageSquare className="mr-2 fill-current" size={16} /> Confirmar en WhatsApp</>
                ) : (
                  <>Siguiente <ChevronRight className="ml-2" size={16} /></>
                )}
              </Button>
            </div>
          </div>

          {/* Sidebar - Your Booking */}
          <div className="w-full md:w-80 bg-muted/10 p-6 md:p-8 flex flex-col border-t md:border-t-0 md:border-l">
            <h3 className="text-lg font-black mb-6 flex items-center gap-2 text-foreground">
              <Users size={20} className="text-primary" /> Tu Reserva
            </h3>
            
            <div className="space-y-6 flex-1">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <CalendarIcon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Fecha</p>
                    <p className="text-sm font-bold">{date ? format(date, "MMM dd, yyyy", { locale: es }) : "Seleccionar"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    {isFullDay ? <MapPin size={18} /> : <Building2 size={18} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{isFullDay ? 'Paquete' : 'Acomodación'}</p>
                    <p className="text-sm font-bold truncate">{isFullDay ? (selectedPackage?.name || "Pendiente") : (selectedHotelRate?.hotel || "Pendiente")}</p>
                    {!isFullDay && selectedHotelRate && (
                      <p className="text-[10px] font-bold text-primary uppercase">{accommodationType}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t space-y-4">
                 <div className="flex justify-between items-center text-sm font-medium">
                   <div className="flex flex-col">
                      <span className="text-muted-foreground">{participantsCount} x Viajeros</span>
                      <span className="text-[10px] text-muted-foreground italic">Tarifa base c/u: ${getPricePerPerson()}</span>
                   </div>
                   <span className="font-bold">${(participantsCount * getPricePerPerson()).toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">Cargo de gestión</span>
                   <span className="font-bold">${serviceFee.toFixed(2)}</span>
                 </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-border/50">
              <div className="flex justify-between items-end mb-1">
                <span className="font-black text-foreground uppercase tracking-wider text-xs italic">Total</span>
                <span className="text-3xl font-black text-primary tracking-tighter">${total.toFixed(2)}</span>
              </div>
              <p className="text-[9px] text-muted-foreground text-right font-medium italic">Tarifa sujeta a disponibilidad</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
