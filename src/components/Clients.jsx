import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Clients = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const clientLogos = [
    'Burgerizer', 'Cinnabon', 'Buffalo Wild Wings', 'Dunkin', 
    'Starbucks', 'Little Caesars', 'Freshii', 'Galitto\'s'
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.clientsTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.clientsDescription}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
            >
              <span className="text-gray-400 font-semibold text-sm text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients

