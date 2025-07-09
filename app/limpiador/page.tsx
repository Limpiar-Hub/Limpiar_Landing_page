import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "./components/hero-section"
import { FeaturesSection } from "./components/features-section"
import { NetworkBenefits } from "./components/network-benefits"
import { EligibilitySection } from "./components/eligibility-section"
import { NetworkTestimonials } from "./components/network-testimonials"
import { AppDownload } from "./components/app-download"
import { LoadingSpinner } from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Limpiador - Partner Network",
  description: "Join our network of cleaning professionals and unlock new opportunities for business growth.",
  openGraph: {
    title: "Limpiador - Partner Network",
    description: "Join our network of cleaning professionals and unlock new opportunities for business growth.",
    images: [
      {
        url: "/limp23.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function LimpiadorPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
        <NetworkBenefits />
        <EligibilitySection />
        <NetworkTestimonials />
        <AppDownload />
      </Suspense>
    </main>
  )
}

