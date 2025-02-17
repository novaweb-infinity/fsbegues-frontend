interface ResultRowProps {
  category: string
  result: string
  opponent: string
  status: "win" | "draw" | "loss"
}

export function ResultRow({ category, result, opponent }: ResultRowProps) {
  return (
    <tr className="border-b text-lg">
      <td className="w-1/3 px-2 py-2">{category}</td>
      <td className="w-1/3 px-4 py-2 font-semibold">{result}</td>
      <td className="w-1/3 px-2 py-2">{opponent}</td>
    </tr>
  )
}
