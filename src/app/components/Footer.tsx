"use client";

import React, { useEffect, useState } from "react";
import useCurrentLocale from "../../../hooks/useCurrentLocale";
import { getDict, FooterDict } from "@/lib/dictionaries";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  FaDiscord,
  FaPinterest,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ServiceLink from "./ServiceLink";

const Footer: React.FC = () => {
  const locale = useCurrentLocale();
  const [dict, setDict] = useState<FooterDict | null>(null);

  useEffect(() => {
    getDict(locale, "footer").then((d) => setDict(d));
  }, [locale]);

  if (!dict) return null; // Tu peux afficher un loader ici

  const quickLinks = dict.links;
  const services = dict.services;
  const contactInfo = [
    { icon: <MapPin className="w-4 h-4 text-[#FBD915]" />, text: "N°30, Av 5 Août, Rue de Misrata, 3002" },
    { icon: <Phone className="w-4 h-4 text-[#FBD915]" />, text: "+216 25 936 938" },
    { icon: <Mail className="w-4 h-4 text-[#FBD915]" />, text: "Contact@interactiagency.com" },
  ];
  const socialIcons = [FaFacebook, RxCross2, FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaPinterest, FaWhatsapp];

  const generateLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <footer className="bg-[#301f50] text-white px-6 py-10 sm:px-10 lg:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Colonne 1 : Présentation */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-36 h-auto mb-4" />
          <p className="text-[#d9d9d9] text-sm">{dict.description}</p>
          <Link href={generateLocalizedPath("/contact")}>
            <Button className="mt-4 bg-gradient-to-r from-[#301f50] to-[#fbd915] text-white rounded-full px-6 py-2 hover:opacity-90">
              {dict.contactUs}
            </Button>
          </Link>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div>
          <h4 className="text-lg font-semibold mb-3">{dict.quickLinks}</h4>
          <div className="flex items-center space-x-2 w-fit mb-4">
            <div className="h-0.5 w-6 bg-yellow-400" />
            <div className="h-0.5 w-20 bg-white" />
          </div>
          <ul className="space-y-2">
            {quickLinks.map((text, i) => {
              const path = "/" + text.slug.toLowerCase().replace(/\s+/g, "-");
              return (
                <li key={i}>
                  <Link href={generateLocalizedPath(path)} className="flex items-center text-[#d9d9d9] hover:text-[#FBD915] transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" /> {text.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Colonne 3 : Nos services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">{dict.ourServices}</h4>
          <div className="flex items-center space-x-2 w-fit mb-4">
            <div className="h-0.5 w-6 bg-yellow-400" />
            <div className="h-0.5 w-20 bg-white" />
          </div>
          <ul className="space-y-2">
            {services.map((service, i) => (
              <li key={i} className="flex items-center text-[#d9d9d9]">
                <ChevronRight className="w-4 h-4 mr-2" />
                <ServiceLink serviceTitle={service.slug} className="text-[#d9d9d9] hover:text-[#FBD915]"  />
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 4 : Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">{dict.contactTitle}</h4>
          <div className="flex items-center space-x-2 w-fit mb-4">
            <div className="h-0.5 w-6 bg-yellow-400" />
            <div className="h-0.5 w-20 bg-white" />
          </div>
          <ul className="space-y-4">
            {contactInfo.map((item, i) => (
              <li key={i} className="flex items-start text-[#d9d9d9]">
                {item.icon}
                <span className="ml-2 text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <span className="text-[#d9d9d9]">{dict.follow}</span>
          <div className="flex space-x-3">
            {socialIcons.map((Icon, i) => (
              <Icon key={i} className="text-[#d9d9d9] w-5 h-5 hover:text-[#FBD915] transition-colors" />
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-white opacity-20" />

      <div className="flex flex-col sm:flex-row justify-between items-center text-[#d9d9d9] text-sm gap-2">
        <p className="text-center sm:text-left">&copy; 2025 - {dict.copyright}</p>
        <p className="text-center sm:text-right">{dict.terms}</p>
      </div>
    </footer>
  );
};

export default Footer;
