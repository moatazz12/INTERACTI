"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Head from "next/head"
import type { HomeDict } from "@/lib/dictionaries"

interface ProjectsSectionProps {
  dict: HomeDict["projectsection"]
}

const ProjectsSection = ({ dict }: ProjectsSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const projects = dict.projects

  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Utilise 768px comme breakpoint mobile
    }

    handleResize() // Détecte la taille initiale
    window.addEventListener("resize", handleResize) // Ajoute l'écouteur d'événement

    return () => {
      window.removeEventListener("resize", handleResize) // Nettoyage
      setIsMounted(false)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getCardPosition = (index: number) => {
    const diff = index - currentSlide
    const totalCards = projects.length
    let normalizedDiff = diff
    if (diff > totalCards / 2) {
      normalizedDiff = diff - totalCards
    } else if (diff < -totalCards / 2) {
      normalizedDiff = diff + totalCards
    }
    return normalizedDiff
  }

  // Fonction unifiée pour les styles de carte (desktop et mobile)
  const getCardStyle = (index: number) => {
    const position = getCardPosition(index)
    let scaleFactor = 1
    let translateXFactor = 0
    let zIndex = 3
    let opacity = 1
    let pointerEvents: "auto" | "none" = "auto"

    if (isMobile) {
      // Mobile specific scaling and translation
      switch (position) {
        case -2:
          scaleFactor = 0.5 // Even smaller
          translateXFactor = -100 // Further out
          zIndex = 1
          opacity = 0.4
          pointerEvents = "none"
          break
        case -1:
          scaleFactor = 0.65 // Smaller than desktop's 0.8
          translateXFactor = -50 // Same relative position
          zIndex = 2
          opacity = 0.7
          pointerEvents = "none"
          break
        case 0:
          scaleFactor = 0.8 // Active card is smaller than desktop's 1
          translateXFactor = 0
          zIndex = 3
          opacity = 1
          pointerEvents = "auto"
          break
        case 1:
          scaleFactor = 0.65
          translateXFactor = 50
          zIndex = 2
          opacity = 0.7
          pointerEvents = "none"
          break
        case 2:
          scaleFactor = 0.5
          translateXFactor = 100
          zIndex = 1
          opacity = 0.4
          pointerEvents = "none"
          break
        default:
          scaleFactor = 0.3
          translateXFactor = 200
          zIndex = 0
          opacity = 0
          pointerEvents = "none"
          break
      }
    } else {
      // Desktop specific scaling and translation (original values)
      switch (position) {
        case -2:
          scaleFactor = 0.7
          translateXFactor = -100
          zIndex = 1
          opacity = 0.6
          pointerEvents = "none"
          break
        case -1:
          scaleFactor = 0.8
          translateXFactor = -50
          zIndex = 2
          opacity = 0.8
          pointerEvents = "none"
          break
        case 0:
          scaleFactor = 1
          translateXFactor = 0
          zIndex = 3
          opacity = 1
          pointerEvents = "auto"
          break
        case 1:
          scaleFactor = 0.8
          translateXFactor = 50
          zIndex = 2
          opacity = 0.8
          pointerEvents = "none"
          break
        case 2:
          scaleFactor = 0.7
          translateXFactor = 100
          zIndex = 1
          opacity = 0.6
          pointerEvents = "none"
          break
        default:
          scaleFactor = 0.5
          translateXFactor = 200
          zIndex = 0
          opacity = 0
          pointerEvents = "none"
          break
      }
    }

    return {
      transform: `translateX(${translateXFactor}%) scale(${scaleFactor})`,
      zIndex,
      opacity,
      pointerEvents,
    }
  }

  return (
    <>
      <Head>
        <title>Interacti Marketing Agency - Our Projects</title>
        <meta
          name="description"
          content="Discover our portfolio of successful digital marketing, design and development projects."
        />
        <link rel="canonical" href="https://www.interactiagency.com/projects" />
        {/* Open Graph */}
        <meta property="og:title" content="Interacti Marketing Agency - Our Projects" />
        <meta property="og:description" content="Discover our portfolio of successful digital marketing projects" />
        <meta property="og:image" content={projects[currentSlide]?.image || "/placeholder.svg"} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className="py-16 lg:py-4 bg-gray-50 relative overflow-hidden" aria-label="Our projects section">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="text-center mb-0">
            <p className="uppercase text-xs tracking-wider font-semibold mb-4 bg-gradient-to-b from-[#330052] to-[#ffd900] bg-clip-text text-transparent">
              {dict.subtitle}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#330052] leading-tight">{dict.title}</h1>
          </div>

          {/* Projects Carousel */}
          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg navigation-arrows"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg navigation-arrows"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
            </button>

            {/* Cards Container */}
            <div className="relative h-[250px] md:h-[600px] flex items-center justify-center overflow-hidden projects-carousel">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute w-[280px] h-[220px] md:w-[570px] md:h-[485px] rounded-2xl shadow-xl transition-all duration-500 ease-in-out overflow-hidden cursor-pointer group project-card`}
                  style={getCardStyle(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  role="group"
                  aria-label={`Project ${index + 1} of ${projects.length}`}
                >
                  {/* Image with Next.js optimization */}
                  <div className="w-full h-full relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.alt}
                      fill
                      className={`object-cover rounded-2xl transition-all duration-500 ${
                        hoveredCard === index ? "blur-sm scale-105" : ""
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === currentSlide}
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.95) 100%)",
                    }}
                    aria-hidden="true"
                  />
                  {/* Hover Description */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-4 md:p-8 transition-all duration-500 ${
                      hoveredCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="text-center text-white">
                      <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-yellow-500 text-black text-xs md:text-sm font-semibold rounded-full mb-1 md:mb-2">
                        {project.category}
                      </span>
                      <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4 leading-tight">{project.title}</h2>
                      <p className="text-xs md:text-sm text-gray-200 leading-relaxed max-w-md mx-auto mb-4 md:mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Project Info Card */}
              <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-40 w-[calc(100%-32px)] max-w-xs sm:max-w-sm md:w-[400px] info-card">
                <div
                  className="bg-white rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5 md:mb-1">
                      {projects[currentSlide]?.category}
                    </p>
                    <h2 className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
                      {projects[currentSlide]?.title}
                    </h2>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 md:mt-8 gap-2 pagination-dots" role="tablist">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  role="tab"
                  aria-label={`Go to project ${index + 1}`}
                  aria-selected={index === currentSlide}
                  tabIndex={index === currentSlide ? 0 : -1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsSection
