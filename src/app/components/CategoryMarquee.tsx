import { Link } from 'react-router';

const categories = [
  { name: 'Kashmir Tours', icon: '🏔️', link: '/domestic-tours', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'Rajasthan Tours', icon: '🏰', link: '/domestic-tours', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { name: 'Thailand Packages', icon: '🏝️', link: '/international-tours', color: 'bg-green-50 text-green-700 border-green-200' },
  { name: 'Dubai Packages', icon: '🏙️', link: '/international-tours', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { name: 'Educational Tours', icon: '🎓', link: '/educational-tours', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { name: 'Honeymoon Special', icon: '💑', link: '/honeymoon-tours', color: 'bg-pink-50 text-pink-700 border-pink-200' },
  { name: 'Pilgrimage Tours', icon: '🕉️', link: '/religious-tours', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { name: 'Corporate Tours', icon: '💼', link: '/corporate', color: 'bg-gray-50 text-gray-700 border-gray-200' },
  { name: 'Bali Packages', icon: '🌴', link: '/international-tours', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { name: 'Maldives Tours', icon: '🏖️', link: '/international-tours', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { name: 'North East India', icon: '🌄', link: '/domestic-tours', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { name: 'Europe Tours', icon: '🗼', link: '/international-tours', color: 'bg-violet-50 text-violet-700 border-violet-200' },
];

export function CategoryMarquee() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-orange-50 to-blue-50 py-4 border-y border-gray-200 overflow-hidden">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-full">
          <div className="flex animate-marquee hover:animation-pause">
            {/* First set of categories */}
            {categories.map((category, index) => (
              <Link
                key={`first-${index}`}
                to={category.link}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm border-2 whitespace-nowrap mx-2 transition-all hover:scale-105 hover:shadow-md ${category.color}`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {categories.map((category, index) => (
              <Link
                key={`second-${index}`}
                to={category.link}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm border-2 whitespace-nowrap mx-2 transition-all hover:scale-105 hover:shadow-md ${category.color}`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}