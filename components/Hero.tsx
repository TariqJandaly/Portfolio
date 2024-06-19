import Image from "next/image"
import { Link } from "next-view-transitions"

interface HeroProps {
  
}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <main id="hero" className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(main-bg.webp)" }}>
        <div className="flex flex-col gap-5 z-50 max-w-[750px] pl-5 md:pl-40 pb-56 md:pb-20">
          <h1 className="text-[50px] text-white font-semibold md:text-justify">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500 animate-gradient">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block font-semibold">
            Hi, I'm <span className="font-bold text-purple-500">Tariq Jandaly</span> and I'll make your dream web application a <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Reality!</span>
          </p>
          <div className="flex-col justify-between pt-12 md:flex-row hidden md:flex">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
                <Link href={'#more'} className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Learn more
                </Link>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
                <Link href={'#projects'} className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    My projects
                </Link>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
                <Link href={'#contact'} className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Contact me
                </Link>
            </button>
          </div>
        </div>
      </div>


      <div className="absolute flex bottom-20 z-50 right-5 flex-col md:hidden gap-5">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
            <Link href={'#more'} className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Learn more
            </Link>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
            <Link href={'#projects'} className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                My projects
            </Link>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
            <Link href={'#contact'} className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contact me
            </Link>
        </button>
      </div>

      <div className="absolute bottom-0 -right-1 z-[10]">
        <Image
          src={"/cliff.webp"}
          alt="cliff"
          height={480}
          width={480}
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src={"/trees.webp"}
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src={"/stars.png"}
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-10"
        unoptimized
      />
    </main>
  )
}

export default Hero