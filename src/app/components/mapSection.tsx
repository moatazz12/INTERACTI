"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { HomeDict } from "@/lib/dictionaries";

interface MapSectionProps {
  dict: HomeDict["mapSection"];
}

export default function MapSection({ dict }: MapSectionProps) {
  const { title, address, phone, email, mapSrc, hours , labels } = dict;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0 h-full lg:min-h-[500px]">

            {/* Map */}
            <div className="lg:col-span-3 h-64 sm:h-80 lg:h-full w-full">
              <iframe
                src={mapSrc}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#330052] to-[#330052] p-6 sm:p-8 lg:p-10 h-full">
              <div className="h-full flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold mb-6 pb-4 border-b border-purple-300">{title}</h3>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{labels.address}</h4>
                      <p className="text-purple-100 leading-relaxed">{address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{labels.phone}</h4>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-purple-100 hover:text-white transition font-medium"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{labels.email}</h4>
                      <a
                        href={`mailto:${email}`}
                        className="text-purple-100 hover:text-white transition font-medium"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{labels.hours}</h4>
                      <div className="text-purple-100 space-y-1">
                        {hours.map((item, index) => (
                          <p key={index}>
                            {item.days}: {item.hours}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}