import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Phone, Star, ShieldCheck, Clock, Zap } from "lucide-react";

const countries = [
  { name: "Perú", code: "+51", flag: "🇵🇪" },
  { name: "Estados Unidos", code: "+1", flag: "🇺🇸" },
  { name: "España", code: "+34", flag: "🇪🇸" },
  { name: "México", code: "+52", flag: "🇲🇽" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "Ecuador", code: "+593", flag: "🇪🇨" },
  { name: "Bolivia", code: "+591", flag: "🇧🇴" },
  { name: "Reino Unido", code: "+44", flag: "🇬🇧" },
  { name: "Alemania", code: "+49", flag: "🇩🇪" },
  { name: "Francia", code: "+33", flag: "🇫🇷" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+51",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const waMessage = `Hola, mi nombre es ${formData.firstName} ${formData.lastName}. 
Mi correo es: ${formData.email}
Mi teléfono es: ${formData.countryCode} ${formData.phone}
Mis planes de viaje son: ${formData.message}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/51942293293?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, countryCode: value }));
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container max-w-4xl px-4 mx-auto leading-relaxed">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            ¡Empieza a planificar tu viaje hoy!
          </h2>
          <p className="mb-6 font-body text-xl text-muted-foreground">
            Cuéntenos sus sueños de viaje: los haremos realidad.
          </p>

          {/* TripAdvisor Badge Stylized */}
          <div className="inline-flex items-center gap-3 py-2 px-5 bg-muted/30 rounded-full border border-border/50 shadow-sm">
            <span className="text-sm font-body font-medium text-foreground">
              Calificado con un <span className="font-bold">96% de "Excelente"</span> por los viajeros:
            </span>
            <div className="flex items-center gap-1.5 py-1 px-3 bg-[#00AF87] rounded text-white font-bold text-xs">
              <span className="text-[10px]">Tripadvisor</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="space-y-2">
                <Label className="text-lg font-bold">Nombre de pila</Label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="h-14 bg-white border-muted-foreground/30 rounded-lg text-lg px-4"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label className="text-lg font-bold">Apellido</Label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="h-14 bg-white border-muted-foreground/30 rounded-lg text-lg px-4"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-lg font-bold">Correo electrónico</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Te enviaremos tu itinerario aquí"
                  className="h-14 bg-white border-muted-foreground/30 rounded-lg text-lg px-4"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label className="text-lg font-bold">Número de teléfono</Label>
                <div className="flex gap-3">
                  <Select value={formData.countryCode} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-[120px] h-14 bg-white border-muted-foreground/30 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c.code} value={c.code}>
                          <span className="flex items-center gap-2">
                            <span>{c.flag}</span>
                            <span>{c.code}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="flex-1 h-14 bg-white border-muted-foreground/30 rounded-lg text-lg px-4"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label className="text-lg font-bold">Cuéntanos más sobre tus planes de viaje:</Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Ej Pareja de 45 años viajando mayo 2026. Interesados en Machu Picchu, Montaña de Colores y más en 8 días con hoteles 3 estrellas."
                className="bg-white border-muted-foreground/30 rounded-lg text-lg p-5 resize-none leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center">
              <Button
                type="submit"
                size="xl"
                className="w-full md:w-auto px-16 h-16 rounded-lg bg-[#FF6B2C] hover:bg-[#e85a1b] text-white font-bold text-xl shadow-xl shadow-orange-200 transition-all active:scale-95"
              >
                Planifica mi viaje de ensueño
              </Button>

              {/* Footer Stats under button */}
              <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base font-bold text-foreground/80">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FF6B2C]" />
                  No se requiere pago
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FF6B2C]" />
                  Respuesta en 24 horas
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#FF6B2C]" />
                  100% hecho a medida
                </span>
              </div>

              {/* Legal Footer */}
              <p className="mt-8 text-center text-xs md:text-sm text-muted-foreground max-w-2xl px-4">
                *Al enviar esta información, confirmo que he leído y acepto los{" "}
                <Link to="/terminos" className="text-[#FF6B2C] underline">Términos y Condiciones</Link> y la{" "}
                <Link to="/privacidad" className="text-[#FF6B2C] underline">Política de Privacidad</Link>.
              </p>

              {/* Contact Footer Help */}
              <div className="mt-12 pt-8 border-t border-border w-full text-center space-y-2">
                <h4 className="text-lg font-bold">¿Necesitas ayuda? Contáctanos directamente:</h4>
                <p className="text-foreground font-medium">
                  reservas@inkateamtravel.com | Número gratuito en PE: <span className="font-bold">+51 942293293</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
