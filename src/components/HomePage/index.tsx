import ClubSection from "./ClubSection"
import HeroSection from "./HeroSection"
import NewsSection from "./NewsSections/NewsSection"
import ResultsTable from "./ResultsTable/ResultsTable"

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
