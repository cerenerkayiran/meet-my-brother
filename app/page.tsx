import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-black p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MEET MY BROTHER</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Curved Black Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-[200%] bg-black rounded-[50%] translate-y-[-75%]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center pt-8 px-4">
          {/* Profile Image */}
          <div className="border-2 border-white w-36 h-36 mb-12">
            <img
              src="/meet-my-brother/face.jpg"
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
            <div className="flex">
              {/* Left Content */}
              <div className="w-1/2 p-8">
                <h3 className="text-2xl font-serif">
                  MY <br />
                  <em>BROTHER</em>
                </h3>
                <p className="text-xs mt-4">
                My super cool brother with Capricorn ☀, Libra ☽, and Taurus ⬆️ is currently looking for a gf. He is studying industrial engineering - won't have time to cheat on you. You'll be able to see his location 7/24 - he is either at home or gym anyway. He has big biceps, abs and a nice back that you can show off ;) On his cheat days, he'll take you out for dinner, grab some beers and have deep random convos. He'd love to play games and watch weird ass movies with you. You're always welcome at our house to have coffee or cook boiled eggs and chicken with him. He also comes with a cool older sister who'll happily go shopping with you (and help you manipulate him when needed) 👩‍❤️‍👩
                </p>
              </div>

              {/* Right Image */}
              <div className="w-1/2">
                <img
                  src="/meet-my-brother/big-one.jpg"
                  alt="big image"
                  className="w-full h-full object-cover"
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
            <div className="grid grid-cols-3 gap-2 p-2">
              <div className="border border-black">
                <img
                  src="/meet-my-brother/profile.jpg"
                  alt="image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-black bg-black text-white flex items-center justify-center p-4 text-center text-xs">
                <p>
                 He's a gentleman well-raised by two sisters
                  <br />
                  And we have seven cats btw
                  <br /> ;)
                </p>
              </div>
              <div className="border border-black">
                <img
                  src="/meet-my-brother/right.jpg"
                  alt="Gallery image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-black">
                <img
                  src="/meet-my-brother/frank.png"
                  alt="frank image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-black">
                <img
                  src="/meet-my-brother/bottom.jpg"
                  alt="bottom image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-black p-4 text-xs">
                <div className="mb-4">
                  <h4 className="font-bold">BE HIS NEW GF</h4>
                  <p>He can't wait to spend the rest of his life with you, or at least until he gets bored</p>
                </div>
                <a 
                  href="https://www.instagram.com/kkaanerkayiran/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="border border-black inline-block px-2 py-1 relative hover:bg-black hover:text-white transition-colors cursor-pointer">
                    FOLLOW HIM
                    <span className="absolute right-1 top-1"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
