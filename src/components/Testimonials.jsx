const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Trythiqah restaurant RMS - cloud POS system is just perfect. It comes with more features than any other system. It looks beautiful, easy-to-use, with great customer support.',
      author: 'Homoud Al Homoudi',
      company: '7Ribs'
    },
    {
      quote: 'We have tried many systems before but they did not fully meet our needs. Since adopting Trythiqah, we have found solutions for cost, inventory, and analytics.',
      author: 'Hussein Al Mousawi',
      company: 'Koobs Cafe'
    },
    {
      quote: 'Very easy to use! It connects all activity centers/ branches in one platform. We appreciate the efforts of the Trythiqah technical support\'s quick to respond.',
      author: 'Ahmad Omran',
      company: 'Mazaj Maghrebi'
    },
    {
      quote: 'We extend our warmest gratitude to the Trythiqah company for their sincerity, professionalism, and technical support.',
      author: 'Youssef AlMokhtar AlJabri',
      company: 'Chef\'s Restaurant'
    },
    {
      quote: 'Trythiqah cloud POS has everything we need. A good user interface and friendly navigation make it easy for people to course through it.',
      author: 'Anas Galmouss',
      company: 'Food Gate Co.'
    },
    {
      quote: 'Trythiqah is excellent! It allows us to monitor and manage our branches efficiently. The after-sales service is fast and the team is responsive.',
      author: 'Muhammad Abu Shawarib',
      company: 'Shams'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Be Part of 30,000+ Restaurants Thriving with Trythiqah!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your growth is our mission. Discover how Trythiqah empowers many restaurants like yours to succeed—hear directly from our clients!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

