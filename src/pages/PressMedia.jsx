import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const PressMedia = () => {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = 6

  const pressReleases = [
    {
      id: 1,
      title: 'Trythiqah Joins «Money20/20» Middle East as Platinum Sponsor, Spotlighting F&B Fintech Transformation',
      date: '09/09/2025',
      image: 'Money20/20 Event'
    },
    {
      id: 2,
      title: 'Trythiqah Returns with the Second Edition of "Trythiqah Folks" Summer Internship Program to Train Students in Restaurant Management and Operations',
      date: '19/08/2025',
      image: 'Internship Program'
    },
    {
      id: 3,
      title: 'Trythiqah Egypt Launches the Third Edition of "Pioneers ElScene" to Explore Major Trends and Changes in the F&B Sector During the Summer Season',
      date: '19/05/2025',
      image: 'Pioneers ElScene'
    },
    {
      id: 4,
      title: 'Trythiqah Acquires Solo Venture and Leads Investment Rounds in 3 Pioneering Startups to Drive Next-Gen Restaurant Success',
      date: '11/02/2025',
      image: 'Acquisition News'
    },
    {
      id: 5,
      title: 'B.TECH Business Signs a Cooperation Agreement with Trythiqah to Help Restaurant and Cafe Owners Achieve Growth',
      date: '06/08/2024',
      image: 'Partnership'
    },
    {
      id: 6,
      title: 'Trythiqah Opens a New Office in New Cairo as Part of its Expansion Plan in the Egyptian Market',
      date: '13/05/2024',
      image: 'New Office'
    },
    {
      id: 7,
      title: 'Trythiqah Announces Strategic Partnership with Leading Payment Providers',
      date: '20/04/2024',
      image: 'Payment Partnership'
    },
    {
      id: 8,
      title: 'Trythiqah Launches Revolutionary AI-Powered Menu Optimization Tool',
      date: '15/03/2024',
      image: 'AI Innovation'
    },
    {
      id: 9,
      title: 'Trythiqah Expands Operations to Serve 10,000+ Restaurants Across MENA Region',
      date: '10/02/2024',
      image: 'Expansion'
    },
    {
      id: 10,
      title: 'Trythiqah Wins Best Restaurant Technology Solution Award 2024',
      date: '05/01/2024',
      image: 'Award'
    },
    {
      id: 11,
      title: 'Trythiqah Introduces New Mobile App for Restaurant Owners',
      date: '28/12/2023',
      image: 'Mobile App'
    },
    {
      id: 12,
      title: 'Trythiqah Partners with Major Food Delivery Platforms for Seamless Integration',
      date: '15/11/2023',
      image: 'Delivery Integration'
    }
  ]

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = pressReleases.slice(startIndex, endIndex)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Press & Media
          </h1>
        </div>
      </section>

      {/* News Center Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              News Center
            </h2>
            <div className="bg-primary-50 border border-primary-200 rounded-lg px-6 py-3">
              <a 
                href="mailto:news@trythiqah.com" 
                className="text-primary-700 font-semibold hover:text-primary-800 transition-colors"
              >
                news@trythiqah.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Latest News
            </h3>
            <p className="text-lg text-gray-600">
              Check out our most recent press releases to stay up-to-date about our latest news.
            </p>
          </div>

          {/* Press Release Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentItems.map((release) => (
              <article
                key={release.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg text-center px-4">
                    {release.image}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors line-clamp-3">
                    {release.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {release.date}
                    </span>
                    <a
                      href="#"
                      className="text-primary-600 font-semibold hover:text-primary-700 text-sm inline-flex items-center gap-2"
                    >
                      Read Article
                      <svg 
                        className={`w-4 h-4 ${isRTL ? 'transform rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-300'
              }`}
            >
              « Previous
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === pageNum
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-300'
                    }`}
                  >
                    Page{pageNum}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-300'
              }`}
            >
              Next »
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PressMedia

