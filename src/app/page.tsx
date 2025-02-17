import Image from "next/image"

import ClubSection from "@/components/Home/ClubSection"
import Footer from "@/components/Home/Footer"
import Header from "@/components/Home/Header"
import HeroSection from "@/components/Home/HeroSection"
import NewsSection from "@/components/Home/NewsSection"
import ResultsTable from "@/components/Home/ResultsTable"

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
