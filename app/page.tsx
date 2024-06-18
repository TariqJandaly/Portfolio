import Hero from "@/components/Hero"
import Image from "next/image"
import Link from "next/link"

interface pageProps {
  
}

const page: React.FC<pageProps> = ({}) => {
  return (
    <main className="w-full h-full relative">
      <Hero />
    </main>
  )
}

export default page