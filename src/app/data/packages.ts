// Centralized package data for both domestic and international tours

export interface Package {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  highlights?: string[];
  rating: number;
  reviews: number;
  category?: string;
  country?: string;
  budget: string;
  description: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  gallery: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export const domesticPackages: Package[] = [
  {
    id: "dom-1",
    title: "Green Kerala - Munnar Thekkady Alleppey Kovalam",
    location: "Kerala, India",
    duration: "7 Days / 6 Nights",
    price: 21800,
    originalPrice: 28000,
    image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwaG91c2Vib2F0fGVufDF8fHx8MTc3MjQyNjg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Munnar Tea Gardens", "Periyar Wildlife Safari", "Alleppey Houseboat", "Kovalam Beach", "Jatayu Park"],
    rating: 4.9,
    reviews: 287,
    category: "Hill Station & Beach",
    budget: "Mid-Range",
    description: "Experience the enchanting beauty of God's Own Country with tea gardens, wildlife sanctuaries, backwater houseboats, and pristine beaches. From misty Munnar hills to the golden sands of Kovalam, this Kerala tour offers the perfect blend of nature and relaxation.",
    inclusions: [
      "6 Nights accommodation in deluxe hotels",
      "Daily breakfast and dinner",
      "AC vehicle for all transfers & sightseeing",
      "Cochin airport pickup and Trivandrum drop",
      "All toll, parking, driver charges",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Lunch and meals during travel",
      "Entry tickets to monuments and parks",
      "Laundry, phone, room service charges",
      "Tips to hotel staff, guide, or driver",
      "Periyar boat ride, houseboat ride charges",
      "Any meals not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Cochin - Transfer to Munnar",
        description: "Arrival at Cochin Airport, transfer to Munnar (140km). Check-in to hotel and proceed for local sightseeing including Eravikulam National Park, famous for Nilgiri Tahr and Anamudi Peak views. Visit spice garden and chocolate factory.",
        activities: ["Cochin Airport pickup", "Drive to Munnar", "Eravikulam National Park", "Spice Garden visit", "Chocolate Factory"]
      },
      {
        day: 2,
        title: "Munnar Sightseeing",
        description: "Full day Munnar exploration visiting Mattupetty Dam with boating, Echo Point where voices reverberate in the mountains, Tea plantations, and Cardamom Mountains. Enjoy the stunning landscape and photography opportunities.",
        activities: ["Mattupetty Dam & Boating", "Echo Point", "Tea Garden Visit", "Cardamom Mountains", "Photography"]
      },
      {
        day: 3,
        title: "Munnar to Thekkady",
        description: "After breakfast, transfer to Thekkady (90km). En route visit cardamom mountains and tea plantations. Arrive at Thekkady, check-in to hotel. Evening explore spice market and enjoy optional Kathakali folk show.",
        activities: ["Transfer to Thekkady", "Tea & Cardamom plantations", "Spice Market", "Kathakali show (optional)"]
      },
      {
        day: 4,
        title: "Thekkady Wildlife - Transfer to Alleppey",
        description: "Early morning Periyar Wildlife Safari by boat (7am-9am, optional). After breakfast, check out and transfer to Alleppey. Check-in to houseboat and explore the famous Alleppey Backwaters. Overnight at hotel in Alleppey.",
        activities: ["Periyar Wildlife Boat Safari", "Transfer to Alleppey", "Backwater exploration", "Houseboat experience"]
      },
      {
        day: 5,
        title: "Alleppey - Jatayu Park - Kovalam",
        description: "After breakfast, visit Jatayu Earth Center - world's largest bird statue and nature park. Later transfer to Kovalam beach resort. Evening enjoy at beautiful Kovalam beach watching sunset.",
        activities: ["Jatayu Earth Center", "World's Largest Bird Sculpture", "Transfer to Kovalam", "Kovalam Beach evening"]
      },
      {
        day: 6,
        title: "Kanyakumari Day Trip",
        description: "Full day excursion to Kanyakumari (80km, 2 hours). Visit Kanyakumari Mata Temple, Vivekananda Rock Memorial, and witness the confluence of three seas. Evening return to Kovalam.",
        activities: ["Drive to Kanyakumari", "Kanyakumari Temple", "Vivekananda Rock Memorial", "Triveni Sangam", "Return to Kovalam"]
      },
      {
        day: 7,
        title: "Kovalam - Cochin Departure",
        description: "After breakfast, check out and transfer to Cochin Airport for your onward journey with beautiful memories of Kerala.",
        activities: ["Hotel checkout", "Transfer to Cochin", "Airport drop", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1707893013488-51672ef83425?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1693149455349-1828689b7b9e?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "dom-2",
    title: "Rangilo Rajasthan - Jaipur Pushkar Jodhpur Jaisalmer",
    location: "Rajasthan, India",
    duration: "7 Days / 6 Nights",
    price: 28500,
    originalPrice: 35000,
    image: "https://images.unsplash.com/photo-1668169064129-c17e6c8b8041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBKYWlzYWxtZXIlMjBmb3J0JTIwZGVzZXJ0fGVufDF8fHx8MTc3MjQyNjg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Amber Fort Sheesh Mahal", "Pushkar Brahma Temple", "Mehrangarh Fort", "Jaisalmer Desert Camp", "Camel Safari"],
    rating: 4.9,
    reviews: 342,
    category: "Cultural Heritage",
    budget: "Mid-Range",
    description: "Discover the royal grandeur of Rajasthan with majestic forts, desert landscapes, vibrant culture, and traditional hospitality. From pink city Jaipur to golden Jaisalmer, experience the magic of India's most colorful state with desert camping and camel safari.",
    inclusions: [
      "6 Nights accommodation (3-star deluxe hotels + desert camp)",
      "Breakfast & dinner (MAP plan)",
      "AC tempo traveler for all transfers",
      "Jaipur, Jodhpur pickup and drop",
      "30 minutes complimentary camel safari",
      "Cultural performances and bonfire at desert camp",
      "All toll, parking, fuel, driver allowance"
    ],
    exclusions: [
      "Air/train tickets",
      "Lunch and beverages",
      "Entry tickets to monuments",
      "Laundry, phone, room service charges",
      "Tips to staff, guide, or driver",
      "Optional activities (Ranthambore safari, boat rides)",
      "Chokhi Dhani dinner"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Jaipur - Pink City",
        description: "Reach Jaipur, transfer to hotel. Evening optional tour to Laxminarayan Temple (Birla Mandir) and Chokhi Dhani ethnic village resort for camel ride and puppet show. Overnight in Jaipur.",
        activities: ["Jaipur arrival", "Hotel check-in", "Birla Mandir (optional)", "Chokhi Dhani village (optional)"]
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description: "Full day tour of Jaipur. Visit grand Amber Fort with Sheesh Mahal, Gaitore royal cremation ground, Man Sagar Lake with Jal Mahal, City Palace Museum, Jantar Mantar observatory, and photo stop at iconic Hawa Mahal.",
        activities: ["Amber Fort & Sheesh Mahal", "Gaitore", "Jal Mahal", "City Palace", "Jantar Mantar", "Hawa Mahal"]
      },
      {
        day: 3,
        title: "Jaipur to Pushkar",
        description: "After breakfast, drive to Pushkar (145km, 3 hours). Check-in to hotel and visit the historic Pushkar Temple (only Brahma temple in India) and Anad Sagar Lake. Overnight in Pushkar.",
        activities: ["Transfer to Pushkar", "Brahma Temple", "Anad Sagar Lake", "Local market"]
      },
      {
        day: 4,
        title: "Pushkar to Jodhpur - Blue City",
        description: "Check out and drive to Jodhpur. Visit Umaid Bhawan Palace Museum, mighty Mehrangarh Fort with Moti Mahal and Phool Mahal, and Jaswant Thada marble cenotaph. Overnight in Jodhpur.",
        activities: ["Transfer to Jodhpur", "Umaid Bhawan Palace", "Mehrangarh Fort", "Moti & Phool Mahal", "Jaswant Thada"]
      },
      {
        day: 5,
        title: "Jodhpur to Jaisalmer - Golden City",
        description: "After breakfast, drive to Jaisalmer (280km). En route visit Jaisalmer War Memorial. On arrival, check-in to hotel. Evening free to explore colorful markets and fairs. Overnight at Jaisalmer.",
        activities: ["Transfer to Jaisalmer", "Jaisalmer War Memorial", "Hotel check-in", "Market exploration"]
      },
      {
        day: 6,
        title: "Jaisalmer Sightseeing & Desert Camp",
        description: "Full day Jaisalmer exploration. Visit golden Jaisalmer Fort, beautiful Havelis (Patwon-Ki, Nathmal-Ki, Salim Singh-Ki) with exquisite carvings, Gadisar Lake. Evening camel ride at Sam Sand Dunes with sunset view. Check-in to desert camp, enjoy folk performances, bonfire, and authentic Rajasthani dinner.",
        activities: ["Jaisalmer Fort", "Patwon & Nathmal Havelis", "Gadisar Lake", "Sam Sand Dunes camel safari", "Desert camp", "Folk dance & bonfire"]
      },
      {
        day: 7,
        title: "Jaisalmer to Jodhpur Departure",
        description: "After breakfast at desert camp, check out and drive back to Jodhpur. Transfer to railway station/airport for onward journey with memories of royal Rajasthan.",
        activities: ["Breakfast at camp", "Return to Jodhpur", "Railway/Airport drop", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1668169064129-c17e6c8b8041?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518050947974-4be8c7469f0c?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "dom-3",
    title: "Kashmir Paradise - Srinagar Sonmarg Pahalgam Gulmarg",
    location: "Kashmir, India",
    duration: "5 Days / 4 Nights",
    price: 14000,
    originalPrice: 18500,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwRGFsJTIwTGFrZSUyMFNyaW5hZ2FyJTIwaG91c2Vib2F0fGVufDF8fHx8MTc3MjQyNjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Dal Lake Shikara Ride", "Gulmarg Gondola", "Sonmarg Meadow of Gold", "Mughal Gardens", "Houseboat Stay"],
    rating: 4.9,
    reviews: 298,
    category: "Kashmir",
    budget: "Budget",
    description: "Experience the breathtaking beauty of Kashmir - the Paradise on Earth. From serene Dal Lake houseboats to snow-capped Gulmarg peaks, lush Pahalgam valleys to golden Sonmarg meadows, discover the magic of Kashmir's natural splendor.",
    inclusions: [
      "4 Nights accommodation (3-star hotel + deluxe houseboat)",
      "4 Breakfast & 4 Dinner (MAP plan)",
      "Innova Crysta for transfers & sightseeing",
      "Srinagar pickup & Srinagar drop",
      "All toll, parking, driver allowance",
      "Houseboat stay with dinner",
      "All applicable hotel taxes"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Gondola cable car ride (₹860 approx)",
      "Shikara ride charges",
      "Entry tickets & camera fees",
      "Pony rides at Sonmarg/Pahalgam (₹1000-1500)",
      "Union cab charges at Pahalgam (₹400 per person)",
      "Lunch & personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Srinagar - Mughal Gardens",
        description: "Arrive at Srinagar airport, transfer to hotel. After freshening up, visit famous Mughal Gardens - Nishat Bagh (Garden of Pleasure), Chashme Shahi (Natural Spring), Tulip Garden. Evening Dal Lake visit with Shikara ride. Dinner and overnight at Srinagar hotel.",
        activities: ["Airport pickup", "Nishat Bagh", "Chashme Shahi", "Tulip Garden", "Dal Lake Shikara ride"]
      },
      {
        day: 2,
        title: "Sonmarg Day Excursion",
        description: "After breakfast, drive to Sonmarg - 'Meadow of Gold' (87km). Scenic drive along Sindh River, visit Thajiwas Glacier (optional pony ride), enjoy snow and mountain landscapes. Return to Srinagar for dinner and overnight.",
        activities: ["Drive to Sonmarg", "Sindh River views", "Thajiwas Glacier", "Mountain photography", "Return to Srinagar"]
      },
      {
        day: 3,
        title: "Pahalgam Day Excursion",
        description: "Full day trip to picturesque Pahalgam Valley. En route visit saffron fields and Awantipora ruins. In Pahalgam, visit Betaab Valley and Aru Valley (optional union cab), walk along Lidder River. Return to Srinagar.",
        activities: ["Saffron fields", "Awantipora ruins", "Betaab Valley", "Aru Valley", "Lidder River walk"]
      },
      {
        day: 4,
        title: "Gulmarg Day Excursion",
        description: "After breakfast, drive to Gulmarg - meadow of flowers and ski resort (52km). Explore Gulmarg meadow, optional Gondola cable car ride to Kongdori, snow activities, St. Mary's Church visit. Return to Srinagar for overnight.",
        activities: ["Drive to Gulmarg", "Gondola ride (optional)", "Meadow exploration", "Snow activities", "St. Mary's Church"]
      },
      {
        day: 5,
        title: "Srinagar Departure",
        description: "After breakfast, check out from hotel and transfer to Srinagar Airport for onward journey with beautiful memories of Kashmir paradise.",
        activities: ["Hotel checkout", "Last-minute shopping", "Airport transfer", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606355792317-4dcadc93ed26?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570439694096-06126f3d3e51?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "dom-4",
    title: "Kashmir Vaishno Devi Darshan - Spiritual Journey",
    location: "Kashmir & Katra, India",
    duration: "8 Days / 7 Nights",
    price: 19850,
    originalPrice: 26000,
    image: "https://images.unsplash.com/photo-1667553930886-ce7c96782b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYWlzaG5vJTIwRGV2aSUyMHRlbXBsZSUyMHBpbGdyaW1hZ2UlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzcyNDI2ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Vaishno Devi Darshan", "Dal Lake Houseboat", "Sonmarg Glacier", "Gulmarg Gondola", "Doodhpathri Meadows"],
    rating: 4.8,
    reviews: 215,
    category: "Pilgrimage",
    budget: "Mid-Range",
    description: "Combine the spiritual experience of Mata Vaishno Devi pilgrimage with the scenic beauty of Kashmir. This special package blends divine blessings with breathtaking Himalayan landscapes, perfect for families seeking both spirituality and natural beauty.",
    inclusions: [
      "7 Nights accommodation (4N Srinagar hotel + 1N houseboat + 2N Katra)",
      "7 Breakfast & 7 Dinner (MAP plan)",
      "Innova Crysta for all transfers",
      "Srinagar pickup & Jammu drop",
      "All toll, parking, driver allowance",
      "Deluxe houseboat stay",
      "Railway station transfers",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Gondola & pony rides (₹860-2500)",
      "Shikara ride charges",
      "Entry tickets & camera fees",
      "Vaishno Devi helicopter/pony/palki (₹2500-9000)",
      "Lunch & personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Srinagar - Mughal Gardens",
        description: "Arrive at Srinagar, transfer to hotel. Visit Nishat Bagh, Chashme Shahi, Tulip Garden, and optional Shankaracharya Temple. Evening Dal Lake Shikara ride. Dinner and overnight at hotel.",
        activities: ["Airport arrival", "Mughal Gardens", "Tulip Garden", "Shankaracharya Temple", "Shikara ride"]
      },
      {
        day: 2,
        title: "Sonmarg Day Excursion",
        description: "Full day trip to Sonmarg - Meadow of Gold. Scenic Sindh River drive, Gumri/Zero Point excursion (subject to weather), Thajiwas Glacier visit, mountain landscapes. Return to Srinagar.",
        activities: ["Sonmarg drive", "Sindh River", "Thajiwas Glacier", "Zero Point", "Return to Srinagar"]
      },
      {
        day: 3,
        title: "Pahalgam Valley Tour",
        description: "Day trip to Pahalgam. En route visit saffron fields and Awantipora ruins. Explore Betaab Valley, Aru Valley (optional union cab), and Lidder River. Return to Srinagar for overnight.",
        activities: ["Saffron fields", "Awantipora", "Betaab Valley", "Aru Valley", "Lidder River"]
      },
      {
        day: 4,
        title: "Gulmarg Gondola & Snow Activities",
        description: "Visit Gulmarg hill resort. Gondola cable car ride (optional), meadow exploration, snow activities, St. Mary's Church. Return to Srinagar for overnight.",
        activities: ["Gulmarg drive", "Gondola ride", "Snow activities", "Meadow walk", "Church visit"]
      },
      {
        day: 5,
        title: "Doodhpathri - Houseboat Check-in",
        description: "After breakfast, visit Doodhpathri - Valley of Milk. Meadow walks, pine forests, riverside relaxation, nature photography. Check-in to deluxe houseboat on Dal Lake. Evening enjoy Dal Lake ambience and local shopping.",
        activities: ["Doodhpathri meadows", "Pine forests", "River streams", "Houseboat check-in", "Dal Lake evening"]
      },
      {
        day: 6,
        title: "Srinagar to Katra - Vaishno Devi Darshan",
        description: "After breakfast, transfer to Srinagar Railway Station. Board train to Katra. Arrival, hotel check-in. Evening proceed for holy Vaishno Devi Darshan (by walk/pony/helicopter - optional). Overnight at Katra.",
        activities: ["Train to Katra", "Hotel check-in", "Vaishno Devi trek", "Temple darshan", "Return to hotel"]
      },
      {
        day: 7,
        title: "Katra - Rest & Leisure",
        description: "Full day free for rest after darshan. Optional local market visit, temple revisit, or relaxation. Overnight at Katra hotel.",
        activities: ["Rest day", "Local market", "Relaxation", "Optional activities"]
      },
      {
        day: 8,
        title: "Katra to Jammu Departure",
        description: "After breakfast, check out and transfer to Jammu Airport for onward journey with divine blessings and beautiful memories.",
        activities: ["Hotel checkout", "Transfer to Jammu", "Airport drop", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1667553930886-ce7c96782b10?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606355792317-4dcadc93ed26?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "dom-5",
    title: "Pristine Andaman - Port Blair Havelock Neil Island",
    location: "Andaman & Nicobar Islands, India",
    duration: "5 Days / 4 Nights",
    price: 14350,
    originalPrice: 19500,
    image: "https://images.unsplash.com/photo-1745897472649-268b84cd0c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmRhbWFuJTIwTmljb2JhciUyMGJlYWNoJTIwY29yYWwlMjBibHVlJTIwd2F0ZXJ8ZW58MXx8fHwxNzcyNDI2ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Cellular Jail Light & Sound", "Ross Island", "Radhanagar Beach", "Coral Island Snorkeling", "Chidiya Tapu Sunset"],
    rating: 4.8,
    reviews: 324,
    category: "Beach & Islands",
    budget: "Mid-Range",
    description: "Discover the pristine beaches, crystal-clear waters, and rich marine life of the Andaman Islands. From historic Cellular Jail to the world-famous Radhanagar Beach, experience the tropical paradise with water sports, coral reefs, and stunning sunsets.",
    inclusions: [
      "4 Nights AC accommodation in Port Blair",
      "Daily breakfast & dinner (MAP plan)",
      "AC vehicle for all transfers & sightseeing",
      "Airport pickup and drop",
      "Ferry tickets to Havelock (Makruzz/Green Ocean)",
      "Ross & North Bay boat tickets (sharing)",
      "All entry permits, parking charges",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare/ship fare",
      "Lunch and beverages",
      "Water sports (scuba ₹3500, sea walking ₹3500, jet ski ₹1000)",
      "Guide at Cellular Jail",
      "Personal expenses and tips",
      "Camera fees",
      "Jolly ride & snorkeling charges"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Port Blair - City Tour",
        description: "Arrival at Port Blair airport, transfer to hotel. After lunch, visit historic Cellular Jail and picturesque Carbyn's Cove Beach. Evening enjoy the moving Light & Sound Show at Cellular Jail depicting freedom struggle. Overnight at Port Blair.",
        activities: ["Airport pickup", "Cellular Jail", "Carbyn's Cove Beach", "Light & Sound Show", "Hotel check-in"]
      },
      {
        day: 2,
        title: "Ross Island & North Bay Coral Island",
        description: "Full day island cruise. First visit Ross Island - erstwhile British capital with ruins of Chief Commissioner's house, church, bakery, and swimming pool. Then proceed to North Bay (Coral Island) for underwater coral viewing and water sports activities. Overnight at Port Blair.",
        activities: ["Ross Island ruins", "British heritage sites", "North Bay Coral Island", "Water sports", "Snorkeling"]
      },
      {
        day: 3,
        title: "Havelock Same Day Trip - Radhanagar Beach",
        description: "Early morning board private cruise to Havelock Island. Visit world-famous Radhanagar Beach (Asia's best beach) and Kalapather Beach. Enjoy pristine white sands and turquoise waters. Same day return to Port Blair. Overnight at hotel.",
        activities: ["Ferry to Havelock", "Radhanagar Beach", "Kalapather Beach", "Beach relaxation", "Return to Port Blair"]
      },
      {
        day: 4,
        title: "Port Blair Museums & Chidiya Tapu",
        description: "Full day city tour covering Chatham Saw Mill, Forest Museum, Fisheries Museum, Anthropological Museum, and Samundrika Museum. After lunch, visit Chidiya Tapu Beach - southernmost tip with lush mangroves and spectacular sunset point. Overnight at Port Blair.",
        activities: ["Chatham Saw Mill", "Museum tour", "Chidiya Tapu Beach", "Sunset point", "Bird watching"]
      },
      {
        day: 5,
        title: "Departure from Port Blair",
        description: "After breakfast, check out from hotel. Transfer to Port Blair Airport with wonderful memories of the tropical paradise.",
        activities: ["Hotel checkout", "Last-minute shopping", "Airport transfer", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1745897472649-268b84cd0c3c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583725920942-c77c4ba128cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "dom-6",
    title: "Himachal Holiday - Shimla Manali Solang Valley",
    location: "Himachal Pradesh, India",
    duration: "6 Days / 5 Nights",
    price: 14999,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1608723483857-a294e86241af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGltbGElMjBIaW1hY2hhbCUyMFByYWRlc2glMjBtb3VudGFpbnMlMjBzbm93fGVufDF8fHx8MTc3MjQyNjg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Mall Road Shimla", "Kufri Snow Point", "Hadimba Temple", "Solang Valley Adventure", "Atal Tunnel"],
    rating: 4.7,
    reviews: 267,
    category: "Hill Station",
    budget: "Budget",
    description: "Experience the charm of Himachal Pradesh with colonial Shimla and adventurous Manali. From Mall Road shopping to Solang Valley paragliding, Kufri snow activities to Atal Tunnel marvels, enjoy the perfect Himalayan hill station getaway.",
    inclusions: [
      "5 Nights accommodation (2N Shimla + 3N Manali)",
      "Daily morning tea, breakfast & dinner (MAPI)",
      "Chandigarh pickup & drop",
      "AC vehicle (Ertiga) for all transfers",
      "All toll, parking, fuel, driver charges",
      "All applicable taxes"
    ],
    exclusions: [
      "Air/train tickets",
      "Lunch and beverages",
      "Rohtang Pass permit (subject to availability)",
      "Entry fees at tourist attractions",
      "Adventure activities (paragliding, zorbing, ropeway)",
      "Peak season charges",
      "Medical & travel insurance",
      "Camera fees & personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Shimla",
        description: "Pickup from Chandigarh Railway Station/Airport. Scenic drive to Shimla (140km, 4-5 hours) through pine forests and winding mountain roads. Check-in to hotel. Evening visit Mall Road - heart of Shimla with colonial buildings, cafes and shops. Visit Lakkar Bazaar for wooden handicrafts. Overnight in Shimla.",
        activities: ["Chandigarh pickup", "Scenic drive to Shimla", "Hotel check-in", "Mall Road", "Lakkar Bazaar"]
      },
      {
        day: 2,
        title: "Shimla Local Sightseeing & Kufri",
        description: "After breakfast, full day Shimla tour. Visit Kufri for snow activities (in winter), horse riding, Himalayan views. Explore Indira Tourist Park and Himalayan Nature Park (mini zoo). Visit Jakhoo Temple (Lord Hanuman) with panoramic city views, Christ Church (neo-Gothic architecture), and The Ridge. Evening shopping and local cuisine. Overnight at hotel.",
        activities: ["Kufri excursion", "Indira Park", "Nature Park", "Jakhoo Temple", "Christ Church", "The Ridge"]
      },
      {
        day: 3,
        title: "Shimla to Manali",
        description: "After breakfast, check out and drive to Manali (250km, 7-8 hours). Scenic journey through Kullu Valley alongside River Beas, lush mountains and apple orchards. En route optional visit to Pandoh Dam and Kullu (famous for shawls). Arrival in Manali, hotel check-in. Relax and enjoy cool mountain climate. Overnight in Manali.",
        activities: ["Shimla to Manali drive", "Kullu Valley", "Beas River views", "Pandoh Dam", "Hotel check-in"]
      },
      {
        day: 4,
        title: "Manali Local Sightseeing",
        description: "Full day Manali exploration. Visit Hadimba Devi Temple (16th century wooden temple in cedar forest), Vashisht Village with hot water springs and ancient temples, Club House for indoor games, beautiful Tibetan Monasteries, and Van Vihar park. Evening explore Manali Mall Road for shopping woollens and handicrafts. Overnight at hotel.",
        activities: ["Hadimba Temple", "Vashisht hot springs", "Club House", "Tibetan Monasteries", "Van Vihar", "Mall Road"]
      },
      {
        day: 5,
        title: "Solang Valley & Atal Tunnel",
        description: "Adventure day! Visit Solang Valley - paradise for adventure lovers. Enjoy paragliding, zorbing, ropeway ride, and snow activities (seasonal). Drive through engineering marvel Atal Tunnel connecting Manali to Lahaul Valley. Optional Rohtang Pass visit (subject to permit and extra cost) for snow-covered landscapes and Himalayan views. Return to hotel. Overnight in Manali.",
        activities: ["Solang Valley", "Paragliding", "Zorbing", "Atal Tunnel", "Rohtang Pass (optional)"]
      },
      {
        day: 6,
        title: "Manali to Chandigarh Departure",
        description: "After breakfast, check out from hotel. Drive back to Chandigarh (310km, 7-8 hours). Drop at Railway Station/Airport for onward journey with beautiful memories of Himachal Pradesh.",
        activities: ["Hotel checkout", "Return journey", "Chandigarh drop", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1608723483857-a294e86241af?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop"
    ]
  }
];

export const internationalPackages: Package[] = [
  {
    id: "intl-1",
    title: "Vietnam Explorer - Hanoi Halong Bay Danang Hoi An",
    location: "Vietnam",
    duration: "7 Days / 6 Nights",
    price: 43500,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1593781624090-dde8edc3c356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSGElMjBMb25nJTIwQmF5JTIwY3J1aXNlfGVufDF8fHx8MTc3MjQyNjg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Ha Long Bay Cruise", "Ninh Binh Boat Ride", "Ba Na Hills Golden Bridge", "Hoi An Ancient Town", "Basket Boat Experience"],
    rating: 4.9,
    reviews: 412,
    country: "Vietnam",
    budget: "Mid-Range",
    description: "Discover the enchanting beauty of Vietnam from bustling Hanoi to the stunning limestone karsts of Ha Long Bay, the golden bridges of Ba Na Hills, and the lantern-lit streets of ancient Hoi An. Experience Vietnamese culture, cuisine, and breathtaking landscapes.",
    inclusions: [
      "6 Nights accommodation in 3-star hotels (3N Hanoi + 3N Danang)",
      "Daily breakfast + 1 lunch on Ha Long cruise",
      "Private airport transfers",
      "Group tours with English-speaking guide",
      "Ha Long Bay day cruise (Sea Lion Cruise)",
      "All entrance fees, cable car, basket boat",
      "Vietnam visa charges",
      "Travel insurance",
      "Mineral water during tours"
    ],
    exclusions: [
      "International flights",
      "5 lunches & 6 dinners",
      "Tips for driver & guide (₹250/day recommended)",
      "Domestic flights within Vietnam",
      "Optional activities",
      "Personal expenses",
      "Bank charges"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Hanoi",
        description: "Arrive at Noi Bai International Airport. Meet & greet with driver, transfer to hotel (standard check-in time applicable). Rest of the day free at leisure to explore nearby areas. Overnight stay in Hanoi.",
        activities: ["Airport arrival", "Hotel transfer", "Check-in", "Leisure time", "Hanoi exploration"]
      },
      {
        day: 2,
        title: "Hanoi - Ninh Binh Day Trip",
        description: "After breakfast, full-day excursion to Ninh Binh (SIC Tour). Visit Hoa Lu Ancient Capital, enjoy scenic boat ride at Trang An/Tam Coc through stunning limestone caves, and climb Mua Cave for panoramic valley views. Return to Hanoi in evening.",
        activities: ["Hoa Lu Ancient Capital", "Trang An boat ride", "Limestone caves", "Mua Cave climb", "Valley views"]
      },
      {
        day: 3,
        title: "Ha Long Bay Day Cruise",
        description: "After breakfast, transfer to Tuan Chau Harbor (sharing shuttle). Board Sea Lion Cruise for Ha Long Bay Day Tour. Cruise through stunning limestone karsts and emerald waters, visit Sung Sot (Surprising) Cave, enjoy kayaking or bamboo boat experience. Lunch onboard. Return to Hanoi in evening.",
        activities: ["Sea Lion Cruise", "Limestone karsts", "Sung Sot Cave", "Kayaking", "Onboard lunch"]
      },
      {
        day: 4,
        title: "Hanoi to Danang Flight",
        description: "After breakfast, transfer to airport for flight to Danang. Arrival in Danang, airport pickup and hotel transfer. Rest of the day free at leisure. Overnight stay in Danang.",
        activities: ["Hanoi to Danang flight", "Airport transfer", "Hotel check-in", "Leisure time"]
      },
      {
        day: 5,
        title: "Coconut Jungle & Hoi An Ancient Town",
        description: "After breakfast, visit Cam Thanh Coconut Jungle and enjoy unique Basket Boat Ride experience. Proceed to charming Hoi An Ancient Town for walking tour including Japanese Covered Bridge, lantern-lit streets, riverside area, and local markets. Return to Danang in evening.",
        activities: ["Coconut Jungle", "Basket Boat Ride", "Hoi An Ancient Town", "Japanese Bridge", "Lantern streets"]
      },
      {
        day: 6,
        title: "Ba Na Hills & Golden Bridge",
        description: "Full day excursion to spectacular Ba Na Hills. Scenic cable car ride (one of the world's longest), visit the iconic Golden Bridge held by giant hands, explore French Village with European architecture, and enjoy Fantasy Park amusement rides. Return to Danang.",
        activities: ["Ba Na Hills", "Cable car ride", "Golden Bridge", "French Village", "Fantasy Park"]
      },
      {
        day: 7,
        title: "Departure from Danang",
        description: "After breakfast, check out from hotel. Transfer to Danang International Airport for your departure flight. Tour ends with wonderful memories of Vietnam!",
        activities: ["Hotel checkout", "Airport transfer", "Departure", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1593781624090-dde8edc3c356?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540181540-a8c48e5a1e1c?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "intl-2",
    title: "Singapore Spectacular - Gardens Universal Studios Sentosa",
    location: "Singapore",
    duration: "6 Days / 5 Nights",
    price: 63500,
    originalPrice: 75000,
    image: "https://images.unsplash.com/photo-1652843134988-6fafc5121ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBNYXJpbmElMjBCYXklMjBTYW5kcyUyMHNreWxpbmV8ZW58MXx8fHwxNzcyMzgyNjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Gardens by the Bay", "Universal Studios", "Sentosa Island Cable Car", "Night Safari", "Marina Bay Sands"],
    rating: 4.9,
    reviews: 398,
    country: "Singapore",
    budget: "Premium",
    description: "Experience the perfect blend of nature and technology in Singapore. From futuristic Gardens by the Bay to thrilling Universal Studios, iconic Sentosa Island to nocturnal Night Safari, discover the Lion City's world-class attractions and vibrant culture.",
    inclusions: [
      "5 Nights accommodation in 3-star hotel with breakfast",
      "Private airport to hotel transfer (one way)",
      "Private hotel to airport transfer (one way)",
      "Gardens by the Bay (Cloud Forest + Supertree Observatory)",
      "Marina Bay Sands Sky Park",
      "Singapore Panoramic City Tour",
      "Sentosa Island (admission + cable car + Madame Tussauds 4-in-1 + Wings of Time show)",
      "Universal Studios Singapore admission",
      "Night Safari admission",
      "All tours on sharing basis (SIC)",
      "Singapore visa",
      "Travel insurance"
    ],
    exclusions: [
      "International airfare",
      "Lunch & dinner",
      "Optional tours and activities",
      "Mini bar charges",
      "Personal expenses and shopping",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Singapore",
        description: "Arrive at Singapore Changi Airport. Private transfer to hotel. Check-in (standard time applicable). Rest of the day free for leisure - explore nearby shopping streets, Orchard Road, or relax at hotel. Overnight in Singapore.",
        activities: ["Airport arrival", "Hotel check-in", "Leisure time", "Optional shopping"]
      },
      {
        day: 2,
        title: "City Tour + Gardens by the Bay + Marina Bay Sands",
        description: "After breakfast, city orientation tour covering major landmarks. Visit stunning Gardens by the Bay - explore Flower Dome and Cloud Forest with towering indoor waterfall. Visit Supertree Observatory for panoramic views. Photo stop at iconic Marina Bay Sands. Evening return to hotel.",
        activities: ["City tour", "Gardens by the Bay", "Flower Dome", "Cloud Forest", "Marina Bay Sands"]
      },
      {
        day: 3,
        title: "Universal Studios Singapore",
        description: "Full day of excitement at Universal Studios Singapore! Enjoy thrilling rides like Transformers, Revenge of the Mummy, Jurassic Park Rapids Adventure. Experience live entertainment, movie-themed zones, and Hollywood magic. Return to hotel by evening.",
        activities: ["Universal Studios", "Transformers ride", "Jurassic Park", "Movie zones", "Live shows"]
      },
      {
        day: 4,
        title: "Sentosa Island Adventure",
        description: "After breakfast, afternoon transfer to Sentosa Island. Enjoy scenic Cable Car Ride with stunning views. Visit Madame Tussauds Singapore including Spirit of Singapore Boat Ride, Images of Singapore Live, and Ultimate Film Star Experience. Evening watch spectacular Wings of Time multimedia show. Return to hotel.",
        activities: ["Sentosa Cable Car", "Madame Tussauds", "Singapore Boat Ride", "Wings of Time show"]
      },
      {
        day: 5,
        title: "Free Day + Night Safari",
        description: "After breakfast, full day free for leisure and shopping. Explore Orchard Road, Mustafa Centre, Little India, or Chinatown (optional). Evening visit Night Safari Singapore - world's first nocturnal wildlife park. Explore wildlife in natural habitats and enjoy tram ride through jungle trails. Return to hotel.",
        activities: ["Leisure shopping", "Orchard Road", "Night Safari", "Wildlife tram ride", "Nocturnal animals"]
      },
      {
        day: 6,
        title: "Departure Singapore",
        description: "After breakfast, check out from hotel. Private transfer to Singapore Changi Airport as per flight schedule. Tour ends with sweet memories of Singapore!",
        activities: ["Hotel checkout", "Airport transfer", "Departure", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1652843134988-6fafc5121ff3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580985672934-1c4a7e831ff1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562503633-8efcb2c4cef6?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "intl-3",
    title: "Mesmerizing Bali - Kuta Ubud Nusa Penida",
    location: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: 35500,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1720728659932-0233fb9b6616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwVWx1d2F0dSUyMHRlbXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NzI0MjY4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Uluwatu Temple Sunset", "Kintamani Volcano", "Nusa Penida Island", "ATV Quad Bike", "Kecak Dance"],
    rating: 4.8,
    reviews: 356,
    country: "Bali",
    budget: "Mid-Range",
    description: "Immerse yourself in the magical island of Bali. From ancient cliff-top temples to active volcanoes, pristine Nusa Penida beaches to thrilling ATV rides, experience Bali's perfect mix of culture, adventure, and tropical paradise.",
    inclusions: [
      "5 Nights accommodation in 4-star Kuta hotel",
      "5 Breakfast + 1 Lunch",
      "Private airport to hotel transfer",
      "Private hotel to airport transfer",
      "Kintamani Volcano Tour (private) - Mt Batur viewing, Aloha Swing",
      "Benoa Beach with Uluwatu Tour (private) - Banana boat, Uluwatu Temple, Kecak Dance",
      "Nusa Penida West Island Tour (SIC) - Private tour + lunch",
      "ATV Quad Bike 1 hour + local lunch",
      "All transfers with Toyota Hiace & guide",
      "VAT and all taxes",
      "Bali visa",
      "Travel insurance"
    ],
    exclusions: [
      "International airfare (Mumbai-Bali approx ₹32,000)",
      "Tourism tax/hotel deposit",
      "Lunch & dinner (except mentioned)",
      "Optional activities",
      "Personal expenses",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Bali - Transfer to Kuta",
        description: "Arrive at Ngurah Rai International Airport, Bali. Private transfer to hotel in Kuta. Check-in at hotel (standard time applicable). Rest of the day free at leisure to explore Kuta Beach, nearby cafes, or relax. Overnight in Kuta.",
        activities: ["Airport arrival", "Private transfer", "Hotel check-in", "Kuta Beach", "Leisure time"]
      },
      {
        day: 2,
        title: "Tanjung Benoa Beach + Uluwatu Sunset",
        description: "After breakfast, full-day private tour. Visit Tanjung Benoa Beach for water sports - Banana Boat, Jet Ski, Parasailing, Snorkeling. Later visit spectacular Uluwatu Temple perched on cliff overlooking Indian Ocean. Watch mesmerizing sunset and enjoy traditional Kecak Dance performance. Return to hotel.",
        activities: ["Benoa Beach", "Water sports", "Uluwatu Temple", "Cliff sunset", "Kecak Dance"]
      },
      {
        day: 3,
        title: "Nusa Penida West Island Tour",
        description: "Early breakfast, transfer to harbor for fast boat to Nusa Penida Island (sharing). Full-day West Island tour visiting Instagram-famous Kelingking Beach (T-Rex cliff), Angel's Billabong natural infinity pool, Broken Beach, and Crystal Bay. Lunch included. Return to Bali by evening, hotel transfer.",
        activities: ["Nusa Penida Island", "Kelingking Beach", "Angel's Billabong", "Broken Beach", "Crystal Bay"]
      },
      {
        day: 4,
        title: "Kintamani Volcano & Ubud Village",
        description: "After breakfast, full-day private tour. Visit traditional art villages - Tohpati (Batik), Celuk (Gold & Silver), Mas Village (Wood Carving). View majestic Mount Batur Volcano and Lake Batur from viewpoint. Visit coffee plantation for famous Luwak coffee tasting. Explore stunning Tegalalang Rice Terraces and enjoy Aloha Swing experience. Return to hotel.",
        activities: ["Art villages", "Mt Batur viewpoint", "Coffee plantation", "Rice terraces", "Aloha Swing"]
      },
      {
        day: 5,
        title: "ATV Quad Bike Adventure",
        description: "After breakfast, experience thrilling 1-hour ATV Quad Bike ride through Bali's countryside, rice fields, and jungle trails (single ride). Suitable for beginners and experienced riders. Local lunch included. Afternoon free for shopping or beach relaxation. Overnight in Kuta.",
        activities: ["ATV Quad Bike", "Off-road adventure", "Jungle trails", "Local lunch", "Free time"]
      },
      {
        day: 6,
        title: "Departure Bali",
        description: "After breakfast, check out from hotel. Private transfer to Bali Airport for your departure flight. Tour ends with wonderful memories of mesmerizing Bali!",
        activities: ["Hotel checkout", "Last shopping", "Airport transfer", "Departure"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1720728659932-0233fb9b6616?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555400208-4e0c8c23c3cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "intl-4",
    title: "Malaysia Highlights - Kuala Lumpur Genting",
    location: "Malaysia",
    duration: "4 Days / 3 Nights",
    price: 23500,
    originalPrice: 30000,
    image: "https://images.unsplash.com/photo-1592446559204-70a0362cf451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYSUyMEt1YWxhJTIwTHVtcHVyJTIwUGV0cm9uYXMlMjBUb3dlcnN8ZW58MXx8fHwxNzcyNDI2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Petronas Twin Towers", "Batu Caves", "Genting Highlands Cable Car", "KL Tower Observation Deck", "KLCC Aquarium"],
    rating: 4.7,
    reviews: 289,
    country: "Malaysia",
    budget: "Budget",
    description: "Experience Malaysia's vibrant capital Kuala Lumpur and the entertainment hub Genting Highlands. Visit iconic Petronas Towers, sacred Batu Caves, enjoy Southeast Asia's fastest cable car, and explore the city's perfect blend of modernity and tradition.",
    inclusions: [
      "3 Nights accommodation in 3-star hotel KL with breakfast",
      "Full day Genting tour + Batu Caves + one-way cable car",
      "Half day KL city tour + KL Tower observation deck",
      "KLCC Aquarium tickets with transfers",
      "Return airport transfers (private)",
      "All tours on sharing basis (SIC)",
      "Travel insurance"
    ],
    exclusions: [
      "International airfare",
      "Lunch & dinner",
      "Optional theme park tickets (Indoor ₹1,500, Outdoor ₹2,200)",
      "Tips and gratuities",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Kuala Lumpur",
        description: "Arrive at Kuala Lumpur International Airport. Transfer to hotel, check-in. Free time at leisure to explore nearby areas, rest after journey. Overnight at hotel.",
        activities: ["Airport arrival", "Hotel check-in", "Leisure time", "Evening walk"]
      },
      {
        day: 2,
        title: "City Tour + KLCC Aquarium + Batu Caves",
        description: "After breakfast, half-day Kuala Lumpur city tour covering old and new KL - from tin miners' settlement to modern city. Visit KL Tower Observation Deck for panoramic views. Visit Batu Caves - Hindu temple in limestone caves with 272 colorful steps. Proceed to KLCC Aquaria featuring 90m underwater tunnel with 5,000+ marine animals from Malaysia and worldwide. Interactive kiosks on conservation. Overnight at hotel.",
        activities: ["KL City Tour", "KL Tower", "Batu Caves", "KLCC Aquarium", "Underwater tunnel"]
      },
      {
        day: 3,
        title: "Genting Highlands Full Day",
        description: "After breakfast, full-day excursion to Genting Highlands - Malaysia's premier hill resort and entertainment hub. En route visit Batu Caves (20 min photo stop). Enjoy one-way cable car ride - Southeast Asia's fastest and longest cable car with stunning views. Six hours free time at Genting to explore casino (for adults), theme parks, splash pool, games, rides, 5D cinema, shopping. Return to KL hotel in evening.",
        activities: ["Genting Highlands", "Cable car ride", "Theme parks", "Casino", "Mountain views"]
      },
      {
        day: 4,
        title: "Departure Kuala Lumpur",
        description: "After breakfast at hotel, check out. Transfer to airport as per flight schedule. This fantastic tour comes to an end. Return home with wonderful memories of Malaysia!",
        activities: ["Hotel checkout", "Last shopping", "Airport transfer", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1592446559204-70a0362cf451?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1668169064129-c17e6c8b8041?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558613104-b6b4e51f6113?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "intl-5",
    title: "Nepal at a Glance - Kathmandu Chitwan Pokhara",
    location: "Nepal",
    duration: "7 Days / 6 Nights",
    price: 30400,
    originalPrice: 38000,
    image: "https://images.unsplash.com/photo-1607066511406-a4b389dc138e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMEthdGhtYW5kdSUyMHRlbXBsZSUyMEhpbWFsYXlhc3xlbnwxfHx8fDE3NzI0Mjc0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["UNESCO Heritage Sites", "Chitwan Jungle Safari", "Sarangkot Sunrise", "Phewa Lake Boat Ride", "Tharu Cultural Dance"],
    rating: 4.8,
    reviews: 267,
    country: "Nepal",
    budget: "Mid-Range",
    description: "Discover the perfect blend of heritage, wildlife, spirituality, and Himalayan landscapes in Nepal. Visit UNESCO World Heritage Sites in Kathmandu, experience thrilling jungle safaris in Chitwan National Park, and witness breathtaking Himalayan sunrises in scenic Pokhara.",
    inclusions: [
      "6 Nights accommodation (2N Kathmandu + 2N Chitwan + 2N Pokhara)",
      "Daily breakfast & dinner in Kathmandu and Pokhara",
      "All meals in Chitwan (breakfast, lunch, dinner)",
      "Airport arrival & departure transfers",
      "Kathmandu – Chitwan – Pokhara – Kathmandu transfers",
      "AC vehicle for sightseeing and transfers",
      "Jungle activities: Jeep Safari, Canoe Ride, Tharu Cultural Show",
      "Guide during Kathmandu & Pokhara sightseeing"
    ],
    exclusions: [
      "Monument entrance fees",
      "Lunch & meals not mentioned",
      "Cable car tickets (Manakamana Temple)",
      "Boat rides at Phewa Lake",
      "Air tickets",
      "Personal expenses, tips, laundry, phone calls",
      "Travel insurance & medical expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Kathmandu & City Sightseeing",
        description: "Arrive at Tribhuvan International Airport, Kathmandu. Meet our representative and transfer to hotel. Later proceed for half-day sightseeing visiting Kathmandu Durbar Square (UNESCO World Heritage Site) with ancient palaces and traditional Newari architecture, and Swayambhunath Stupa (Monkey Temple) - oldest Buddhist stupa offering panoramic valley views. Evening free for leisure or local market exploration. Overnight in Kathmandu.",
        activities: ["Airport arrival", "Kathmandu Durbar Square", "Swayambhunath Stupa", "Monkey Temple", "Market exploration"]
      },
      {
        day: 2,
        title: "Kathmandu to Chitwan National Park",
        description: "After breakfast, drive to Chitwan National Park (approx 5 hours) - Nepal's first national park and UNESCO World Heritage Site famous for wildlife. On arrival, check-in at resort and enjoy lunch. Resort staff will brief about jungle activities. Evening enjoy vibrant Tharu Cultural Dance Show showcasing indigenous traditions. Dinner and overnight at resort.",
        activities: ["Drive to Chitwan", "Hotel check-in", "Resort briefing", "Tharu Cultural Dance", "Dinner"]
      },
      {
        day: 3,
        title: "Chitwan Jungle Activities",
        description: "After breakfast, full day of adventure! Jeep Safari through dense Chitwan forests spotting rhinos, deer, wild boar, crocodiles, and exotic birds. Peaceful Canoe Ride along Rapti River ideal for bird watching and spotting crocodiles. Rest of day at leisure. All jungle activities on sharing basis. Dinner and overnight at resort.",
        activities: ["Jeep Safari", "Wildlife spotting", "Canoe Ride", "Rapti River", "Bird watching"]
      },
      {
        day: 4,
        title: "Chitwan to Pokhara - Lake City",
        description: "After breakfast, drive to Pokhara (approx 6 hours) - scenic lake city nestled in Annapurna range. En route visit Manakamana Temple - revered Hindu temple dedicated to Goddess Bhagwati, accessible by cable car (ticket at own cost). Continue drive to Pokhara. On arrival, check-in at hotel. Evening free to stroll around Lakeside Market. Overnight in Pokhara.",
        activities: ["Drive to Pokhara", "Manakamana Temple", "Cable car (optional)", "Lakeside Market", "Hotel check-in"]
      },
      {
        day: 5,
        title: "Pokhara Sunrise & City Tour",
        description: "Early morning 5:00 AM drive to Sarangkot (25 minutes) to witness breathtaking sunrise over Annapurna and Dhaulagiri mountain ranges. Return to hotel for breakfast. Full day city tour visiting Devi's Fall (waterfall disappearing into underground tunnel), Gupteshwor Mahadev Cave (sacred Shiva temple), Pumdikot Shiva Statue (one of tallest Shiva statues with valley views), Phewa Lake serene boat ride to Tal Barahi Temple on island, and Bindabasini Temple (Hindu Goddess Durga temple). Overnight in Pokhara.",
        activities: ["Sarangkot sunrise", "Annapurna views", "Devi's Fall", "Gupteshwor Cave", "Phewa Lake boat ride", "Shiva Statue"]
      },
      {
        day: 6,
        title: "Pokhara to Kathmandu",
        description: "After breakfast, drive back to Kathmandu (approx 8 hours) enjoying scenic river valleys and countryside views en route. On arrival, check-in at hotel. Evening free for shopping at Thamel, leisure activities, or exploring local cafes. Overnight in Kathmandu.",
        activities: ["Return to Kathmandu", "Scenic drive", "Hotel check-in", "Thamel shopping", "Local cafes"]
      },
      {
        day: 7,
        title: "Kathmandu Sightseeing & Departure",
        description: "After breakfast, check out from hotel and visit Pashupatinath Temple - Nepal's most sacred Hindu temple dedicated to Lord Shiva (non-Hindus view from outside), and Guheshwori Temple (Shakti Peeth) - important temple dedicated to Goddess Parvati. Later transfer to airport for onward journey with memorable experiences of Nepal.",
        activities: ["Pashupatinath Temple", "Guheshwori Temple", "Last shopping", "Airport transfer", "Tour ends"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1607066511406-a4b389dc138e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1609156355195-2d6e34cb6b2e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop"
    ]
  }
];

// Combine all packages for search/filter functionality
export const allPackages: Package[] = [...domesticPackages, ...internationalPackages];

// Helper function to get package by ID
export function getPackageById(id: string): Package | undefined {
  return allPackages.find(pkg => pkg.id === id);
}

// Helper to filter packages by category
export function getPackagesByCategory(category: string): Package[] {
  return domesticPackages.filter(pkg => pkg.category === category);
}

// Helper to filter packages by country
export function getPackagesByCountry(country: string): Package[] {
  return internationalPackages.filter(pkg => pkg.country === country);
}

// Helper to get featured packages (highest rated)
export function getFeaturedPackages(limit: number = 6): Package[] {
  return allPackages
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}