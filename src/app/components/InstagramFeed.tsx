import { motion } from 'motion/react';
import { Instagram, Play } from 'lucide-react';
import { useEffect } from 'react';

export function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Instagram posts from @holidaysamanz
  // Replace these with actual post URLs from their Instagram account
  const instagramPosts = [
    'https://www.instagram.com/p/EXAMPLE1/',
    'https://www.instagram.com/p/EXAMPLE2/',
    'https://www.instagram.com/p/EXAMPLE3/',
    'https://www.instagram.com/reel/EXAMPLE4/',
    'https://www.instagram.com/reel/EXAMPLE5/',
    'https://www.instagram.com/p/EXAMPLE6/',
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-10 h-10 text-pink-500" />
              <h2 className="text-3xl md:text-4xl font-bold">Travel Memories</h2>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              Beautiful moments captured by our travelers
            </p>
            <a 
              href="https://www.instagram.com/holidaysamanz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1E88E5] hover:text-blue-700 font-semibold transition-colors"
            >
              @holidaysamanz
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                {/* Placeholder for Instagram embed */}
                <div className="text-center p-8">
                  <Instagram className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                  {post.includes('/reel/') && (
                    <Play className="w-12 h-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  <p className="text-gray-600 text-sm">
                    Instagram {post.includes('/reel/') ? 'Reel' : 'Post'} #{index + 1}
                  </p>
                  <a 
                    href={post}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E88E5] hover:underline text-sm mt-2 inline-block"
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="https://www.instagram.com/holidaysamanz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
          >
            <Instagram className="w-6 h-6" />
            Follow Us on Instagram
          </a>
        </div>

        {/* Alternative: Instagram Widget Embed */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">See Our Latest Adventures</h3>
            
            {/* Instagram Feed Widget - This will show actual Instagram content */}
            <div className="instagram-feed-widget">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink="https://www.instagram.com/holidaysamanz/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px auto',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: 'calc(100% - 2px)'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href="https://www.instagram.com/holidaysamanz/?utm_source=ig_embed&amp;utm_campaign=loading" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      background: '#FFFFFF',
                      lineHeight: 0,
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div style={{ 
                        backgroundColor: '#F4F4F4', 
                        borderRadius: '50%', 
                        flexGrow: 0, 
                        height: '40px', 
                        marginRight: '14px', 
                        width: '40px' 
                      }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                        <div style={{ 
                          backgroundColor: '#F4F4F4', 
                          borderRadius: '4px', 
                          flexGrow: 0, 
                          height: '14px', 
                          marginBottom: '6px', 
                          width: '100px' 
                        }}></div>
                        <div style={{ 
                          backgroundColor: '#F4F4F4', 
                          borderRadius: '4px', 
                          flexGrow: 0, 
                          height: '14px', 
                          width: '60px' 
                        }}></div>
                      </div>
                    </div>
                    <div style={{ padding: '19% 0' }}></div>
                    <div style={{ 
                      display: 'block', 
                      height: '50px', 
                      margin: '0 auto 12px', 
                      width: '50px' 
                    }}>
                      <Instagram className="w-12 h-12 text-pink-500" />
                    </div>
                    <div style={{ paddingTop: '8px' }}>
                      <div style={{ 
                        color: '#3897f0', 
                        fontFamily: 'Arial,sans-serif', 
                        fontSize: '14px', 
                        fontWeight: 550, 
                        lineHeight: '18px' 
                      }}>
                        View this profile on Instagram
                      </div>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
            
            <p className="text-gray-500 text-sm mt-6">
              Click above to see our latest travel stories, destination highlights, and customer experiences!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
