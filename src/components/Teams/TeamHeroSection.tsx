import Image from "next/image"

import { Badge } from "@/components/ui/badge"

import { TeamInfo } from "."

export default function TeamHeroSection({ teamInfo }: { teamInfo: TeamInfo }) {
  return (
    <section className="relative w-full" style={{ maxWidth: "1040px", margin: "0 auto" }}>
      {/* Hero image background */}
      <div className="relative h-40 w-full overflow-hidden rounded-b-xl sm:h-56 md:h-64">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt={`F.S. Begues ${teamInfo.name}`}
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Overlay with team name and league badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-5xl">F.S. BEGUES</h1>
          <h2 className="text-xl font-semibold drop-shadow md:text-2xl">{teamInfo.name}</h2>
          <Badge className="mt-3 text-xs md:text-base" variant="outline">
            {teamInfo.league}
          </Badge>
        </div>
      </div>
    </section>
  )
}
