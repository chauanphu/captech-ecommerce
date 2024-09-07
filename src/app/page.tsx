// pages/index.js
import Navbar from '@/components/Navbar'; // Import the Navbar component

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primaryBlue text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to StreetLight Co.</h1>
        <p className="mt-4 text-lg">Providing energy-efficient street lighting solutions for modern cities.</p>
        <button className="mt-6 bg-brightBlue text-white py-2 px-6 rounded-full hover:bg-white hover:text-primaryBlue transition">
          Explore Our Products
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center">Our Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Product 1 */}
          <div className="border border-lightGray rounded-lg p-4 text-center">
            <h3 className="text-xl font-bold">LED Street Lights</h3>
            <p className="mt-2 text-gray-600">Efficient lighting for urban areas.</p>
            <button className="mt-4 bg-primaryBlue text-white py-2 px-4 rounded-full hover:bg-brightBlue transition">View More</button>
          </div>
          {/* Product 2 */}
          <div className="border border-lightGray rounded-lg p-4 text-center">
            <h3 className="text-xl font-bold">Smart Lighting</h3>
            <p className="mt-2 text-gray-600">Adaptive street lighting solutions.</p>
            <button className="mt-4 bg-primaryBlue text-white py-2 px-4 rounded-full hover:bg-brightBlue transition">View More</button>
          </div>
          {/* Product 3 */}
          <div className="border border-lightGray rounded-lg p-4 text-center">
            <h3 className="text-xl font-bold">Solar-Powered Lights</h3>
            <p className="mt-2 text-gray-600">Sustainable lighting with solar energy.</p>
            <button className="mt-4 bg-primaryBlue text-white py-2 px-4 rounded-full hover:bg-brightBlue transition">View More</button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-gray-100 py-16 px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center">Our Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Project 1 */}
          <div className="bg-white border border-lightGray rounded-lg p-4">
            <h3 className="text-xl font-bold">City Park Lighting</h3>
            <p className="mt-2 text-gray-600">Installed LED street lights in urban parks for energy efficiency.</p>
          </div>
          {/* Project 2 */}
          <div className="bg-white border border-lightGray rounded-lg p-4">
            <h3 className="text-xl font-bold">Smart City Project</h3>
            <p className="mt-2 text-gray-600">Deployed smart lighting solutions across the city to adapt to traffic flow.</p>
          </div>
          {/* Project 3 */}
          <div className="bg-white border border-lightGray rounded-lg p-4">
            <h3 className="text-xl font-bold">Solar-Powered Highways</h3>
            <p className="mt-2 text-gray-600">Implemented solar-powered lights along highways to reduce energy costs.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primaryBlue text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Light Up Your City?</h2>
        <p className="mt-4 text-lg">Contact us today to get started with our street lighting solutions.</p>
        <button className="mt-6 bg-brightBlue text-white py-2 px-6 rounded-full hover:bg-white hover:text-primaryBlue transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
