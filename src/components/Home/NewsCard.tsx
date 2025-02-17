import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface NewsCardProps {
  image: string
  title: string
  date: string
  description: string
}

export default function NewsCard({ image, title, date, description }: NewsCardProps) {
  return (
    <Card>
      <Image src={image} alt="News" width={1920} height={1080} className="w-full rounded-t-md" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
