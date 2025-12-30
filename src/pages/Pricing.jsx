import { useState } from 'react'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly') // 'monthly' or 'yearly'

  const allFeatures = [
    'Menu',
    'Menu Item',
    'Item Category',
    'Area',
    'Table',
    'Reservation',
    'KOT',
    'Order',
    'Customer',
    'Staff',
    'Payment',
    'Report',
    'Settings',
    'Delivery Executive',
    'Waiter Request',
    'Expenses',
    'Multiple Kitchen',
    'Inventory',
    'Kiosk',
    'Cash Register',
    'Shift',
    'Devices',
    'Change Branch',
    'Export Report',
    'Table Reservation',
    'Payment Gateway Integration',
    'Theme Setting',
    'Customer Display'
  ]

  const plans = [
    {
      name: 'Subscription Package',
      monthlyPrice: 10,
      yearlyPrice: 100,
      currency: 'USD',
      billingNote: 'Billed Annually',
      features: allFeatures,
      popular: false
    },
    {
      name: 'Life Time',
      oneTimePrice: 199,
      currency: 'USD',
      billingNote: 'Pay One Time',
      features: allFeatures,
      popular: true
    },
    {
      name: 'Premium Package',
      monthlyPrice: 10,
      yearlyPrice: 1000,
      currency: 'OMR',
      billingNote: 'Billed Annually',
      features: allFeatures,
      popular: false
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Choose the Perfect Plan for You
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            We designed our billing plans & features to fit your financial and operational requirements.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                Save Big
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="my-6">
                    {plan.oneTimePrice ? (
                      <div>
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.currency === 'USD' ? '$' : ''}
                          {plan.oneTimePrice.toLocaleString()}
                          {plan.currency === 'OMR' ? ' OMR' : ''}
                        </span>
                        <p className="text-sm text-gray-600 mt-2">{plan.billingNote}</p>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.currency === 'USD' ? '$' : ''}
                          {billingCycle === 'monthly' 
                            ? plan.monthlyPrice.toLocaleString() 
                            : plan.yearlyPrice.toLocaleString()}
                          {plan.currency === 'OMR' ? ' OMR' : ''}
                        </span>
                        <span className="text-gray-600 ml-2">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                        {billingCycle === 'yearly' && (
                          <p className="text-sm text-gray-600 mt-2">{plan.billingNote}</p>
                        )}
                      </div>
                    )}
                  </div>

                  <button className="w-full btn-primary mb-8">
                    Get Started
                  </button>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-900 mb-3">Features Included:</p>
                    <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscribe to get Trythiqah and digitize your operations today!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let us help you get started with the right tools for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fill out the form</h3>
                <p className="text-sm text-gray-600">
                  A Trythiqah specialist will reach out to you within 24 hours to schedule your demo.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Customized walkthrough</h3>
                <p className="text-sm text-gray-600">
                  Your demo will include a customized walkthrough of Trythiqah catered to your restaurant's unique needs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get your quote</h3>
                <p className="text-sm text-gray-600">
                  We'll follow up with a price quote built just for you based on your ideal hardware and software.
                </p>
              </div>
            </div>

            <button className="btn-primary text-lg px-8 py-4">
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

