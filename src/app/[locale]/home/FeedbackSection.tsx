"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { HomeDict } from "@/lib/dictionaries"

interface TestimonialsSectionProps {
  dict: HomeDict['FeedbackSection'];
}

const TestimonialsSection = ({ dict }: TestimonialsSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonials = dict.testimonials

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))
  }

  return (
    <section className="py-16 lg:py-10 relative overflow-hidden" style={{ backgroundColor: "#fffcf8" }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 left-20 w-2 h-2 bg-gray-800 rounded-full" />
        <div className="absolute top-24 left-32 w-1 h-1 bg-gray-400 rounded-full" />
        <div className="absolute top-12 right-32 w-1.5 h-1.5 bg-blue-400 rounded-full" />
        <div className="absolute bottom-20 left-16 w-1 h-1 bg-gray-800 rounded-full" />
        <div className="absolute bottom-32 right-24 w-2 h-2 bg-gray-800 rounded-full" />
        <div className="absolute bottom-16 right-40 w-1 h-1 bg-red-400 rounded-full" />
        <div className="absolute top-32 left-40 w-1 h-1 bg-orange-400 rounded-full" />
        <div className="absolute bottom-40 right-16 w-1 h-1 bg-orange-400 rounded-full" />
      </div>

      <div className="absolute top-20 right-20 z-10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#330052">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-32 z-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffd900">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="absolute top-32 right-40 z-10">
        <div className="w-2 h-2 bg-red-400 rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Illustration */}
          <div className="w-full   md:w-1/2  lg:w-1/3 relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img src="/Feedback.png" alt="Testimonials illustration" className="w-fill h-fill" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 relative">
            {/* Subtitle */}
            {dict.subtitle && (
              <div className="inline-block mb-6">
                <span className="bg-[#ffd900] text-[#330052] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  {dict.subtitle}
                </span>
              </div>
            )}

            {/* Title */}
            {dict.title && (
              <h2 className="text-4xl lg:text-5xl font-bold text-[#330052] mb-12 leading-tight">
                {dict.title}
              </h2>
            )}

            {/* Carousel */}
            <div className="relative">
              <button onClick={prevSlide} className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <button onClick={nextSlide} className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>

              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out gap-6"
                  style={{ transform: `translateX(-${currentSlide * (300 + 24)}px)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group overflow-hidden"
                      style={{ width: "300px" }}
                    >
                      <div className="absolute top-4 right-4">
                        <Quote className="w-6 h-6 text-gray-300" />
                      </div>

                      <div className="flex items-center gap-1 mb-4">{renderStars(testimonial.rating)}</div>

                      {/* Texte tronqué par défaut, affiché en entier au hover */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-5 group-hover:line-clamp-none transition-all duration-300">
                        {testimonial.text}
                      </p>

                      {/* Auteur toujours visible */}
                      <div className="flex items-center gap-3 mt-auto">
                        <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                          <p className="text-gray-500 text-xs">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>

                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
