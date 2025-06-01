import ClubSection from "./ClubSection"
import HeroSection from "./HeroSection"
import NewsSection from "./NewsSection"
import ResultsTable from "./ResultsTable"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClubSection />
      <ResultsTable />
      <NewsSection />
    </>
  )
}
