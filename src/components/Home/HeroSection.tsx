import Image from "next/image"

export default function HeroSection() {
  const imageSrc = "/pabellon.webp"
  const title = "F.S.BEGUES"
  const altText = "F.S. Begues"

  return (
    <section className="relative mt-16 h-[50vh] w-full">
      <Image src={imageSrc} alt={altText} fill style={{ objectFit: "cover" }} priority />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
      </div>
    </section>
  )
}
