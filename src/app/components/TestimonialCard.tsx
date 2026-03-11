import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  text: string;
}

export function TestimonialCard({ name, location, avatar, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-100">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={18} 
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed italic flex-grow">"{text}"</p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
        {avatar && (
          <img 
            src={avatar} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
          />
        )}
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
}