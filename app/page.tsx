import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-black p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MEET MY BROTHER</h1>
      </header>

      {/* Instagram Button */}
      <a 
        href="https://www.instagram.com/kkaanerkayiran/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
      >
        FOLLOW HIM
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Curved Black Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-[200%] bg-black rounded-[50%] translate-y-[-75%]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center pt-8 px-4">
          {/* Profile Image */}
          <div className="border-2 border-white w-36 h-36 sm:w-48 sm:h-48 mb-12">
            <img
              src="face.jpg"
              alt="Profile image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Now Playing */}
          <div className="text-white text-center mb-8">
            <p className="text-sm">MEET MY BBY BROTHER</p>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">
              KAAN ERKAYIRAN <em>aka KAHA</em>
            </h2>
            <p className="text-sm mt-1">by his cool sister</p>
          </div>

          {/* Browser Window */}
          <div className="bg-white w-full max-w-3xl border border-black">
            {/* Browser Controls */}
            <div className="flex justify-between items-center border-b border-black p-2">
              <div className="flex gap-1">
                <span className="inline-block w-2 h-2 bg-black rounded-full"></span>
                <span className="inline-block w-2 h-2 bg-black rounded-full"></span>
                <span className="inline-block w-2 h-2 bg-black rounded-full"></span>
              </div>
              <span className="text-xl">&times;</span>
            </div>

            {/* Content Area */}
            <div className="flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="w-full md:w-1/2 p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif">
                  MY <br />
                  <em>BROTHER</em>
                </h3>
                <p className="text-xs md:text-sm mt-4">
                My super cool brother with Capricorn ☀, Libra ☽, and Taurus ⬆️ is currently looking for a gf. He is studying industrial engineering - won't have time to cheat on you. You'll be able to see his location 7/24 - he is either at home or gym anyway. He has big biceps, abs and a nice back that you can show off ;) On his cheat days, he'll take you out for dinner, grab some beers and have deep random convos. He'd love to play games and watch weird ass movies with you. You're always welcome at our house to have coffee or cook boiled eggs and chicken with him. He also comes with a cool older sister who'll happily go shopping with you (and help you manipulate him when needed) 👩‍❤️‍👩
                </p>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-1/2 p-4 md:p-0">
                <img
                  src="big-one.jpg"
                  alt="big image"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </div>

            {/* Quote Section */}
            <div className="p-8 text-center">
              <p className="text-lg">
                My blue jeans will last me <strong>all my life</strong> <strong><em>SO SHOULD WE</em></strong> <br />I'm spending all this time <br />
                MET YOU AT THE SHOP, IT WAS GETTING <strong>HOT</strong>
                <br />
                <strong><em>I AM LONELY</em></strong>
              </p>
            </div>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              <div className="border border-black aspect-square">
                <img
                  src="profile.jpg"
                  alt="image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-black bg-black text-white flex items-center justify-center p-4 text-center text-xs md:text-sm aspect-square">
                <p>
                 He's a gentleman well-raised by two sisters
                  <br />
                  And we have seven cats btw
                  <br /> ;)
                </p>
              </div>
              <div className="border border-black aspect-square">
                <img
                  src="right.jpg"
                  alt="Gallery image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-black aspect-square">
                <img
                  src="frank.png"
                  alt="frank image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-black aspect-square">
                <div className="h-full flex flex-col justify-center p-4">
                  <h4 className="font-bold text-sm md:text-base mb-2">BE HIS NEW GF</h4>
                  <p className="text-xs md:text-sm">He can't wait to spend the rest of his life with you, or at least until he gets bored</p>
                </div>
              </div>
              <div className="border border-black aspect-square">
                <img
                  src="bottom.jpg"
                  alt="bottom image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
