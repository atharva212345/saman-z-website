import { useState } from 'react';
import { motion } from 'motion/react';
import { PackageCard } from './PackageCard';
import { TrendingUp, Sun, Users, Church } from 'lucide-react';
import { domesticPackages, internationalPackages } from '../data/packages';

// Seasonal destination mapping based on months
function getSeasonalDestinations() {
  const currentMonth = new Date().getMonth() + 1; // 1-12
  
  const domesticDestinations: string[] = [];
  const internationalDestinations: string[] = [];
  
  // March - June: Himachal, Kashmir, Uttarakhand, North East
  if (currentMonth >= 3 && currentMonth <= 6) {
    domesticDestinations.push('Himachal', 'Kashmir', 'Uttarakhand', 'North East');
  }
  
  // May - October: Leh Ladakh, Kedarnath
  if (currentMonth >= 5 && currentMonth <= 10) {
    domesticDestinations.push('Ladakh', 'Kedarnath');
  }
  
  // October - February: Goa, Karnataka, Kerala, Rajasthan, Gujarat, Andaman, Lakshadweep, Hyderabad, Varanasi, Delhi-Agra-Mathura
  if (currentMonth >= 10 || currentMonth <= 2) {
    domesticDestinations.push('Goa', 'Karnataka', 'Kerala', 'Rajasthan', 'Gujarat', 'Andaman', 'Lakshadweep', 'Hyderabad', 'Varanasi', 'Delhi', 'Agra', 'Mathura');
  }
  
  // April - September: Bali, Europe, Russia, Georgia, Kazakhstan
  if (currentMonth >= 4 && currentMonth <= 9) {
    internationalDestinations.push('Bali', 'Europe', 'Russia', 'Georgia', 'Kazakhstan');
  }
  
  // September - May: Thailand, Singapore, Malaysia, Vietnam, Philippines, Australia, New Zealand, Nepal, Bhutan, Sri Lanka, Dubai, Africa, Japan, South Korea, Maldives, Mauritius
  if (currentMonth >= 9 || currentMonth <= 5) {
    internationalDestinations.push('Thailand', 'Singapore', 'Malaysia', 'Vietnam', 'Philippines', 'Australia', 'New Zealand', 'Nepal', 'Bhutan', 'Sri Lanka', 'Dubai', 'Africa', 'Japan', 'South Korea', 'Maldives', 'Mauritius');
  }
  
  return { domesticDestinations, internationalDestinations };
}

// Filter packages based on seasonal destinations
function getSeasonalPackages() {
  const { domesticDestinations, internationalDestinations } = getSeasonalDestinations();
  
  const filteredDomestic = domesticPackages.filter(pkg => 
    domesticDestinations.some(dest => 
      pkg.title.toLowerCase().includes(dest.toLowerCase()) || 
      pkg.location.toLowerCase().includes(dest.toLowerCase())
    )
  );
  
  const filteredInternational = internationalPackages.filter(pkg => 
    internationalDestinations.some(dest => 
      pkg.title.toLowerCase().includes(dest.toLowerCase()) || 
      pkg.location.toLowerCase().includes(dest.toLowerCase()) ||
      pkg.country?.toLowerCase().includes(dest.toLowerCase())
    )
  );
  
  return [...filteredDomestic, ...filteredInternational].slice(0, 8);
}

// Get current season name
function getCurrentSeasonInfo() {
  const currentMonth = new Date().getMonth() + 1;
  const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  let seasonName = '';
  let seasonDescription = '';
  
  if (currentMonth >= 3 && currentMonth <= 6) {
    seasonName = 'Spring & Summer';
    seasonDescription = `Perfect for Himachal, Kashmir, Uttarakhand & North East in ${monthNames[currentMonth]}`;
  } else if (currentMonth >= 10 || currentMonth <= 2) {
    seasonName = 'Winter Season';
    seasonDescription = `Ideal for Kerala, Rajasthan, Goa, Andaman & beach destinations in ${monthNames[currentMonth]}`;
  } else {
    seasonName = 'Best Season';
    seasonDescription = `Top destinations handpicked for ${monthNames[currentMonth]}`;
  }
  
  return { seasonName, seasonDescription };
}

export function SeasonalDealsSection() {
  const [activeTab, setActiveTab] = useState('trending');

  const tabs = [
    { id: 'trending', label: 'Trending Now', icon: TrendingUp },
    { id: 'summer', label: 'Summer Deals', icon: Sun },
    { id: 'group', label: 'Group Departures', icon: Users },
    { id: 'pilgrimage', label: 'Pilgrimage Specials', icon: Church },
  ];
  
  // Get dynamically filtered seasonal packages
  const seasonalPackages = getSeasonalPackages();
  const seasonInfo = getCurrentSeasonInfo();

  const dealsData = {
    trending: seasonalPackages,
    summer: [
      {
        id: 'dom-7',
        title: 'Himachal Adventure - Manali Shimla',
        location: 'Himachal Pradesh',
        duration: '6 Days / 5 Nights',
        price: 17500,
        originalPrice: 22500,
        image: 'https://images.unsplash.com/photo-1692718605027-71424c748e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hY2hhbCUyMFByYWRlc2glMjBtb3VudGFpbnN8ZW58MXx8fHwxNzcxODQ4NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.6,
        reviews: 167,
        category: 'Domestic',
        highlights: ['Rohtang Pass', 'Solang Valley', 'Mall Road', 'Adventure Sports']
      },
      {
        id: 'dom-4',
        title: 'North East Explorer - Gangtok Darjeeling',
        location: 'Sikkim & West Bengal',
        duration: '6 Days / 5 Nights',
        price: 19500,
        originalPrice: 24500,
        image: 'https://images.unsplash.com/photo-1543341724-c6f823532cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYW5ndG9rJTIwU2lra2ltJTIwbW9uYXN0ZXJ5fGVufDF8fHx8MTc3MTkxMDM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.9,
        reviews: 156,
        category: 'Domestic',
        highlights: ['Tsomgo Lake', 'Tiger Hill', 'Tea Gardens', 'Monasteries']
      },
      {
        id: 'intl-2',
        title: 'Dubai Extravaganza with Desert Safari',
        location: 'Dubai, UAE',
        duration: '4 Days / 3 Nights',
        price: 41500,
        originalPrice: 49500,
        image: 'https://images.unsplash.com/photo-1651063820152-d3e7a27b4d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMEJ1cmolMjBLaGFsaWZhJTIwc2t5bGluZXxlbnwxfHx8fDE3NzE4NTY1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.7,
        reviews: 212,
        category: 'International',
        highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Marina Cruise']
      },
      {
        id: 'intl-4',
        title: 'Maldives Luxury Retreat',
        location: 'Maldives',
        duration: '4 Days / 3 Nights',
        price: 52999,
        originalPrice: 62000,
        image: 'https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc3MTg0Njk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 5.0,
        reviews: 178,
        category: 'International',
        highlights: ['Overwater Villas', 'Diving & Snorkeling', 'Private Beach', 'Spa Treatments']
      },
      {
        id: 'intl-11',
        title: 'Thailand Paradise - Bangkok Phuket',
        location: 'Thailand',
        duration: '6 Days / 5 Nights',
        price: 38900,
        originalPrice: 46500,
        image: 'https://images.unsplash.com/photo-1691488822390-0fd80c389953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGFpbGFuZCUyMEJhbmdrb2slMjB0ZW1wbGV8ZW58MXx8fHwxNzcyNjMyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.7,
        reviews: 223,
        category: 'International',
        highlights: ['Grand Palace', 'Phi Phi Islands', 'Beach Resort', 'Thai Massage']
      }
    ],
    group: [
      {
        id: 'dom-6',
        title: 'Goa Beach Paradise',
        location: 'Goa, India',
        duration: '4 Days / 3 Nights',
        price: 12500,
        originalPrice: 16000,
        image: 'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaGVzJTIwSW5kaWF8ZW58MXx8fHwxNzcxOTM0MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.5,
        reviews: 145,
        category: 'Domestic',
        highlights: ['Beach Parties', 'Water Sports', 'Portuguese Forts', 'Nightlife']
      },
      {
        id: 'dom-5',
        title: 'Kerala Backwaters & Beaches',
        location: 'Kerala, South India',
        duration: '5 Days / 4 Nights',
        price: 15500,
        originalPrice: 19500,
        image: 'https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwaG91c2Vib2F0fGVufDF8fHx8MTc3MTgzMjg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.8,
        reviews: 267,
        category: 'Domestic',
        highlights: ['Houseboat Stay', 'Munnar Tea Estates', 'Alleppey Backwaters', 'Beach Resort']
      },
      {
        id: 'intl-5',
        title: 'Singapore City Experience',
        location: 'Singapore',
        duration: '4 Days / 3 Nights',
        price: 43500,
        originalPrice: 52000,
        image: 'https://images.unsplash.com/photo-1686455746285-4a921419bc6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBNYXJpbmElMjBCYXl8ZW58MXx8fHwxNzcxODgxNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.7,
        reviews: 201,
        category: 'International',
        highlights: ['Universal Studios', 'Gardens by the Bay', 'Sentosa Island', 'City Tours']
      },
      {
        id: 'intl-6',
        title: 'Vietnam Discovery - Hanoi & Halong Bay',
        location: 'Vietnam',
        duration: '5 Days / 4 Nights',
        price: 32500,
        originalPrice: 39500,
        image: 'https://images.unsplash.com/photo-1703555853329-b9fab31e92ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSGFsb25nJTIwQmF5fGVufDF8fHx8MTc3MTgzNjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.6,
        reviews: 156,
        category: 'International',
        highlights: ['Halong Bay Cruise', 'Hanoi Old Quarter', 'Cu Chi Tunnels', 'Street Food']
      }
    ],
    pilgrimage: [
      {
        id: 'dom-8',
        title: 'Varanasi & Ayodhya Pilgrimage',
        location: 'Uttar Pradesh',
        duration: '4 Days / 3 Nights',
        price: 14500,
        originalPrice: 18500,
        image: 'https://images.unsplash.com/photo-1701619878991-716d8fbb319f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMEdhbmdlcyUyMGdoYXRzfGVufDF8fHx8MTc3MTkxMDM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.9,
        reviews: 213,
        category: 'Religious',
        highlights: ['Kashi Vishwanath', 'Ganga Aarti', 'Ram Mandir', 'Holy Dip']
      },
      {
        id: 'dom-3',
        title: 'Golden Triangle - Delhi Agra Jaipur',
        location: 'North India',
        duration: '5 Days / 4 Nights',
        price: 16500,
        originalPrice: 21000,
        image: 'https://images.unsplash.com/photo-1681847627328-b1e0b71d0d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWolMjBNYWhhbCUyMEFncmF8ZW58MXx8fHwxNzcxOTEwMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.8,
        reviews: 312,
        category: 'Domestic',
        highlights: ['Taj Mahal', 'Red Fort', 'Amber Fort', 'City Palace']
      },
      {
        id: 'intl-7',
        title: 'Malaysia Multi-City - KL & Langkawi',
        location: 'Malaysia',
        duration: '6 Days / 5 Nights',
        price: 38500,
        originalPrice: 46000,
        image: 'https://images.unsplash.com/photo-1533118673680-d7eaa85beb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYSUyMFBldHJvbmFzJTIwVG93ZXJzfGVufDF8fHx8MTc3MTkxMDM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.7,
        reviews: 175,
        category: 'International',
        highlights: ['Petronas Towers', 'Batu Caves', 'Island Resort', 'Sky Bridge']
      },
      {
        id: 'intl-8',
        title: 'Europe Highlights - Paris London Switzerland',
        location: 'Europe',
        duration: '10 Days / 9 Nights',
        price: 135000,
        originalPrice: 165000,
        image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJpcyUyMEVpZmZlbCUyMFRvd2VyfGVufDF8fHx8MTc3MTkwODIwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rating: 4.9,
        reviews: 167,
        category: 'International',
        highlights: ['Eiffel Tower', 'Big Ben', 'Swiss Alps', 'River Cruise']
      }
    ]
  };

  const currentDeals = dealsData[activeTab as keyof typeof dealsData];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {activeTab === 'trending' ? `${seasonInfo.seasonName} Trending Destinations` : 'Seasonal Deals & Offers'}
          </h2>
          <p className="text-gray-600 text-lg">
            {activeTab === 'trending' ? seasonInfo.seasonDescription : 'Limited time special packages at unbeatable prices'}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1E88E5] text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#1E88E5] hover:text-[#1E88E5]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PackageCard {...deal} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}