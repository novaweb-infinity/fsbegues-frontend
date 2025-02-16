import Image from "next/image"

export function HeroSection() {
  const title = "F.S.BEGUES"
  const imageSrc = "/pabellon.webp"
  const altText = "F.S. Begues"

  return (
    <section className="relative h-[50vh] mt-16 w-full">
      <Image src={imageSrc} alt={altText} fill style={{ objectFit: "cover" }} priority />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
      </div>
    </section>
  )
}
