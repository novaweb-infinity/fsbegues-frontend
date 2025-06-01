import { TeamInfo } from "."

export default function TeamStatsCard({ teamInfo }: { teamInfo: TeamInfo }) {
  return (
    <div
      className="flex h-full w-full min-w-[220px] flex-col items-center justify-center self-stretch rounded-lg border border-muted-foreground/10 bg-muted p-6 text-center shadow-md md:w-auto md:self-center"
      style={{ flex: 1 }}
    >
      {/* Card title */}
      <h3 className="mb-6 text-xl font-bold">Estadísticas de la temporada</h3>

      {/* Row with all stats */}
      <div className="flex w-full flex-row justify-center gap-8">
        {/* Position stat */}
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground">Posición</span>
          <span className="text-2xl font-bold">{teamInfo.position}º</span>
        </div>

        {/* Matches played stat */}
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground">Partidos</span>
          <span className="text-2xl font-bold">{teamInfo.matches}</span>
        </div>

        {/* Points stat */}
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground">Puntos</span>
          <span className="text-2xl font-bold">{teamInfo.wins * 3 + teamInfo.draws}</span>
        </div>
      </div>
    </div>
  )
}
