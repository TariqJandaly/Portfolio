import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Image from "next/image"
import Link from "next/link"

interface pageProps {
  
}

const page: React.FC<pageProps> = ({}) => {
  return (
    <main className="w-full h-full relative">
      <Hero />
      <Skills />
    </main>
  )
}

export default page