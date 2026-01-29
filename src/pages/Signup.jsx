import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Signup = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const [formData, setFormData] = useState({
    restaurantName: '',
    subdomain: 'your-restaurant',
    fullName: '',
    email: '',
    phoneCode: '+972',
    phone: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
    validateField(name, formData[name])
  }

  const validateField = (name, value) => {
    let error = ''
    
    if (!value || value.trim() === '') {
      error = t.errorRequired
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        error = t.errorEmailInvalid
      }
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
    
    return error === ''
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    if (!formData.restaurantName || formData.restaurantName.trim() === '') {
      newErrors.restaurantName = t.errorRequired
      isValid = false
    }

    if (!formData.fullName || formData.fullName.trim() === '') {
      newErrors.fullName = t.errorRequired
      isValid = false
    }

    if (!formData.email || formData.email.trim() === '') {
      newErrors.email = t.errorRequired
      isValid = false
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t.errorEmailInvalid
        isValid = false
      }
    }

    if (!formData.phone || formData.phone.trim() === '') {
      newErrors.phone = t.errorRequired
      isValid = false
    }

    if (!formData.password || formData.password.trim() === '') {
      newErrors.password = t.errorRequired
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    setTouched({
      restaurantName: true,
      subdomain: true,
      fullName: true,
      email: true,
      phone: true,
      password: true
    })
    
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.signupTitle}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t.signupSubtitle}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${isRTL ? 'lg:grid-flow-row-dense' : ''}`}>
          
          {/* Left Column - Purple Benefits Section */}
          <div className={`bg-primary-600 text-white p-8 lg:p-12 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none ${isRTL ? 'lg:order-2 lg:rounded-r-lg lg:rounded-l-none' : 'lg:order-1'}`}>
            <h2 className="text-2xl font-bold mb-6">
              {t.signupBenefitsTitle}
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">
                  {t.signupBenefit1}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">
                  {t.signupBenefit2}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">
                  {t.signupBenefit3}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - White Form Section */}
          <div className={`bg-white p-8 lg:p-12 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none shadow-lg ${isRTL ? 'lg:order-1 lg:rounded-l-lg lg:rounded-r-none' : 'lg:order-2'}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.signupFormTitle}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Restaurant Name */}
                <div>
                  <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.restaurantName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 ${
                      errors.restaurantName && touched.restaurantName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.restaurantName && touched.restaurantName && (
                    <p className="mt-1 text-sm text-red-500">{errors.restaurantName}</p>
                  )}
                </div>

                {/* Subdomain */}
                <div>
                  <label htmlFor="subdomain" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.subdomain}
                  </label>
                  <div className="flex items-center">
                    <span className="px-4 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-600">
                      https://
                    </span>
                    <input
                      type="text"
                      id="subdomain"
                      name="subdomain"
                      value={formData.subdomain}
                      onChange={handleChange}
                      className="flex-1 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                    />
                    <span className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-gray-600">
                      .trythiqah.com
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {t.subdomainHelper}
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 ${
                      errors.fullName && touched.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.fullName && touched.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 ${
                      errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.phone} <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    {t.phoneDetected}
                  </p>
                  <div className="flex gap-2">
                    <select
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                    >
                      <option value="+972">+972</option>
                      <option value="+968">+968</option>
                      <option value="+966">+966</option>
                      <option value="+971">+971</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="1234567890"
                      className={`flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 ${
                        errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.password} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 ${
                      errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.password && touched.password && (
                    <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                {/* General Error Message */}
                {Object.keys(errors).length > 0 && Object.values(errors).some(err => err) && (
                  <div className="text-center">
                    <p className="text-sm text-red-500">
                      {t.errorAllFields}
                    </p>
                  </div>
                )}

                {/* Login Link */}
                <div className="text-center">
                  <Link 
                    to="/login" 
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    {t.alreadyRegistered}
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition-colors"
                >
                  {t.submit}
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

