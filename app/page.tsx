"use client";

import { ShoppingCart, Leaf, Heart, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-4xl">🍌</span>
              <span className="text-2xl font-bold text-yellow-600">BananaFeet</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#products" className="text-gray-700 hover:text-yellow-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors">About</a>
              <a href="#sustainability" className="text-gray-700 hover:text-yellow-600 transition-colors">Sustainability</a>
            </div>
            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition-colors">
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Step Into The <span className="text-yellow-500">Future</span>
              <br />
              With Banana Shoes
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              100% organic, sustainable footwear crafted from real bananas. 
              Because your feet deserve the best nature has to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Shop Collection
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors border-2 border-gray-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-3xl h-96 flex items-center justify-center shadow-2xl">
              <span className="text-9xl">👟🍌</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose BananaFeet?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow bg-yellow-50">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">100% Sustainable</h3>
              <p className="text-gray-600">
                Made from organic bananas, our shoes are completely biodegradable and carbon-negative.
              </p>
            </article>

            <article className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow bg-yellow-50">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Ultra Comfortable</h3>
              <p className="text-gray-600">
                Natural banana fibers mold to your feet, providing unmatched comfort with every step.
              </p>
            </article>

            <article className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow bg-yellow-50">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Uniquely Stylish</h3>
              <p className="text-gray-600">
                Stand out with one-of-a-kind designs that combine fashion with sustainability.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Featured Collection
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Handcrafted with love and bananas
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Classic Banana Runner", price: "$129", emoji: "👟" },
              { name: "Premium Banana Boot", price: "$189", emoji: "🥾" },
              { name: "Banana Slip-On", price: "$99", emoji: "🩴" }
            ].map((product, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 h-64 flex items-center justify-center">
                  <span className="text-8xl">{product.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">Made from 100% organic bananas</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Good for Your Feet, Great for the Planet
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Every pair of BananaFeet shoes is crafted from sustainably sourced bananas, 
            supporting local farmers and reducing carbon emissions. When you're done wearing them, 
            they naturally decompose, leaving zero waste behind.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Biodegradable</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-500 mb-2">-50%</div>
              <div className="text-gray-700 font-semibold">Carbon Footprint</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-500 mb-2">1000+</div>
              <div className="text-gray-700 font-semibold">Happy Farmers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Go Bananas?
          </h2>
          <p className="text-xl text-yellow-50 mb-8">
            Join thousands of happy customers stepping into sustainable fashion.
          </p>
          <button className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Shop Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍌</span>
                <span className="text-xl font-bold">BananaFeet</span>
              </div>
              <p className="text-gray-400">Sustainable shoes for a better tomorrow.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BananaFeet. All rights reserved. Made with 🍌 and ❤️</p>
          </div>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "BananaFeet",
            "description": "Sustainable shoes made from 100% organic bananas",
            "url": "https://bananafeet.com",
            "logo": "https://bananafeet.com/logo.png",
            "image": "https://bananafeet.com/hero.jpg",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            }
          })
        }}
      />
    </div>
  );
}
