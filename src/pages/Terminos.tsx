import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Scale, FileText, ShieldCheck, HelpCircle } from "lucide-react";

const Terminos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 font-body">
      <div className="container-narrow px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">Documentación Legal</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-6">Términos y <span className="text-primary italic">Condiciones</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Por favor, lea atentamente estos términos antes de reservar nuestros servicios.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl border border-border/60 p-8 md:p-16 space-y-12 text-muted-foreground leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Scale className="text-primary" /> 1. Aceptación de los Términos
            </h2>
            <p>
              Al utilizar los servicios de Inkateam Travel SAC, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios ni realizar reservas a través de nuestra plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <FileText className="text-primary" /> 2. Reservas y Pagos
            </h2>
            <div className="space-y-4">
              <p>
                Para confirmar cualquier reserva, se requiere un pago por adelantado del porcentaje especificado en la cotización o paquete elegido. El saldo restante deberá ser cancelado según los plazos establecidos previamente al inicio del servicio.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los precios están expresados en Dólares Americanos (USD) a menos que se indique lo contrario.</li>
                <li>Inkateam Travel se reserva el derecho de modificar los precios en caso de variaciones externas significativas (tasas gubernamentales, combustibles, etc.).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <ShieldCheck className="text-primary" /> 3. Cancelaciones y Reembolsos
            </h2>
            <p>
              Las políticas de cancelación varían según el tipo de tour o servicio:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Tours Regulares:</strong> Cancelaciones con más de 15 días de antelación pueden estar sujetas a cargos administrativos.</li>
              <li><strong>Camino Inca y Entradas a Machu Picchu:</strong> Estos servicios son NO reembolsables y NO transferibles por disposición de las autoridades peruanas.</li>
              <li><strong>No Show:</strong> Si el pasajero no se presenta a la hora y lugar indicados, se considerará el servicio como utilizado sin derecho a reembolso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <HelpCircle className="text-primary" /> 4. Responsabilidades y Seguros
            </h2>
            <p>
              Inkateam Travel actúa como agente intermediario entre el cliente y los proveedores de servicios (transporte, hoteles, guías). Aunque seleccionamos cuidadosamente a nuestros colaboradores, no nos hacemos responsables por retrasos, accidentes o pérdidas causadas por terceros o eventos de fuerza mayor (clima, huelgas, etc.).
            </p>
            <p className="mt-4 font-bold text-foreground italic">
              Se recomienda encarecidamente a todos nuestros viajeros contar con un seguro de viaje integral que cubra cancelaciones, salud y repatriación.
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

export default Terminos;
