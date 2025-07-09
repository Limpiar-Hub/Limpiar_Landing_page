import type { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Start Here - Limpiar",
  description: "Discover the benefits of partnering with Limpiador and maximize your property's value.",
  openGraph: {
    title: "Start Here - Limpiador",
    description: "Discover the benefits of partnering with Limpiador and maximize your property's value.",
    images: [
      {
        url: "/limpiar-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function StartHerePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <section className="container mx-auto py-12">
          <div className="flex justify-center">
            <Image src="/start.png" alt="Start Here Banner" width={800} height={500} className="max-w-full h-auto" />
          </div>
          <div className="flex justify-center mt-8">
            <Image src="/start2.png" alt="Security Checks" width={600} height={400} className="max-w-full h-auto" />
          </div>
        </section>
      </Suspense>
    </main>
  )
}

