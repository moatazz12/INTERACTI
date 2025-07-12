"use client"

import { MessageCircle, Tag, ArrowRight } from "lucide-react"
import { HomeDict } from "@/lib/dictionaries"

interface NewsBlogSectionProps {
  dict: HomeDict["newsBlog"];
}

const NewsBlogSection = ({ dict }: NewsBlogSectionProps) => {
  const { sectionTitle, sectionSubtitle, buttonLabel, featuredArticle, sideArticles } = dict;

  return (
    <section className="py-16 lg:py-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative star */}
      <div className="absolute top-22 left-[59%] transform -translate-x-1/2 z-10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#6366f1">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <p className="uppercase text-xs tracking-wider font-semibold mb-2 bg-gradient-to-b from-[#330052] to-[#ffd900] bg-clip-text text-transparent">
              {sectionTitle}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#330052]">
              {sectionSubtitle.split(" & ")[0]}{" "}
              <span className="bg-gradient-to-r from-[#330052] to-[#ffd900] bg-clip-text text-transparent">&</span>{" "}
              {sectionSubtitle.split(" & ")[1]}
            </h2>
          </div>
          <button className="mt-6 sm:mt-0 flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-yellow-500 transition-colors">
            {buttonLabel}
            <div className="bg-purple-900 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Articles Layout */}
        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl justify-center mx-auto">
          {/* Featured Article */}
          <div className="flex-shrink-0">
            <div
              className="relative overflow-hidden group cursor-pointer bg-gray-300 rounded-3xl"
              style={{ width: "650px", height: "420px" }}
            >
              <img
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-purple-900"></div>

              <div className="absolute top-6 left-6 bg-purple-900 text-white rounded-xl px-4 py-3 text-center">
                <div className="text-xl font-bold">{featuredArticle.date}</div>
                <div className="text-xs uppercase font-medium">{featuredArticle.month}</div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{featuredArticle.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>{featuredArticle.comments} Comments</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold leading-tight">{featuredArticle.title}</h3>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-6 flex-shrink-0">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all duration-300"
                style={{ width: "380px", height: "190px" }}
              >
                <div className="flex gap-4 h-full">
                  <div
                    className="relative flex-shrink-0 bg-gray-300 rounded-xl overflow-hidden"
                    style={{ width: "120px", height: "152px" }}
                  >
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

                  <div className="flex-1 py-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          <span>{article.category}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{article.comments} Comments</span>
                        </div>
                      </div>
                      <h4 className="text-L font-bold text-gray-900 mb-1 leading-tight">{article.title}</h4>
                    </div>

                    <div className="flex items-center gap-2 mt-auto">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex-shrink-0"></div>
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
