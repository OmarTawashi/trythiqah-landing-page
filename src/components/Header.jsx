import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const [openDropdown, setOpenDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const timeoutRef = useRef(null)

  const products = [
    { name: 'Point of Sale', desc: 'Cloud POS & Restaurant Management' },
    { name: 'Self Ordering', desc: 'Increase efficiency & profits' },
    { name: 'Waiter App', desc: 'Speed & accuracy for waiters' },
    { name: 'Online Ordering', desc: 'Web & app ordering solutions' },
  ]

  const handleEnter = (key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(key)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 120)
  }

  return (
    <header
      dir={isRTL ? 'rtl' : 'ltr'}
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16 gap-8">

          {/* LEFT / ACTIONS */}
          <div className={`${isRTL ? 'justify-start' : 'justify-end'} hidden md:flex items-center gap-4`}>
            <button
              onClick={toggleLanguage}
              className="text-sm text-gray-700 hover:text-primary-600 flex items-center gap-2"
            >
              {language === 'en' ? (
                <>
                  English
                  <span className="text-lg">🇬🇧</span>
                </>
              ) : (
                <>
                  عربي
                  <span className="text-lg">🇸🇦</span>
                </>
              )}
            </button>

            <a
              href="https://trythiqah.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-600 border border-primary-600 bg-white px-4 py-2 rounded-md hover:bg-primary-50 transition-colors"
            >
              {t.login}
            </a>

            <button className="btn-primary">
              {t.getDemo}
            </button>
          </div>

          {/* CENTER / NAV */}
          <nav className={`hidden md:flex justify-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter('products')}
              onMouseLeave={handleLeave}
            >
              <button className="nav-link">
                {t.products}
              </button>

              {openDropdown === 'products' && (
                <div
                  className={`absolute top-full mt-2 w-80 rounded-xl bg-white shadow-xl border p-4 ${
                    isRTL ? 'right-0 text-right' : 'left-0 text-left'
                  }`}
                  onMouseEnter={() => handleEnter('products')}
                  onMouseLeave={handleLeave}
                >
                  <div className="space-y-3">
                    {products.map((p, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="font-semibold text-gray-900">
                          {p.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {p.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link className="nav-link" to="/enterprise">{t.enterprise}</Link>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter('resources')}
              onMouseLeave={handleLeave}
            >
              <button className="nav-link">
                {t.resources}
              </button>

              {openDropdown === 'resources' && (
                <div
                  className={`absolute top-full mt-2 w-48 rounded-xl bg-white shadow-xl border p-2 ${
                    isRTL ? 'right-0 text-right' : 'left-0 text-left'
                  }`}
                  onMouseEnter={() => handleEnter('resources')}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                  >
                    {t.blog}
                  </Link>
                  <Link
                    to="/press-media"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                  >
                    {t.pressMedia}
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                  >
                    {t.helpCenter}
                  </a>
                </div>
              )}
            </div>

            <Link className="nav-link" to="/pricing">{t.pricing}</Link>

          </nav>

          {/* RIGHT / LOGO */}
          <div className={`${isRTL ? 'text-left' : 'text-right'} flex items-center justify-end gap-4`}>
            <Link
              to="/"
              className="text-2xl font-bold text-primary-600"
            >
              Trythiqah
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">
                {t.products}
              </button>
              <Link to="/enterprise" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                {t.enterprise}
              </Link>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                {t.resources}
              </button>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                {t.pricing}
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                {language === 'en' ? (
                  <>
                    English
                    <span className="text-lg">🇬🇧</span>
                  </>
                ) : (
                  <>
                    عربي
                    <span className="text-lg">🇸🇦</span>
                  </>
                )}
              </button>
              <a
                href="https://trythiqah.com/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-primary-600 border border-primary-600 rounded-md text-center hover:bg-primary-50"
              >
                {t.login}
              </a>
              <button className="btn-primary w-full">
                {t.getDemo}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
