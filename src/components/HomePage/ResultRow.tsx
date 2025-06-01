import { Check, Minus, X } from "lucide-react"

interface ResultRowProps {
  category: string
  result: string
  opponent: string
  status: "win" | "draw" | "loss"
}

export default function ResultRow({ category, result, opponent, status }: ResultRowProps) {
  let statusColor = ""
  let statusIcon = null

  if (status === "win") {
    statusColor = "text-green-600 font-bold"
    statusIcon = <Check className="mr-1 inline h-5 w-5 text-green-500" />
  } else if (status === "draw") {
    statusColor = "text-yellow-600 font-semibold"
    statusIcon = <Minus className="mr-1 inline h-5 w-5 text-yellow-500" />
  } else if (status === "loss") {
    statusColor = "text-red-600 font-semibold"
    statusIcon = <X className="mr-1 inline h-5 w-5 text-red-500" />
  }

  return (
    <tr className="border-b text-lg transition-colors hover:bg-muted/40">
      {/* Category column */}
      <td className="w-1/3 px-2 py-2">{category}</td>

      {/* Result column with icon and color */}
      <td className={`w-1/3 px-4 py-2 ${statusColor}`}>
        {statusIcon}
        {result}
      </td>

      {/* Opponent column */}
      <td className="w-1/3 px-2 py-2">{opponent}</td>
    </tr>
  )
}
