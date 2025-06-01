export default function TeamDescription({
  description,
}: {
  description: {
    paragraph1: string
    paragraph2: string
    paragraph3: string
  }
}) {
  return (
    <div className="flex flex-col">
      <h2 className="mb-6 text-3xl font-bold">El equipo</h2>
      <p className="mb-4 text-base text-muted-foreground sm:text-lg">{description.paragraph1}</p>
      <p className="mb-4 text-base text-muted-foreground sm:text-lg">{description.paragraph2}</p>
      <p className="mb-6 text-base text-muted-foreground sm:text-lg">{description.paragraph3}</p>
    </div>
  )
}
