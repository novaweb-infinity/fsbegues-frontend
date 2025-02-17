import { Button } from "@/components/ui/button"

export function ClubSection() {
  return (
    <section className="bg-secondary px-4 py-12">
      <h2 className="mb-6 text-3xl font-bold">El Club</h2>
      <p className="mb-4 text-lg">
        Fundado en abril de 2015, el Futsal Begues nació con el objetivo de fomentar el fútbol sala en la comunidad de
        Begues, un encantador pueblo ubicado en el Baix Llobregat. Desde su creación, el club ha crecido
        significativamente, convirtiéndose en un referente local en el deporte.
      </p>
      <p className="mb-4 text-lg">
        Actualmente, el FS Begues cuenta con un total de siete categorías, abarcando desde el fútbol base hasta equipos
        de veteranos, lo que permite que personas de todas las edades disfruten del fútbol sala en un ambiente
        competitivo y familiar.
      </p>
      <p className="mb-6 text-lg">
        La sede oficial del club se encuentra en el Pabellón Municipal "Jaume Viñas i Pi" de Begues, un espacio moderno
        y acogedor donde se desarrollan tanto entrenamientos como competiciones.
      </p>
      <Button size="lg" className="!text-base">
        Únete a nosotros
      </Button>
    </section>
  )
}
