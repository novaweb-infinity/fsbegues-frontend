import Image from "next/image"

import { ClubSection } from "@/components/ClubSection"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { NewsSection } from "@/components/NewsSection"
import { ResultsTable } from "@/components/ResultsTable"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Header />
      <main>
        <HeroSection />
        <ClubSection />
        <ResultsTable />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
