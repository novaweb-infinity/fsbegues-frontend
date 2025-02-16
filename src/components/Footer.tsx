import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary px-4 py-8 text-secondary-foreground">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 text-center md:mb-0 md:text-left">
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
