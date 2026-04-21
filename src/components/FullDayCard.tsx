import React from "react";
import { FullDayTour } from "@/data/fullDayTours";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

interface FullDayCardProps {
  tour: FullDayTour;
}

const FullDayCard: React.FC<FullDayCardProps> = ({ tour }) => {
  return (
    <Link to={`/full-days/${tour.id}`} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col h-full block">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <Badge className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-foreground hover:bg-white font-bold px-3 py-1 rounded-full shadow-lg border-none">
          <MapPin size={12} className="mr-1 text-primary" /> {tour.location}
        </Badge>

        <div className="absolute bottom-4 right-4 bg-primary text-white font-black px-4 py-1.5 rounded-full text-lg shadow-xl translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
          ${tour.price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-primary mb-3">
          <Clock size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">{tour.duration}</span>
        </div>
        
        <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {tour.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-8 flex-1">
          {tour.description}
        </p>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-border/50">
          <Button
            className="w-full rounded-xl bg-black hover:bg-black/90 text-white font-bold text-xs h-11 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5"
          >
            <Ticket size={16} className="mr-2" /> Tarifas & Reserva
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default FullDayCard;
