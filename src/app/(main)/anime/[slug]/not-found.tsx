"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function AnimeDetailSlugNotFound() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-4xl font-semibold">Anime not found</p>
        <p className="text-lg text-center">The Anime  you are looking for is not available</p>
        <Button
          onClick={() => router.back()}
        >
          Back to Anime
        </Button>
      </div>
    </main>
  )
}