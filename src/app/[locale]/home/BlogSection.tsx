"use client"

import { MessageCircle, Tag, ArrowRight } from "lucide-react"
import { HomeDict } from "@/lib/dictionaries"

interface NewsBlogSectionProps {
  dict: HomeDict["newsBlog"];
}

const NewsBlogSection = ({ dict }: NewsBlogSectionProps) => {
  const { sectionTitle, sectionSubtitle, buttonLabel, featuredArticle, sideArticles } = dict;

  return (
    <section className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-12 left-[70%] transform -translate-x-1/2 z-10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#301F50">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p className="uppercase text-xs tracking-wider font-semibold mb-2 bg-gradient-to-b from-[#330052] to-[#ffd900] bg-clip-text text-transparent">
              {sectionTitle}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#330052] leading-tight">
              {sectionSubtitle.split(" & ")[0]}{" "}
              <span className="bg-gradient-to-r from-[#330052] to-[#ffd900] bg-clip-text text-transparent">&</span>{" "}
              {sectionSubtitle.split(" & ")[1]}
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-3 rounded-full font-semibold text-sm hover:bg-yellow-500 transition-colors">
            {buttonLabel}
            <div className="bg-purple-900 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Articles layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Featured article */}
          <div className="w-full lg:w-2/3">
            <div className="relative overflow-hidden group cursor-pointer rounded-3xl h-[300px] sm:h-[400px] bg-gray-300">
              <img
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-purple-900" />
              <div className="absolute top-5 left-5 bg-purple-900 text-white rounded-xl px-3 py-2 text-center">
                <div className="text-base font-bold">{featuredArticle.date}</div>
                <div className="text-xs uppercase font-medium">{featuredArticle.month}</div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex flex-wrap gap-3 mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>{featuredArticle.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{featuredArticle.comments} Comments</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug">
                  {featuredArticle.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Side articles */}
          <div className="w-full lg:w-1/2 space-y-6">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:w-[120px] h-[180px] sm:h-[150px] bg-gray-300 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-purple-900 text-white rounded-lg px-2 py-1 text-center">
                      <div className="text-sm font-bold">{article.date}</div>
                      <div className="text-xs uppercase font-medium">{article.month}</div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-3 mb-2 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          <span>{article.category}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{article.comments} Comments</span>
                        </div>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                        {article.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-600">By Admin</p>
                        <p className="text-xs font-semibold text-gray-900">{article.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsBlogSection
