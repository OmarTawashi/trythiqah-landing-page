const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cloud-based POS & restaurant management system
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-8">
            Designing the Future of Point of Sale &<br />
            Restaurant Management Systems
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4">
              Get a 1-to-1 demo
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              See Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

