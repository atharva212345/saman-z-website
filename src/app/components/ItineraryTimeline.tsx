import { MapPin, Check } from 'lucide-react';

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  return (
    <div className="relative">
      {itinerary.map((day, index) => (
        <div key={day.day} className="flex gap-6 mb-8 relative">
          {/* Timeline line */}
          {index !== itinerary.length - 1 && (
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary opacity-30"></div>
          )}
          
          {/* Day number circle */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold relative z-10 shadow-lg">
              {day.day}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={20} className="text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-800">Day {day.day}: {day.title}</h4>
                <p className="text-gray-600 mt-1">{day.description}</p>
              </div>
            </div>
            
            {day.activities.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Activities:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {day.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
