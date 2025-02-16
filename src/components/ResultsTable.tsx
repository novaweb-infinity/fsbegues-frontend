import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { ResultRow } from "./ResultRow"

interface ResultRowProps {
  category: string
  result: string
  opponent: string
  status: "win" | "draw" | "loss"
}

export function ResultsTable() {
  const headers = ["Categoría", "Resultado", "Rival"]
  const results: ResultRowProps[] = [
    { category: "Senior", result: "3 - 1", opponent: "FS Gavà", status: "win" },
    { category: "Juvenil", result: "2 - 2", opponent: "FS Cornellà", status: "draw" },
    { category: "Cadete", result: "1 - 4", opponent: "FS Sant Boi", status: "loss" },
  ]

  return (
    <section className="bg-secundary p-4 py-12 text-lg">
      <h2 className="mb-6 text-3xl font-bold">Resultados de la semana</h2> {/* Título fuera de la tarjeta */}
      <Card className="my-6">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                {headers.map((header, index) => (
                  <TableHead key={index} className="text.lg w-1/3">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <ResultRow
                  key={index}
                  category={result.category}
                  result={result.result}
                  opponent={result.opponent}
                  status={result.status}
                />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}
