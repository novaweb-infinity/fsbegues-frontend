import { Badge } from "@/components/ui/badge"

import { Result } from ".."

interface ResultsTabProps {
  recentResults: Result[]
}

const resultBadgeClass: Record<string, string> = {
  Victoria: "bg-green-100 text-primary",
  Empate: "bg-gray-100 text-primary",
  Derrota: "bg-red-100 text-primary",
}

export default function ResultsTab({ recentResults }: ResultsTabProps) {
  return (
    <div className="mt-4">
      {/* Section title */}
      <h3 className="mb-4 text-2xl font-bold">Últimos Resultados</h3>

      {/* List of recent results */}
      <div className="flex flex-col gap-4">
        {recentResults.map((result, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center gap-4 rounded-lg border border-muted-foreground/10 bg-white/90 p-4 shadow md:flex-row"
          >
            {/* Date column */}
            <div className="flex min-w-[90px] flex-col items-center md:items-start">
              <span className="text-base font-bold text-primary">{result.date}</span>
            </div>

            {/* Teams and score */}
            <div className="flex flex-1 flex-row items-center justify-center gap-4">
              <span className="min-w-[80px] flex-1 text-right text-base font-bold md:text-lg">{result.home}</span>

              <span className="flex flex-col items-center justify-center">
                <span
                  className="flex h-10 w-20 items-center justify-center rounded-xl bg-gray-100 text-center text-xl font-bold tabular-nums text-primary md:h-12 md:w-24 md:text-2xl"
                  style={{
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: 0,
                    lineHeight: 1.1,
                  }}
                >
                  {result.score.replace(/\s*-\s*/g, " - ").replace(/\s*:(\d{2})$/, " : $1")}
                </span>
              </span>

              <span className="min-w-[80px] flex-1 text-left text-base font-bold md:text-lg">{result.away}</span>
            </div>

            {/* Result badge */}
            <div className="flex min-w-[90px] flex-col items-center md:items-end">
              <Badge
                className={`ml-2 rounded-md px-3 py-1 text-sm font-semibold shadow-sm ${resultBadgeClass[result.result] || ""}`}
                variant="outline"
              >
                {result.result}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
