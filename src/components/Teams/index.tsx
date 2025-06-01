import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import TeamDescription from "./TeamDescription"
import TeamHeroSection from "./TeamHeroSection"
import TeamStatsCard from "./TeamStatsCard"
import MatchesTab from "./TeamTabs/MatchesTab"
import PlayersTab from "./TeamTabs/PlayersTab"
import ResultsTab from "./TeamTabs/ResultsTab"

export interface Player {
  id: number
  number: number
  name: string
  position: string
  age: number
  image: string
  nationality?: string
  height?: number // cm
  weight?: number // kg
  instagram?: string
  twitter?: string
}

export interface StaffMember {
  name: string
  role: string
  image: string
}

export interface Match {
  date: string
  time: string
  home: string
  away: string
  location: string
}

export interface Result {
  date: string
  result: "Victoria" | "Empate" | "Derrota"
  score: string
  home: string
  away: string
}

export interface TeamInfo {
  name: string
  category: string
  league: string
  season: string
  position: number
  matches: number
  wins: number
  draws: number
  losses: number
  goalsFor: number
  goalsAgainst: number
}

export interface TeamPageProps {
  teamInfo: TeamInfo
  description: {
    paragraph1: string
    paragraph2: string
    paragraph3: string
  }
  players: Player[]
  staff: StaffMember[]
  upcomingMatches: Match[]
  recentResults: Result[]
}

export default function TeamPage({
  teamInfo,
  description,
  players,
  staff,
  upcomingMatches,
  recentResults,
}: TeamPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <main className="flex-grow">
        {/* Hero Section */}
        <TeamHeroSection teamInfo={teamInfo} />

        {/* Team Info */}
        <section className="w-full px-2 py-8" style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:items-stretch">
            <div className="flex flex-col md:col-span-2">
              <TeamDescription description={description} />
            </div>
            <TeamStatsCard teamInfo={teamInfo} />
          </div>
        </section>

        {/* Tabs Section for Players, Matches, Results */}
        <section className="w-full px-2 py-8" style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <Tabs defaultValue="players">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="players">Jugadores</TabsTrigger>
              <TabsTrigger value="matches">Partidos</TabsTrigger>
              <TabsTrigger value="results">Resultados</TabsTrigger>
            </TabsList>

            {/* Players Tab */}
            <TabsContent value="players">
              <PlayersTab players={players} staff={staff} />
            </TabsContent>

            {/* Upcoming Matches Tab */}
            <TabsContent value="matches">
              <MatchesTab upcomingMatches={upcomingMatches} />
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results">
              <ResultsTab recentResults={recentResults} />
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}
