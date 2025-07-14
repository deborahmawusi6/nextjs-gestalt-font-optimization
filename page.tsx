"use client";

import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      title: "Real-Time Medicine Locator",
      description: "Find the nearest pharmacy with your required medication instantly using our advanced location-based search system.",
      icon: "🔍",
      color: "from-primary to-success"
    },
    {
      title: "Predictive Supply Chain Tool",
      description: "Leverage data analytics and machine learning to forecast medicine needs and prevent shortages.",
      icon: "📊",
      color: "from-secondary to-info"
    },
    {
      title: "Affordability Features",
      description: "Compare prices across multiple pharmacies and find the most cost-effective options for your medications.",
      icon: "💰",
      color: "from-warning to-primary"
    },
    {
      title: "Direct-to-Patient Options",
      description: "Get medications delivered directly to your doorstep with our secure and reliable delivery network.",
      icon: "🚚",
      color: "from-info to-secondary"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-rainbow">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-info animate-wave opacity-95" />
        <div className="absolute inset-0 bg-black opacity-10" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary rounded-full opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-warning rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-info rounded-full opacity-30 animate-pulse"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-white via-warning to-white bg-clip-text text-transparent">
              Bridging the Gap in Medicine Accessibility
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-100 animate-slide-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            🌟 Welcome to The Rxcue Project, where innovative solutions meet healthcare needs. 
            Ensuring everyone has access to the medicines they need, when they need them! 🌟
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="/about"
              className="px-10 py-5 bg-gradient-to-r from-primary to-success text-white rounded-2xl shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-300 font-bold text-lg border-2 border-white"
            >
              🚀 Learn More
            </Link>
            <Link
              href="/signup"
              className="px-10 py-5 bg-gradient-to-r from-secondary to-accent text-white rounded-2xl shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-300 font-bold text-lg border-2 border-white"
            >
              ✨ Get Started
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-8 h-12 border-4 border-white rounded-full flex justify-center bg-gradient-to-b from-primary to-secondary">
            <div className="w-2 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                🌈 Our Innovative Features
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover how our cutting-edge technology is revolutionizing medicine accessibility 
              and transforming healthcare delivery worldwide! 🌍
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-gradient-to-br ${feature.color} p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group transform hover:scale-105`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 text-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-2xl mb-6 text-white group-hover:text-yellow-200 transition-colors text-center">
                  {feature.title}
                </h3>
                <p className="text-white leading-relaxed text-center opacity-90 group-hover:opacity-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">📈 Our Amazing Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up bg-white bg-opacity-20 rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-warning">10K+</div>
              <div className="text-xl">🏥 Patients Served</div>
            </div>
            <div className="animate-slide-up bg-white bg-opacity-20 rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-primary">500+</div>
              <div className="text-xl">🏪 Partner Pharmacies</div>
            </div>
            <div className="animate-slide-up bg-white bg-opacity-20 rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-info">50+</div>
              <div className="text-xl">🌆 Cities Covered</div>
            </div>
            <div className="animate-slide-up bg-white bg-opacity-20 rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-success">99%</div>
              <div className="text-xl">✅ Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-primary to-success">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            🛠️ Explore Our Services
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            From finding pharmacies to chatting with doctors, we've got everything you need! 
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/shop" className="group">
              <div className="bg-white bg-opacity-20 p-8 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl mb-4">🏪</div>
                <h3 className="text-2xl font-bold mb-3">Find Pharmacies</h3>
                <p className="opacity-90">Locate nearby pharmacies instantly</p>
              </div>
            </Link>
            <Link href="/chat" className="group">
              <div className="bg-white bg-opacity-20 p-8 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl font-bold mb-3">Chat with Doctors</h3>
                <p className="opacity-90">Get medical advice anytime</p>
              </div>
            </Link>
            <Link href="/services" className="group">
              <div className="bg-white bg-opacity-20 p-8 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl mb-4">🛠️</div>
                <h3 className="text-2xl font-bold mb-3">All Services</h3>
                <p className="opacity-90">Discover everything we offer</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-warning to-danger text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Ready to Transform Healthcare Access?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of patients, healthcare providers, and pharmacies who trust 
            The Rxcue Project for their medication needs.
          </p>
          <Link
            href="/signup"
            className="inline-block px-12 py-6 bg-gradient-to-r from-primary to-success text-white rounded-2xl shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-300 font-bold text-xl border-2 border-white"
          >
            ✨ Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  );
}
