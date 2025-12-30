import { useLanguage } from '../contexts/LanguageContext'

const Blog = () => {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const featuredPosts = [
    {
      id: 1,
      title: 'How to Position Your Restaurant for Corporate Event Catering Success',
      description: 'Saudi Arabia and the region have witnessed increased demand for corporate event catering',
      category: 'Restaurant for Corporate',
      image: 'Corporate Catering'
    },
    {
      id: 2,
      title: 'How to Choose the Right Delivery Partner for Your Restaurant [Guide]',
      description: 'After the Covid-19 pandemic, consumer behavior changed drastically. Many consumers now start their',
      category: 'Delivery-Partner',
      image: 'Delivery Partners'
    },
    {
      id: 3,
      title: '6 Restaurant Menu Design Tips to Attract Guests & Sales',
      description: 'Your restaurant menu isn\'t just a list of dishes and prices. It\'s a',
      category: 'Designing Menus',
      image: 'Menu Design'
    }
  ]

  const blogPosts = [
    {
      id: 4,
      title: 'Restaurant Sustainability: How to Save Energy & Enhance Operations',
      description: 'In Saudi Arabia, energy sustainability presents both a challenge and an opportunity in',
      category: 'Energy Tips',
      image: 'Sustainability'
    },
    {
      id: 5,
      title: 'Restaurant Customer Segmentation: What Is It? Why It Matters for Restaurants & Coffee Shops',
      description: 'In today\'s restaurant and coffee shop market, offering delicious food and quick service',
      category: 'Restaurant Customer',
      image: 'Customer Segmentation'
    },
    {
      id: 6,
      title: 'How Restaurants & Cafes Can Prepare for Saudi National Day 2025',
      description: 'Every year on the 23rd of September, the Kingdom of Saudi Arabia celebrates',
      category: 'Events',
      image: 'National Day'
    },
    {
      id: 7,
      title: 'How to Celebrate International Coffee Day in Saudi Arabia in 2025',
      description: 'Every year on International Coffee Day, the world celebrates the drink that wakes',
      category: 'Events',
      image: 'Coffee Day'
    },
    {
      id: 8,
      title: '5 Restaurant Entertainment Ideas for More Guests & Sales',
      description: 'In the competitive restaurant and coffee shops sector, standing out requires more than',
      category: 'Marketing',
      image: 'Entertainment'
    },
    {
      id: 9,
      title: 'How to Reduce Restaurant Wait Times & Boost Efficiency',
      description: 'In the highly competitive restaurant and coffee shop scene, both loyal customers and',
      category: 'Operations',
      image: 'Efficiency'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trythiqah Blog
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Featured Reads
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our blog library of articles and discover all the tips and tricks of the industry!
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg">
                    {post.image}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {post.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-4 text-primary-600 font-semibold hover:text-primary-700"
                  >
                    Read More
                    <svg 
                      className={`w-5 h-5 ${isRTL ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-lg">
                    {post.image}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {post.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-4 text-primary-600 font-semibold hover:text-primary-700"
                  >
                    Read More
                    <svg 
                      className={`w-5 h-5 ${isRTL ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4">
              View More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

