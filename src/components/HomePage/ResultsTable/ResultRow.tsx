interface ResultRowProps {
  category: string
  result: string
  opponent: string
}

export default function ResultRow({ category, result, opponent }: ResultRowProps) {
  return (
    <tr className="border-b text-lg transition-colors hover:bg-muted/40">
      {/* Category column */}
      <td className="w-1/3 px-2 py-2">{category}</td>

      {/* Result column with icon and color */}
      <td className={`w-1/3 px-4 py-2`}>{result}</td>

      {/* Opponent column */}
      <td className="w-1/3 px-2 py-2">{opponent}</td>
    </tr>
  )
}
