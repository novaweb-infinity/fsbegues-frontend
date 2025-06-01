import Image from "next/image"

import ClubSection from "@/components/Home/ClubSection"
import HeroSection from "@/components/Home/HeroSection"
import NewsSection from "@/components/Home/NewsSection"
import ResultsTable from "@/components/Home/ResultsTable"
import Footer from "@/components/Layout/Footer"
import Header from "@/components/Layout/Header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <main>
        <HeroSection />
        <ClubSection />
        <ResultsTable />
        <NewsSection />
      </main>
    </div>
  )
}
