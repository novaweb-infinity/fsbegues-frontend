import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NewsCardProps {
  image: string
  title: string
  date: string
  description: string
}

export default function NewsCard({ image, title, date, description }: NewsCardProps) {
  return (
    <Card className="flex h-full w-full flex-col overflow-hidden rounded-xl shadow md:flex-row">
      {/* News image */}
      <div className="relative h-40 min-h-[10rem] w-full sm:h-48 md:h-auto md:w-1/3">
        <Image src={image} alt="News" fill className="h-full w-full object-cover" />
      </div>

      {/* News content */}
      <div className="flex flex-1 flex-col justify-between">
        {/* Card header with title and date */}
        <CardHeader className="pb-2">
          <CardTitle className="mb-1 text-lg font-bold leading-tight sm:text-xl">{title}</CardTitle>
          <span className="mb-1 inline-block rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
            {date}
          </span>
        </CardHeader>

        {/* Card content with description */}
        <CardContent className="flex-1 pt-0 text-muted-foreground">
          <p className="text-sm sm:text-base">{description}</p>
        </CardContent>
      </div>
    </Card>
  )
}
