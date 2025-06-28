"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { FaDiscord } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // X icon

import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const quickLinks = ["Home", "Projects", "About", "Blog","FAQ", "Terms Of Service"];
  const services = [
    "Marketing Numérique",
    "Développement Web",
    "SEO optimisé",
    "Développement d'applications",
    "Marketing par courriel",
  ];
  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 text-[#FBD915]" />,
      text: "N°30, Av 5 Août, Rue de Misrata, 3002",
    },
    {
      icon: <Phone className="w-4 h-4 text-[#FBD915]" />,
      text: "+216 25 936 938",
    },
    {
      icon: <Mail className="w-4 h-4 text-[#FBD915]" />,
      text: "Contact@interactiagency.com",
    },
  ];

  const socialIcons = [
    FaFacebook,
    RxCross2,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaDiscord,
    FaPinterest,
    FaWhatsapp,
  ];

  return (
    <footer className="bg-[#301f50] text-white py-6 px-6 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo.png" alt="Logo" className="w-36 h-auto mb-3" />
          <p className="text-[#d9d9d9] text-sm">
            Interacti Marketing Agency – Your trusted partner in digital
            transformation and creative marketing, based in Sfax, Tunisia since
            2024.
          </p>
          <Button className="mt-3 bg-gradient-to-r from-[#301f50] to-[#fbd915] text-white rounded-full px-6 py-2">
            CONTACT US
          </Button>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <div className="flex items-center space-x-2 w-fit mb-3">
            <div className="h-0.5 w-6 bg-yellow-400" />
            <div className="h-0.5 w-20 bg-white" />
          </div>          
          <ul className="space-y-2">
            {quickLinks.map((text, i) => (
              <li key={i} className="flex items-center text-[#d9d9d9]">
                <ChevronRight className="w-4 h-4 mr-2" /> {text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Our Services</h4>
            <div className="flex items-center space-x-2 w-fit mb-3">
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

        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <div className="flex items-center space-x-2 w-fit mb-3">
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

      <div className="mt-7">
        <div className="flex items-center space-x-3">
          <span className="text-[#d9d9d9]">Follow on :</span>
          <div className="flex space-x-3">
            {socialIcons.map((Icon, i) => (
            <Icon
              key={i}
              className="text-[#d9d9d9] w-5 h-5 hover:text-[#FBD915] transition-colors duration-200"
            />          
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-white opacity-20" />
      <div className="flex flex-col md:flex-row justify-between text-[#d9d9d9] text-sm">
        <p>
          Copyright &copy; 2025 - Interacti Marketing Agency, All Rights
          Reserved.
        </p>
        <p className="text-right">Terms and Conditions &nbsp;|&nbsp; Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer; 