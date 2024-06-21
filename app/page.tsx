import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Image from "next/image"
import Link from "next/link"

interface pageProps {
  
}

const page: React.FC<pageProps> = ({}) => {
  return (
    <main className="w-full h-full relative flex flex-col">
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}

export default page