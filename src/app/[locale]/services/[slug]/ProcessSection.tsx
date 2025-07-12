"use client";

import React from "react";
import { ServiceDict } from "@/lib/dictionaries";

interface ProcessSectionProps {
  method: ServiceDict["method"];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ method }) => (
  <section className="bg-white py-8 px-4 md:px-10 max-w-7xl mx-auto">
    <div className="text-center mb-14 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#330052] mb-4">{method.title}</h2>
      {method.intro && <p className="text-gray-600 text-base md:text-lg">{method.intro}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {method.steps.map((step, i) => (
        <div
          key={step.title}
          className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-200 hover:shadow-lg transition "
        >
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-[#330052] text-white rounded-full font-semibold text-base">
            {i + 1}
          </div>
          
          <h3 className="text-lg font-semibold text-[#330052] flex-1">
            {step.title}
          </h3>
        </div>
          <p className="text-gray-700 text-sm">{step.description}</p>

          {/* Conditionally Render Points */}
          {step.points && step.points.length > 0 ? (
            <ul className="list-disc list-inside mt-4">
              {step.points.map((point, index) => (
                <li key={index} className="text-gray-700 text-sm">
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
    {method.footer && (
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <p className="text-xl font-medium text-[#330052]">{method.footer}</p>
      </div>
    )}
  </section>
);

export default ProcessSection;
