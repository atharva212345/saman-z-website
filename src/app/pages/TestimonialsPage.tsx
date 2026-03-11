import { motion } from 'motion/react';
import { Star, Quote, MapPin, Calendar, ThumbsUp } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Priya & Rahul Sharma',
      tour: 'Kashmir Honeymoon Package',
      location: 'Pune, Maharashtra',
      date: 'January 2026',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1767333586238-5fe2e8e62b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjb3VwbGUlMjB3ZWRkaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTk2MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Our Kashmir honeymoon was a dream come true! Samanz Holidays planned every detail perfectly - from the houseboat stay in Dal Lake to the snow activities in Gulmarg. The romantic candle-light dinner they arranged was magical. Highly recommend for couples!',
      verified: true
    },
    {
      name: 'Mrs. Sneha Patil',
      tour: 'Educational Tour - Agra & Delhi',
      location: 'Modern High School, Pune',
      date: 'December 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659355894748-0b7b60de60b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMHRlYWNoZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxOTk2MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'We organized an educational tour for 85 students with Samanz Holidays. Their attention to safety was exceptional. Every detail was well-planned, from transportation to accommodation. The students learned so much and had a wonderful time. Thank you team!',
      verified: true
    },
    {
      name: 'Mr. Amit Deshmukh',
      tour: 'Dubai 5N/6D Package',
      location: 'Mumbai, Maharashtra',
      date: 'December 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1671450960874-0903baf942c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTk5NjIzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Fantastic Dubai experience! The package was very budget-friendly compared to other agents. We got to visit all major attractions - Burj Khalifa, Desert Safari, Dubai Mall. Our tour guide was knowledgeable and friendly. Will definitely book again!',
      verified: true
    },
    {
      name: 'The Mehta Family',
      tour: 'Goa Family Package',
      location: 'Pune, Maharashtra',
      date: 'November 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580471260026-2a8acbc7c7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmYW1pbHklMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc3MTk5NjIzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Our family trip to Goa was absolutely wonderful! Samanz Holidays understood our needs perfectly - beach resorts for relaxation, water sports for kids, and beach shacks for authentic Goan food. The itinerary was balanced and stress-free. Loved it!',
      verified: true
    },
    {
      name: 'Dr. Rajesh Kumar',
      tour: 'Thailand 6N/7D Package',
      location: 'Nashik, Maharashtra',
      date: 'November 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659353887804-fc7f9313021a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5OTYyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Thailand tour was exceptional! From Bangkok city tour to Pattaya beaches and Phi Phi island - everything was perfectly organized. The hotel locations were prime, food was great, and the tour manager was always available. Value for money package!',
      verified: true
    },
    {
      name: 'Mrs. Sunita Joshi',
      tour: 'Char Dham Yatra',
      location: 'Pune, Maharashtra',
      date: 'October 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1764426381179-7aa7bfdb0e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBlbGRlcmx5JTIwd29tYW4lMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzE5OTYyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'The Char Dham Yatra organized by Samanz Holidays was spiritually fulfilling and very well-managed. Despite the challenging terrain, the team ensured our comfort and safety. The accommodation and meals were good. A memorable pilgrimage journey!',
      verified: true
    },
    {
      name: 'Tech Solutions Pvt Ltd',
      tour: 'Corporate Team Outing - Lonavala',
      location: 'Pune, Maharashtra',
      date: 'October 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBidXNpbmVzcyUyMHRlYW0lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzcxOTk2MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'We organized our team building event with Samanz Holidays and it was a huge success! The activities were engaging, venue was beautiful, and everything ran smoothly. Our 45-member team thoroughly enjoyed. Professional service from start to finish.',
      verified: true
    },
    {
      name: 'Neha & Karan Kapoor',
      tour: 'Kerala Honeymoon Package',
      location: 'Mumbai, Maharashtra',
      date: 'September 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1770823218239-996df9afcff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBuZXdseXdlZCUyMGNvdXBsZSUyMHJvbWFudGljfGVufDF8fHx8MTc3MTk5NjIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Kerala backwaters and hill stations - what a romantic combination! The houseboat experience was unique and the resort in Munnar was breathtaking. Samanz Holidays made our honeymoon special with personalized touches. Highly recommended for newlyweds!',
      verified: true
    },
    {
      name: 'Mr. Suresh Pawar',
      tour: 'Rajasthan Heritage Tour',
      location: 'Satara, Maharashtra',
      date: 'September 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659081718412-06b232d3e0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtYW4lMjB0cmFkaXRpb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk5NjIzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'The Rajasthan tour was like stepping back in time! Magnificent forts, colorful markets, camel safari in Jaisalmer - everything was amazing. Our guide was very knowledgeable about the history. Samanz Holidays delivered exactly what they promised.',
      verified: true
    },
    {
      name: 'St. Xavier\'s College Group',
      tour: 'Educational Tour - Science City',
      location: 'Pune, Maharashtra',
      date: 'August 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1680084521738-87a53d7a50d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGdyb3VwJTIwY29sbGVnZXxlbnwxfHx8fDE3NzE5OTYyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Excellent coordination for our 120 students tour! The itinerary was educational yet fun. Safety measures were top-notch and the team was very responsive to our needs. Students gained valuable knowledge. Will definitely plan more tours with Samanz Holidays.',
      verified: true
    },
    {
      name: 'The Kulkarni Family',
      tour: 'Singapore 5N/6D Package',
      location: 'Pune, Maharashtra',
      date: 'August 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1766744372453-180fe12d465d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmYW1pbHklMjBwYXJlbnRzJTIwY2hpbGRyZW58ZW58MXx8fHwxNzcxOTk2MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Singapore trip was absolutely fantastic! Universal Studios, Gardens by the Bay, Night Safari - we covered it all. The kids especially loved Sentosa Island. Hotels were centrally located and travel arrangements were smooth. Great family vacation!',
      verified: true
    },
    {
      name: 'Mrs. Kavita Agarwal',
      tour: 'Varanasi & Ayodhya Spiritual Tour',
      location: 'Pune, Maharashtra',
      date: 'July 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1761711951969-47c34e8ebc97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMHNwaXJpdHVhbCUyMGRldm90ZWV8ZW58MXx8fHwxNzcxOTk2MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'A deeply spiritual and peaceful journey! The evening Ganga Aarti in Varanasi was soul-stirring. Samanz Holidays ensured we visited all important temples with proper guidance. The arrangements were comfortable and the team was very respectful of our religious sentiments.',
      verified: true
    },
    {
      name: 'Mr. Vikram Singh',
      tour: 'Ladakh Adventure Tour',
      location: 'Delhi',
      date: 'July 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1644966486873-39171635ab43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB5b3VuZyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk5NjI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Ladakh was on my bucket list and Samanz Holidays made it happen! The high-altitude passes, crystal clear Pangong Lake, and monasteries - everything was breathtaking. The team provided proper acclimatization time and safety measures. Adventure of a lifetime!',
      verified: true
    },
    {
      name: 'InnovateTech Solutions',
      tour: 'Corporate MICE - Goa',
      location: 'Pune, Maharashtra',
      date: 'June 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBidXNpbmVzcyUyMHRlYW0lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzcxOTk2MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'We held our annual conference and team building in Goa. Samanz Holidays managed everything - conference hall, AV equipment, team activities, gala dinner. 80+ participants and not a single complaint! Professional, punctual, and perfect execution.',
      verified: true
    },
    {
      name: 'Anjali & Rohan Desai',
      tour: 'Bali Honeymoon Package',
      location: 'Ahmedabad, Gujarat',
      date: 'June 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1766763845346-e9721b86f0a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjb3VwbGUlMjBob25leW1vb24lMjBoYXBweXxlbnwxfHx8fDE3NzE5OTYyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Bali was paradise! Beach resorts, temple visits, traditional Balinese massage, and romantic dinners - Samanz Holidays curated the perfect honeymoon. The itinerary had the right mix of adventure and relaxation. We returned with beautiful memories!',
      verified: true
    },
    {
      name: 'Mr. Santosh Bhosale',
      tour: 'Himachal Family Package',
      location: 'Sangli, Maharashtra',
      date: 'May 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1653666866518-d01fabfa94c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBidXNpbmVzc21hbiUyMHByb2Zlc3Npb25hbCUyMHNtaWxlfGVufDF8fHx8MTc3MTk5NjI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Shimla, Manali, Dharamshala - what a beautiful journey! Our kids loved the snow activities and toy train ride. The hotels had amazing mountain views. Samanz Holidays handled everything smoothly including transfers. Budget-friendly and memorable trip!',
      verified: true
    },
    {
      name: 'Ladies Group - Pune',
      tour: 'LTC Tour - Jaipur & Agra',
      location: 'Pune, Maharashtra',
      date: 'May 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1761125050322-bbfc155571bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMG1vZGVybnxlbnwxfHx8fDE3NzE5MzUwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Perfect ladies getaway! We were a group of 12 women and Samanz Holidays understood our requirements perfectly - shopping tours, spa sessions, heritage sites, and authentic Rajasthani cuisine. Felt safe and had tremendous fun. Highly recommended for ladies groups!',
      verified: true
    },
    {
      name: 'Mr. & Mrs. Patel',
      tour: 'Mauritius 7N/8D Package',
      location: 'Surat, Gujarat',
      date: 'April 2025',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1769500810743-5e5dd4fd5848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtYXJyaWVkJTIwY291cGxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxOTk2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Mauritius was a dream vacation! Crystal blue waters, luxury resort, water sports, and island tours - everything was perfect. Samanz Holidays provided excellent service with competitive pricing. The honeymoon package add-ons made it extra special for us!',
      verified: true
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Travelers', color: 'text-[#1E88E5]' },
    { number: '4.8★', label: 'Average Rating', color: 'text-[#F15A29]' },
    { number: '95%', label: 'Customer Satisfaction', color: 'text-green-600' },
    { number: '500+', label: 'Successful Tours', color: 'text-purple-600' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
            <p className="text-xl text-gray-100">
              Real stories from real travelers who experienced memorable journeys with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">
              Genuine reviews from travelers who trusted us with their dream vacations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-gray-100"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-10 h-10 text-[#1E88E5]/20" />
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      <ThumbsUp className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F15A29] text-[#F15A29]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Tour Info */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="text-sm font-semibold text-[#1E88E5] mb-1">
                    {testimonial.tour}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Customers Trust Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#1E88E5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#1E88E5]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden costs. What you see is what you pay. Clear breakdown of all expenses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#F15A29]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-[#F15A29]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. 24/7 support and personalized attention throughout.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                10,000+ happy travelers and growing. Real reviews from real customers.
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Own Story?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of satisfied travelers and let us plan your perfect journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919226339969" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
              >
                💬 Start Planning on WhatsApp
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

      {/* Share Your Experience */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Traveled With Us?</h2>
            <p className="text-gray-600 text-lg mb-8">
              We'd love to hear about your experience! Share your travel story and inspire others.
            </p>
            <a 
              href="https://wa.me/919226339969?text=I%20want%20to%20share%20my%20travel%20experience" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#1E88E5] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
            >
              Share Your Review
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}