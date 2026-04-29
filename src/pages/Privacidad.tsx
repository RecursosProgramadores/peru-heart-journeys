import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Database } from "lucide-react";

const Privacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 font-body">
      <div className="container-narrow px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">Privacidad</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-6">Política de <span className="text-primary italic">Privacidad</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tu confianza es lo más importante para nosotros. Conoce cómo protegemos tus datos personales.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl border border-border/60 p-8 md:p-16 space-y-12 text-muted-foreground leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Eye className="text-primary" /> 1. Información que Recopilamos
            </h2>
            <p>
              Recopilamos información personal necesaria para procesar sus reservas y mejorar su experiencia, tales como: nombre completo, número de pasaporte (necesario para boletos de tren y entradas), datos de contacto (email, WhatsApp) y preferencias de viaje.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Database className="text-primary" /> 2. Uso de la Información
            </h2>
            <p>
              Sus datos se utilizan exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Gestionar y confirmar sus reservas con hoteles, transporte y autoridades gubernamentales.</li>
              <li>Comunicarnos con usted respecto a su itinerario o cambios de último minuto.</li>
              <li>Enviar información promocional solo si usted ha otorgado su consentimiento explícito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Lock className="text-primary" /> 3. Protección de Datos
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la alteración o la destrucción. No vendemos ni compartimos sus datos con terceros con fines publicitarios ajenos a nuestra actividad turística.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Shield className="text-primary" /> 4. Tus Derechos
            </h2>
            <p>
              De acuerdo con la Ley de Protección de Datos Personales de Perú, usted tiene derecho a acceder, rectificar o solicitar la eliminación de su información de nuestra base de datos en cualquier momento. Para ello, puede escribirnos a <span className="text-primary font-bold">reservas@inkateamtravel.com</span>.
            </p>
          </section>

          <div className="pt-12 border-t border-border/60 text-sm italic">
            Última actualización: 28 de Abril, 2026. Inkateam Travel SAC.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
