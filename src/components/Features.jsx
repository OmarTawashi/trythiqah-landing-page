import { useLanguage } from '../contexts/LanguageContext'

const Features = () => {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const features = [
    {
      title: 'Success Begins with the Right POS & RMS',
      description: 'Trythiqah POS enables restaurants of all types to handle orders, accept payments, and optimize daily operations effortlessly.',
      image: 'Restaurant management system dashboard',
      link: 'Learn more'
    },
    {
      title: 'Stay in Control, Whenever, Wherever.',
      description: 'Closely manage your business on the go from your tablet. Keep an eye on your sales and inventory at all times and stay on top of your operations.',
      image: 'Mobile dashboard',
      link: 'Learn more'
    },
    {
      title: 'Streamline Your Operations Even More',
      description: 'Integrate your front of house & kitchen staff seamlessly leaving no room for unnecessary delays or mistakes.',
      image: 'Kitchen display screen',
      link: 'Learn more'
    },
    {
      title: 'Know Your Customers, Serve Them Better',
      description: 'Compile customer data easily and recompense their loyalty with accurately targeted rewards, gift cards and loyalty programs.',
      image: 'Loyalty program',
      link: 'Learn more'
    },
    {
      title: 'Unlock Endless Possibilities with App Marketplace',
      description: 'Enhance your business by integrating a wide range of applications to your RMS, ranging from marketing & accounting to delivery & online ordering.',
      image: 'App marketplace',
      link: 'Learn more'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                isRTL 
                  ? (index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row')
                  : (index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse')
              } items-center gap-12`}
            >
              <div className="flex-1">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg">
                    {feature.image}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
                >
                  {feature.link}
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
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="mt-24 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Accept Digital Payments from Your Customers at Every Touch Point!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Streamline accepting payments in your restaurant and enjoy daily settlements to your bank account with Trythiqah Pay.
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Discover Trythiqah Pay
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features

