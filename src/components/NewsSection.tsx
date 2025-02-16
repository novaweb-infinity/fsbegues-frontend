import { NewsCard } from "@/components/NewsCard"

interface NewsItem {
  title: string
  date: string
  description: string
}

const newsData: NewsItem[] = [
  {
    title: "Victoria del equipo senior",
    date: "15 de Febrero, 2025",
    description: "Nuestro equipo senior logró una importante victoria en el último partido de la liga.",
  },
  {
    title: "Nuevo entrenador para el equipo juvenil",
    date: "10 de Febrero, 2025",
    description:
      "Damos la bienvenida a nuestro nuevo entrenador para el equipo juvenil, que trae una gran experiencia.",
  },
  {
    title: "Torneo de verano",
    date: "5 de Febrero, 2025",
    description: "Anunciamos nuestro próximo torneo de verano. ¡Inscripciones abiertas!",
  },
]

export function NewsSection() {
  return (
    <section className="bg-muted p-4 py-12">
      <div className="">
        <h2 className="mb-6 text-3xl font-bold">Últimas Noticias</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((newsItem, index) => (
            <NewsCard key={index} title={newsItem.title} date={newsItem.date} description={newsItem.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
