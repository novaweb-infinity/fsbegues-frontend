import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ClubSection() {
  return (
    <section className="bg-secondary px-2 py-16 md:py-20">
      <div className="mx-auto flex w-full flex-col items-center text-center" style={{ maxWidth: "1040px" }}>
        {/* Section title */}
        <h2 className="mb-4 text-4xl font-extrabold leading-tight text-foreground">El Club</h2>

        {/* First paragraph */}
        <p className="mb-3 text-lg text-muted-foreground">
          Fundado en <span className="font-semibold text-primary">abril de 2015</span>, el Futsal Begues nació con el
          objetivo de fomentar el fútbol sala en la comunidad de Begues, un encantador pueblo ubicado en el Baix
          Llobregat. Desde su creación, el club ha crecido significativamente, convirtiéndose en un referente local en
          el deporte.
        </p>

        {/* Second paragraph */}
        <p className="mb-3 text-lg text-muted-foreground">
          Actualmente, el FS Begues cuenta con un total de{" "}
          <span className="font-semibold text-primary">siete categorías</span>, abarcando desde el fútbol base hasta
          equipos de veteranos, lo que permite que personas de todas las edades disfruten del fútbol sala en un ambiente
          competitivo y familiar.
        </p>

        {/* Third paragraph */}
        <p className="mb-6 text-lg text-muted-foreground">
          La sede oficial del club se encuentra en el{" "}
          <span className="font-semibold text-primary">Pabellón Municipal "Jaume Viñas i Pi"</span> de Begues, un
          espacio moderno y acogedor donde se desarrollan tanto entrenamientos como competiciones.
        </p>

        {/* Join us button */}
        <Button
          size="lg"
          className="flex items-center gap-2 px-8 py-6 !text-base shadow-md transition-transform hover:scale-105"
        >
          <Plus className="h-5 w-5" />
          Únete a nosotros
        </Button>
      </div>
    </section>
  )
}
