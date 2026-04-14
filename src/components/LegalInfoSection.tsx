import React from "react";
import { Badge } from "./ui/badge";
import { Shield, FileText, ExternalLink } from "lucide-react";

const LegalInfoSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden relative border-t border-border/40">
      <div className="container-narrow px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-muted text-muted-foreground uppercase tracking-widest text-[10px]">Transparencia & Seguridad</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">Información importante <br /><span className="text-primary italic">antes de reservar</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Terms & Conditions */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold">Términos y Condiciones</h3>
            </div>
            
            <div className="space-y-6 mb-10">
               <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Reservas:</span> Las reservas se confirman mediante un pago inicial que asegura los servicios principales.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Pagos:</span> El saldo total debe completarse antes del inicio del viaje según el cronograma acordado.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Cancelaciones:</span> Aplican políticas específicas según el tipo de servicio y el tiempo de anticipación.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Responsabilidad:</span> Inkateam Travel actúa como intermediario profesional entre el cliente y los proveedores locales.</p>
               </div>
            </div>

            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-600 hover:gap-3 transition-all">
              Solicita términos completos <ExternalLink size={14} />
            </button>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold">Política de Privacidad</h3>
            </div>
            
            <div className="space-y-6 mb-10">
               <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Protección de datos:</span> Respetamos tu privacidad y protegemos la información que nos proporcionas bajo estándares internacionales.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Uso de datos:</span> Tu información se utiliza exclusivamente para el contacto inicial, la gestión de reservas y la comunicación directa.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Seguridad:</span> Tus datos personales nunca son compartidos con terceros sin tu autorización expresa y necesaria para el viaje.</p>
               </div>
            </div>

            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:gap-3 transition-all">
              Ver política de seguridad <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalInfoSection;
