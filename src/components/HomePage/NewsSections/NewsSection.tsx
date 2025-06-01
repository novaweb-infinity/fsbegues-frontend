import NewsCard from "./NewsCard"

interface NewsItem {
  image: string
  title: string
  date: string
  description: string
}

const newsData: NewsItem[] = [
  {
    title: "Victoria del equipo senior",
    date: "15 de Febrero, 2025",
    description: "Nuestro equipo senior logró una importante victoria en el último partido de la liga.",
    image: "/flamengo-kid.webp",
  },
  {
    title: "Nuevo entrenador para el equipo juvenil",
    date: "10 de Febrero, 2025",
    description:
      "Damos la bienvenida a nuestro nuevo entrenador para el equipo juvenil, que trae una gran experiencia.",
    image: "/pitch.webp",
  },
  {
    title: "Torneo de verano",
    date: "5 de Febrero, 2025",
    description: "Anunciamos nuestro próximo torneo de verano. ¡Inscripciones abiertas!",
    image: "/hinchas.webp",
  },
]

export default function NewsSection() {
  return (
    <section className="bg-secondary px-2 py-8 sm:px-4 sm:py-12">
      <div className="mx-auto flex w-full flex-col items-center" style={{ maxWidth: "1040px" }}>
        {/* Section title */}
        <h2 className="mb-6 text-3xl font-bold">Últimas Noticias</h2>

        {/* News list */}
        <div className="flex w-full flex-col gap-6">
          {newsData.map((newsItem, index) => (
            <NewsCard
              key={index}
              image={newsItem.image}
              title={newsItem.title}
              date={newsItem.date}
              description={newsItem.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
