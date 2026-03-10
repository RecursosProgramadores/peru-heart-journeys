import { Medal } from "lucide-react";

const TrustBar = () => {
    return (
        <div className="bg-[#f5f5f3] py-6 border-y border-border/50">
            <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
                {/* Stats Section */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-12 w-full md:w-auto">
                    <div className="flex items-center gap-3">
                        <span className="font-display text-3xl font-bold text-orange-500">21K+</span>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider leading-tight">Happy</span>
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider导致 leading-tight">Customers</span>
                        </div>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-border/60" />

                    <div className="flex items-center gap-3">
                        <span className="font-display text-3xl font-bold text-orange-500">1.5K+</span>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider leading-tight">5 Star</span>
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider leading-tight">Reviews</span>
                        </div>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-border/60" />

                    <div className="flex items-center gap-3">
                        <span className="font-display text-3xl font-bold text-orange-500">96%</span>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider leading-tight">Excellence</span>
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider leading-tight">Rating</span>
                        </div>
                    </div>
                </div>

                {/* Logos Section */}
                <div className="flex items-center gap-4 md:gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                            <Medal className="w-8 h-8 text-muted-foreground" />
                            <span className="text-[8px] font-bold text-muted-foreground uppercase mt-1">Traveler's choice</span>
                            <span className="text-[8px] font-bold text-muted-foreground -mt-1">202{i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
