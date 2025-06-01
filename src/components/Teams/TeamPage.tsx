import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface Player {
  id: number
  number: number
  name: string
  position: string
  age: number
  image: string
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

export function TeamPage({ teamInfo, description, players, staff, upcomingMatches, recentResults }: TeamPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] w-full">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt={`F.S. Begues ${teamInfo.name}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h1 className="mb-2 text-4xl font-bold md:text-6xl">F.S. BEGUES</h1>
            <h2 className="text-2xl font-semibold md:text-3xl">{teamInfo.name}</h2>
            <Badge className="mt-4 text-lg" variant="outline">
              {teamInfo.league}
            </Badge>
          </div>
        </section>

        {/* Team Info Section */}
        <section className="my-12 w-full px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Información del Equipo</h2>
              <p className="mb-4 text-lg">{description.paragraph1}</p>
              <p className="mb-4 text-lg">{description.paragraph2}</p>
              <p className="mb-6 text-lg">{description.paragraph3}</p>
            </div>
            <div className="rounded-lg bg-muted p-6">
              <h3 className="mb-4 text-xl font-bold">Estadísticas de la Temporada</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Posición</p>
                  <p className="text-2xl font-bold">{teamInfo.position}º</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Partidos</p>
                  <p className="text-2xl font-bold">{teamInfo.matches}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Victorias</p>
                  <p className="text-2xl font-bold">{teamInfo.wins}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Empates</p>
                  <p className="text-2xl font-bold">{teamInfo.draws}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Derrotas</p>
                  <p className="text-2xl font-bold">{teamInfo.losses}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Goles</p>
                  <p className="text-2xl font-bold">
                    {teamInfo.goalsFor} - {teamInfo.goalsAgainst}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section for Players, Matches, Results */}
        <section className="my-12 w-full px-4">
          <Tabs defaultValue="players">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="players">Jugadores</TabsTrigger>
              <TabsTrigger value="matches">Próximos Partidos</TabsTrigger>
              <TabsTrigger value="results">Resultados</TabsTrigger>
            </TabsList>

            {/* Players Tab */}
            <TabsContent value="players">
              <h3 className="mb-6 mt-12 text-2xl font-bold">Jugadores</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {players.map((player) => (
                  <Card key={player.id}>
                    <CardHeader className="p-0">
                      <div className="relative h-64 w-full">
                        <Image
                          src={player.image || "/placeholder.svg"}
                          alt={player.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-t-lg"
                        />
                        <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-br-lg rounded-tl-lg bg-transparent text-primary-foreground">
                          <span className="text-4xl font-bold">{player.number}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <h3 className="text-lg font-bold">{player.name}</h3>
                      <div className="mt-2 flex items-center justify-between">
                        <Badge>{player.position}</Badge>
                        <span className="text-sm text-muted-foreground">{player.age} años</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="mb-6 mt-12 text-2xl font-bold">Cuerpo Técnico</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {staff.map((person, index) => (
                  <Card key={index}>
                    <CardHeader className="p-0">
                      <div className="relative h-64 w-full">
                        <Image
                          src={person.image || "/placeholder.svg"}
                          alt={person.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-t-lg"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <h3 className="text-lg font-bold">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Upcoming Matches Tab */}
            <TabsContent value="matches">
              <div className="mt-6">
                <h3 className="mb-4 text-2xl font-bold">Próximos Partidos</h3>
                <div className="space-y-4">
                  {upcomingMatches.map((match, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{match.date}</span>
                          <span>{match.time}</span>
                        </CardTitle>
                        <CardDescription>{match.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                          <div className="flex-1 text-center md:text-right">
                            <p className="font-bold">{match.home}</p>
                          </div>
                          <div className="text-center text-2xl font-bold">VS</div>
                          <div className="flex-1 text-center md:text-left">
                            <p className="font-bold">{match.away}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results">
              <div className="mt-6">
                <h3 className="mb-4 text-2xl font-bold">Últimos Resultados</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Partido</TableHead>
                      <TableHead className="text-center">Resultado</TableHead>
                      <TableHead className="text-right">Estado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentResults.map((result, index) => (
                      <TableRow key={index}>
                        <TableCell>{result.date}</TableCell>
                        <TableCell>
                          {result.home} vs {result.away}
                        </TableCell>
                        <TableCell className="text-center font-bold">{result.score}</TableCell>
                        <TableCell className="text-right">
                          <Badge
                            variant={
                              result.result === "Victoria"
                                ? "default"
                                : result.result === "Empate"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {result.result}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}
