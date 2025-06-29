"use client";

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
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const quickLinks = ["Home", "Projects", "About", "Blog", "FAQ", "Terms Of Service"];
  const services = [
    "Marketing Numérique",
    "Développement Web",
    "SEO optimisé",
    "Développement d'applications",
    "Marketing par courriel",
  ];
  const contactInfo = [
    { icon: <MapPin className="w-4 h-4 text-[#FBD915]" />, text: "N°30, Av 5 Août, Rue de Misrata, 3002" },
    { icon: <Phone className="w-4 h-4 text-[#FBD915]" />, text: "+216 25 936 938" },
    { icon: <Mail className="w-4 h-4 text-[#FBD915]" />, text: "Contact@interactiagency.com" },
  ];

  const socialIcons = [FaFacebook, RxCross2, FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaPinterest, FaWhatsapp];

  return (
    <footer className="bg-[#301f50] text-white px-6 py-10 sm:px-10 lg:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-36 h-auto mb-4" />
          <p className="text-[#d9d9d9] text-sm">
            Interacti Marketing Agency is a full-service digital marketing agency based in Tunisia.
            Attract, Impress, and Convert more leads online and get results with Interacti.
          </p>
          <Link href="/contact">
            <Button className="mt-4 bg-gradient-to-r from-[#301f50] to-[#fbd915] text-white rounded-full px-6 py-2 hover:opacity-90">
              CONTACT US
            </Button>
          </Link>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <div className="flex items-center space-x-2 w-fit mb-4">
            <div className="h-0.5 w-6 bg-yellow-400" />
            <div className="h-0.5 w-20 bg-white" />
          </div>
          <ul className="space-y-2">
            {quickLinks.map((text, i) => {
              const path = "/" + text.toLowerCase().replace(/\s+/g, "-");
              return (
                <li key={i}>
                  <Link href={path} className="flex items-center text-[#d9d9d9] hover:text-[#FBD915] transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" /> {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Our Services</h4>
          <div className="flex items-center space-x-2 w-fit mb-4">
            <div className="h-0.5 w-6 bg-yellow-400" />
            <div className="h-0.5 w-20 bg-white" />
          </div>
          <ul className="space-y-2">
            {services.map((text, i) => (
              <li key={i} className="flex items-center text-[#d9d9d9]">
                <ChevronRight className="w-4 h-4 mr-2" /> {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
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

      {/* Social Icons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <span className="text-[#d9d9d9]">Follow on :</span>
          <div className="flex space-x-3">
            {socialIcons.map((Icon, i) => (
              <Icon
                key={i}
                className="text-[#d9d9d9] w-5 h-5 hover:text-[#FBD915] transition-colors"
              />
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-white opacity-20" />

      <div className="flex flex-col sm:flex-row justify-between items-center text-[#d9d9d9] text-sm gap-2">
        <p className="text-center sm:text-left">
          &copy; 2025 - Interacti Marketing Agency, All Rights Reserved.
        </p>
        <p className="text-center sm:text-right">
          Terms and Conditions &nbsp;|&nbsp; Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
