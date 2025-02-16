interface ResultRowProps {
  category: string
  result: string
  opponent: string
  status: "win" | "draw" | "loss"
}

export function ResultRow({ category, result, opponent, status }: ResultRowProps) {
  const statusIcon = {
    win: "✅",
    draw: "🔄",
    loss: "❌",
  }

  return (
    <tr className="border-b">
      <td className="px-2 py-2">{category}</td>
      <td className="px-2 py-2 font-semibold">
        {result} {statusIcon[status]}
      </td>
      <td className="px-2 py-2">{opponent}</td>
    </tr>
  )
}
