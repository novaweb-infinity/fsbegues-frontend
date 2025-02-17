import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary-foreground px-4 py-8 text-lg text-white">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <h3 className="text-3xl font-bold">F.S.BEGUES</h3>
          <p>Pabellón Municipal "Jaume Viñas i Pi"</p>
          <p>Begues, Baix Llobregat</p>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-white">
            <Facebook size={32} />
          </Link>
          <Link href="#" className="hover:text-white">
            <Instagram size={32} />
          </Link>
          <Link href="#" className="hover:text-white">
            <Twitter size={32} />
          </Link>
        </div>
        <div className="py-4">
          <Image src="/logo-circle.png" alt="Logo" width={100} height={100} />
        </div>
      </div>
    </footer>
  )
}
