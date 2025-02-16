import Image from "next/image"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { NewsCard } from "@/components/NewsCard"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] mt-16 w-full">
          <Image src="/pabellon.avif" alt="F.S.Begues" fill style={{ objectFit: "cover" }} priority />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <h1 className="text-6xl font-bold text-white">F.S.BEGUES</h1>
          </div>
        </section>

        <section className="container p-4 my-12">
          <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg mb-4">
            Fundado en abril de 2015, el Futsal Begues nació con el objetivo de fomentar el fútbol sala en la comunidad
            de Begues, un encantador pueblo ubicado en el Baix Llobregat. Desde su creación, el club ha crecido
            significativamente, convirtiéndose en un referente local en el deporte.
          </p>
          <p className="text-lg mb-4">
            Actualmente, el FS Begues cuenta con un total de siete categorías, abarcando desde el fútbol base hasta
            equipos de veteranos, lo que permite que personas de todas las edades disfruten del fútbol sala en un
            ambiente competitivo y familiar.
          </p>
          <p className="text-lg mb-6">
            La sede oficial del club se encuentra en el Pabellón Municipal "Jaume Viñas i Pi" de Begues, un espacio
            moderno y acogedor donde se desarrollan tanto entrenamientos como competiciones.
          </p>
          <Button size="lg">Únete a Nosotros</Button>
        </section>

        <section className="bg-muted p-4 py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Últimas Noticias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NewsCard
                title="Victoria del equipo senior"
                date="15 de Febrero, 2025"
                description="Nuestro equipo senior logró una importante victoria en el último partido de la liga."
              />
              <NewsCard
                title="Nuevo entrenador para el equipo juvenil"
                date="10 de Febrero, 2025"
                description="Damos la bienvenida a nuestro nuevo entrenador para el equipo juvenil, que trae una gran experiencia."
              />
              <NewsCard
                title="Torneo de verano"
                date="5 de Febrero, 2025"
                description="Anunciamos nuestro próximo torneo de verano. ¡Inscripciones abiertas!"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
