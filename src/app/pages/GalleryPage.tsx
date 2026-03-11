import { motion } from 'motion/react';
import { useState } from 'react';
import { X, MapPin, Calendar, Users } from 'lucide-react';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; location: string } | null>(null);

  const galleries = [
    {
      category: 'Domestic Tours',
      images: [
        { url: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwRGFsJTIwTGFrZXxlbnwxfHx8fDE3NzE5MzQyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Kashmir Valley', location: 'Srinagar, Kashmir', date: 'Jan 2026', travelers: '45' },
        { url: 'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaGVzJTIwSW5kaWF8ZW58MXx8fHwxNzcxOTM0MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Goa Beaches', location: 'Goa', date: 'Dec 2025', travelers: '38' },
        { url: 'https://images.unsplash.com/photo-1673807095855-7c6e499c2cd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBwYWxhY2UlMjBKYWlwdXJ8ZW58MXx8fHwxNzcxOTM0MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Rajasthan Heritage', location: 'Jaipur, Rajasthan', date: 'Nov 2025', travelers: '52' },
        { url: 'https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwaG91c2Vib2F0fGVufDF8fHx8MTc3MTgzMjg3M3ww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Kerala Backwaters', location: 'Alleppey, Kerala', date: 'Oct 2025', travelers: '30' },
        { url: 'https://images.unsplash.com/photo-1692718605027-71424c748e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hY2hhbCUyMFByYWRlc2glMjBtb3VudGFpbnN8ZW58MXx8fHwxNzcxODQ4NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Himachal Adventure', location: 'Manali, Himachal', date: 'Sep 2025', travelers: '42' },
        { url: 'https://images.unsplash.com/photo-1681446009293-21839c6cfe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVdHRhcmFraGFuZCUyMEhpbWFsYXlhc3xlbnwxfHx8fDE3NzE5MzQyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Uttarakhand Hills', location: 'Nainital, Uttarakhand', date: 'Aug 2025', travelers: '35' },
      ]
    },
    {
      category: 'International Tours',
      images: [
        { url: 'https://images.unsplash.com/photo-1651063820152-d3e7a27b4d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMEJ1cmolMjBLaGFsaWZhJTIwc2t5bGluZXxlbnwxfHx8fDE3NzE4NTY1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Dubai Dreams', location: 'Dubai, UAE', date: 'Dec 2025', travelers: '28' },
        { url: 'https://images.unsplash.com/photo-1697160527165-b8c94eabcff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaHVrZXQlMjBUaGFpbGFuZCUyMGJlYWNofGVufDF8fHx8MTc3MTkzNDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Thailand Paradise', location: 'Phuket, Thailand', date: 'Nov 2025', travelers: '46' },
        { url: 'https://images.unsplash.com/photo-1686455746285-4a921419bc6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBNYXJpbmElMjBCYXl8ZW58MXx8fHwxNzcxODgxNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Singapore Marina', location: 'Singapore', date: 'Oct 2025', travelers: '32' },
        { url: 'https://images.unsplash.com/photo-1604741872417-230e572a4c72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwSW5kb25lc2lhJTIwdGVtcGxlfGVufDF8fHx8MTc3MTkwMjI2OXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Bali Paradise', location: 'Bali, Indonesia', date: 'Sep 2025', travelers: '25' },
        { url: 'https://images.unsplash.com/photo-1592446559204-70a0362cf451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLdWFsYSUyMEx1bXB1ciUyMFBldHJvbmFzJTIwVG93ZXJzfGVufDF8fHx8MTc3MTg2NDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Malaysia Towers', location: 'Kuala Lumpur, Malaysia', date: 'Aug 2025', travelers: '36' },
        { url: 'https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc3MTg0Njk4NXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Maldives Luxury', location: 'Maldives', date: 'Jul 2025', travelers: '18' },
      ]
    },
    {
      category: 'Educational Tours',
      images: [
        { url: 'https://images.unsplash.com/photo-1762014564492-5619a19657e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEZWxoaSUyMFVuaXZlcnNpdHklMjBJbmRpYSUyMGNhbXB1c3xlbnwxfHx8fDE3NzE5MzQ5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'University Visit', location: 'Delhi', date: 'Jan 2026', travelers: '120' },
        { url: 'https://images.unsplash.com/photo-1764253340521-c920fd89a66e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbXVzZXVtJTIwaW50ZXJhY3RpdmV8ZW58MXx8fHwxNzcxOTM0OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Science Museum', location: 'Mumbai', date: 'Dec 2025', travelers: '85' },
        { url: 'https://images.unsplash.com/photo-1689113690757-0205a843a14e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZ3JhJTIwRm9ydCUyMGhpc3RvcmljYWwlMjBJbmRpYXxlbnwxfHx8fDE3NzE5MzQ5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Historical Tour', location: 'Agra', date: 'Nov 2025', travelers: '95' },
        { url: 'https://images.unsplash.com/photo-1763401650604-f0770b538edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGNlbnRlciUyMHBsYW5ldGFyaXVtfGVufDF8fHx8MTc3MTkzNDk1NHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Space Center', location: 'Bangalore', date: 'Oct 2025', travelers: '75' },
        { url: 'https://images.unsplash.com/photo-1764599952551-2840e83fa5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGdyb3VwJTIwYWN0aXZpdHklMjBvdXRkb29yfGVufDF8fHx8MTc3MTkzNDk1NHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Group Activity', location: 'Pune', date: 'Sep 2025', travelers: '110' },
        { url: 'https://images.unsplash.com/photo-1651569411954-b843950d0c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWlwdXIlMjBIYXdhJTIwTWFoYWwlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE5MzQ5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Learning Tour', location: 'Jaipur', date: 'Aug 2025', travelers: '68' },
      ]
    },
    {
      category: 'Corporate & MICE',
      images: [
        { url: 'https://images.unsplash.com/photo-1770240090990-0653176ee415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwYnVpbGRpbmclMjBvdXRkb29yJTIwYWN0aXZpdHl8ZW58MXx8fHwxNzcxOTA1MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Team Building', location: 'Lonavala', date: 'Jan 2026', travelers: '55' },
        { url: 'https://images.unsplash.com/photo-1633431303895-8236f0a04b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE5MzEwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Conference Setup', location: 'Goa', date: 'Dec 2025', travelers: '80' },
        { url: 'https://images.unsplash.com/photo-1679325965190-0530dc29c512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXNoaWtlc2glMjB5b2dhJTIwcmV0cmVhdHxlbnwxfHx8fDE3NzE5MzQ5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Corporate Retreat', location: 'Rishikesh', date: 'Nov 2025', travelers: '42' },
        { url: 'https://images.unsplash.com/photo-1770240090990-0653176ee415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwb3V0aW5nJTIwbmF0dXJlfGVufDF8fHx8MTc3MTkzNDk1Nnww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Team Outing', location: 'Mahabaleshwar', date: 'Oct 2025', travelers: '35' },
        { url: 'https://images.unsplash.com/photo-1751106161851-e484aae6222a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBidXNpbmVzcyUyMGRpc3RyaWN0fGVufDF8fHx8MTc3MTkzNDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Business Trip', location: 'Mumbai', date: 'Sep 2025', travelers: '28' },
        { url: 'https://images.unsplash.com/photo-1708067077797-74f83eaa8231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW5nYWxvcmUlMjB0ZWNoJTIwY2l0eSUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzcxOTM0OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Conference Hall', location: 'Bangalore', date: 'Aug 2025', travelers: '65' },
      ]
    },
    {
      category: 'Honeymoon Specials',
      images: [
        { url: 'https://images.unsplash.com/photo-1707381081322-c1814cf571ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwY291cGxlJTIwaG9uZXltb29uJTIwcm9tYW50aWN8ZW58MXx8fHwxNzcxOTM0OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Romantic Getaway', location: 'Kashmir', date: 'Jan 2026', travelers: '2' },
        { url: 'https://images.unsplash.com/photo-1648538923547-074724ca7a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxkaXZlcyUyMGhvbmV5bW9vbiUyMGNvdXBsZSUyMGJlYWNofGVufDF8fHx8MTc3MTkzNDk2MHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Beach Romance', location: 'Maldives', date: 'Dec 2025', travelers: '2' },
        { url: 'https://images.unsplash.com/photo-1571406761762-c0a2ef64405d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW50b3JpbmklMjBzdW5zZXQlMjBHcmVlY2UlMjByb21hbnRpY3xlbnwxfHx8fDE3NzE5MzQ5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Sunset Views', location: 'Santorini', date: 'Nov 2025', travelers: '2' },
        { url: 'https://images.unsplash.com/photo-1752350180629-89eedb2f31cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTd2l0emVybGFuZCUyMEFscHMlMjBjb3VwbGUlMjBtb3VudGFpbnxlbnwxfHx8fDE3NzE5MzQ5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Mountain Escape', location: 'Switzerland', date: 'Oct 2025', travelers: '2' },
        { url: 'https://images.unsplash.com/photo-1699246476260-dcd49db695f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwY291cGxlJTIwcm9tYW50aWMlMjBzdW5zZXR8ZW58MXx8fHwxNzcxOTM0OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Island Paradise', location: 'Bali', date: 'Sep 2025', travelers: '2' },
        { url: 'https://images.unsplash.com/photo-1732617871708-dc92055d73d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXVyaXRpdXMlMjBiZWFjaCUyMGNvdXBsZSUyMHJvbWFudGljfGVufDF8fHx8MTc3MTkzNDk2Mnww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Coastal Beauty', location: 'Mauritius', date: 'Aug 2025', travelers: '2' },
      ]
    },
    {
      category: 'Religious Tours',
      images: [
        { url: 'https://images.unsplash.com/photo-1681797849305-206966d6a5bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMEdhbmdhJTIwQWFydGklMjB0ZW1wbGV8ZW58MXx8fHwxNzcxOTM0OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Temple Tour', location: 'Varanasi', date: 'Jan 2026', travelers: '48' },
        { url: 'https://images.unsplash.com/photo-1689141082367-df7bd06c4eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2xkZW4lMjBUZW1wbGUlMjBBbXJpdHNhciUyMFB1bmphYnxlbnwxfHx8fDE3NzE5MTY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Golden Temple', location: 'Amritsar', date: 'Dec 2025', travelers: '55' },
        { url: 'https://images.unsplash.com/photo-1577516311194-eb14c570a137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZWRhcm5hdGglMjB0ZW1wbGUlMjBIaW1hbGF5YSUyMEluZGlhfGVufDF8fHx8MTc3MTkzNDk2OHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Chardham Yatra', location: 'Uttarakhand', date: 'Nov 2025', travelers: '72' },
        { url: 'https://images.unsplash.com/photo-1629640890590-7836d69c5237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGlyZGklMjBTYWklMjBCYWJhJTIwdGVtcGxlfGVufDF8fHx8MTc3MTkzNDk2NHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Pilgrimage Journey', location: 'Shirdi', date: 'Oct 2025', travelers: '60' },
        { url: 'https://images.unsplash.com/photo-1767653431683-9d8346bc18f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXNoaWtlc2glMjBHYW5nYSUyMHJpdmVyJTIwc3Bpcml0dWFsfGVufDF8fHx8MTc3MTkzNDk2NXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Sacred Sites', location: 'Rishikesh', date: 'Sep 2025', travelers: '38' },
        { url: 'https://images.unsplash.com/photo-1769517880772-b07bec9bf568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaXJ1cGF0aSUyMHRlbXBsZSUyMFNvdXRoJTIwSW5kaWF8ZW58MXx8fHwxNzcxOTM0OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Spiritual Tour', location: 'Tirupati', date: 'Aug 2025', travelers: '85' },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#1E88E5] to-blue-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Gallery</h1>
            <p className="text-xl text-gray-100">
              Explore stunning moments from our tours and journeys across the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#1E88E5] mb-2">10,000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#F15A29] mb-2">150+</div>
              <div className="text-gray-600">Destinations Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#1E88E5] mb-2">500+</div>
              <div className="text-gray-600">Successful Tours</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#F15A29] mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {galleries.map((gallery, galleryIndex) => (
            <motion.div
              key={gallery.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: galleryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                {gallery.category}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: imageIndex * 0.05 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
                    onClick={() => setSelectedImage({ url: image.url, title: image.title, location: image.location })}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-200 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{image.location}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{image.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{image.travelers} travelers</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-gray-900">{image.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{image.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1E88E5] to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Create Your Own Memories?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of happy travelers and explore the world with Samaz Holidays
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919226339969" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
              >
                💬 Plan Your Trip on WhatsApp
              </a>
              <a 
                href="/packages"
                className="inline-block bg-[#F15A29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
              >
                Browse Packages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center mt-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{selectedImage.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}