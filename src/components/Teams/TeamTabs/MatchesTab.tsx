import { MapPin } from "lucide-react"

import { Match } from ".."

interface MatchesTabProps {
  upcomingMatches: Match[]
}

export default function MatchesTab({ upcomingMatches }: MatchesTabProps) {
  return (
    <div className="mt-4">
      {/* Section title */}
      <h3 className="mb-4 text-2xl font-bold">Partidos</h3>

      {/* List of upcoming matches */}
      <div className="flex flex-col gap-4">
        {upcomingMatches.map((match, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center gap-4 rounded-lg border border-muted-foreground/10 bg-white/90 p-4 shadow md:flex-row"
          >
            {/* Date column */}
            <div className="flex min-w-[90px] flex-col items-center md:items-start">
              <span className="text-base font-bold text-primary">{match.date}</span>
            </div>

            {/* Teams and time */}
            <div className="flex flex-1 flex-row items-center justify-center gap-4">
              <span className="min-w-[80px] flex-1 text-right text-base font-bold md:text-lg">{match.home}</span>

              <span className="flex flex-col items-center justify-center">
                <span
                  className="flex h-10 w-20 items-center justify-center rounded-xl bg-gray-100 text-center text-xl font-bold tabular-nums text-primary md:h-12 md:w-24 md:text-2xl"
                  style={{
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: 0,
                    lineHeight: 1.1,
                  }}
                >
                  {match.time.replace(/(\d{1,2})\s*:\s*(\d{2})/, "$1 : $2")}
                </span>
              </span>

              <span className="min-w-[80px] flex-1 text-left text-base font-bold md:text-lg">{match.away}</span>
            </div>

            {/* Location column */}
            <div className="flex min-w-[90px] max-w-[90px] flex-col items-center md:items-end">
              <span className="flex w-full items-center justify-end truncate text-xs text-muted-foreground">
                <span className="w-full truncate text-right">{match.location}</span>
                <MapPin className="ml-1 inline h-4 w-4 flex-shrink-0 text-blue-400" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
