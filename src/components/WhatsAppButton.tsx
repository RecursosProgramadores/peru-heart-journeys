import waIcon from "@/assets/logos/whatsapp.svg";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/51942293293"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 group"
            aria-label="Contáctanos por WhatsApp"
        >
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:animate-none"></span>

            {/* Main button */}
            <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-transform duration-300 transform group-hover:scale-110 active:scale-95">
                <img src={waIcon} alt="WhatsApp" className="w-9 h-9" />

                {/* Tooltip-like label that appears on hover */}
                <span className="absolute right-20 bg-white text-foreground font-bold px-4 py-2 rounded-xl border border-border shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block text-sm">
                    ¡Chatea con nosotros! 🇵🇪
                </span>
            </div>
        </a>
    );
};

export default WhatsAppButton;
