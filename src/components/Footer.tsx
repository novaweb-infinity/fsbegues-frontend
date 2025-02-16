import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="font-bold">F.S.BEGUES</h3>
          <p>Pabellón Municipal "Jaume Viñas i Pi"</p>
          <p>Begues, Baix Llobregat</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary">
            <Facebook />
          </a>
          <a href="#" className="hover:text-primary">
            <Instagram />
          </a>
          <a href="#" className="hover:text-primary">
            <Twitter />
          </a>
        </div>
      </div>
    </footer>
  )
}
