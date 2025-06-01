import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { Player, StaffMember } from ".."

interface PlayersTabProps {
  players: Player[]
  staff: StaffMember[]
}

export default function PlayersTab({ players, staff }: PlayersTabProps) {
  return (
    <>
      {/* Players section title */}
      <h3 className="mb-6 mt-8 text-2xl font-bold">Jugadores</h3>

      {/* Players grid */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {players.map((player) => (
          <Card key={player.id} className="overflow-hidden">
            {/* Player image and number */}
            <CardHeader className="p-0">
              <div className="relative h-40 w-full sm:h-48">
                <Image
                  src={player.image || "/placeholder.svg"}
                  alt={player.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg transition-transform duration-200 hover:scale-105"
                />
                <div className="absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 p-0 text-blue-900 shadow-none">
                  <span className="text-lg font-bold leading-none">{player.number}</span>
                </div>
              </div>
            </CardHeader>

            {/* Player info section */}
            <CardContent className="p-4">
              <h3 className="mb-1 text-base font-bold sm:text-lg">{player.name}</h3>
              <div className="flex items-center justify-between gap-2">
                {/* Player position badge */}
                <Badge
                  className={`rounded border-0 bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-900`}
                  variant="secondary"
                >
                  {player.position}
                </Badge>
                {/* Player age */}
                <span className="text-xs text-muted-foreground">{player.age} años</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Staff section title */}
      <h3 className="mb-6 mt-10 text-2xl font-bold">Cuerpo Técnico</h3>

      {/* Staff grid */}
      <div className="grid grid-cols-2 justify-center gap-4 sm:grid-cols-3 md:grid-cols-4">
        {staff.map((person, index) => (
          <Card key={index} className="overflow-hidden">
            {/* Staff image */}
            <CardHeader className="p-0">
              <div className="relative h-40 w-full sm:h-48">
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg transition-transform duration-200 hover:scale-105"
                />
              </div>
            </CardHeader>

            {/* Staff info section */}
            <CardContent className="p-4">
              <h3 className="mb-1 text-base font-bold sm:text-lg">{person.name}</h3>
              {/* Staff role badge */}
              <Badge
                className="rounded border-0 bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-900"
                variant="secondary"
              >
                {person.role}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
