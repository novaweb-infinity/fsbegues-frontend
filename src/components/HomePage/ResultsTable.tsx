import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import ResultRow from "./ResultRow"

interface ResultRowProps {
  category: string
  result: string
  opponent: string
  status: "win" | "draw" | "loss"
}

export default function ResultsTable() {
  const headers = ["Categoría", "Resultado", "Rival"]
  const results: ResultRowProps[] = [
    { category: "Senior", result: "3 - 1", opponent: "FS Gavà", status: "win" },
    { category: "Juvenil", result: "2 - 2", opponent: "FS Cornellà", status: "draw" },
    { category: "Cadete", result: "1 - 4", opponent: "FS Sant Boi", status: "loss" },
  ]

  return (
    <section className="bg-secondary px-2 py-8 sm:px-4 sm:py-12">
      <div className="mx-auto w-full" style={{ maxWidth: "1040px" }}>
        {/* Results card */}
        <Card className="my-6 w-full">
          {/* Card header */}
          <CardHeader className="px-6">
            <h2 className="text-3xl font-bold">Resultados de la semana</h2>
          </CardHeader>

          {/* Card content with table */}
          <CardContent className="px-6">
            <Table>
              {/* Table header */}
              <TableHeader>
                <TableRow className="text-base hover:bg-transparent">
                  {headers.map((header, index) => (
                    <TableHead key={index} className="text-lg">
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              {/* Table body with results */}
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
      </div>
    </section>
  )
}
