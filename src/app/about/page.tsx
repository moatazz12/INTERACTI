'use client';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useRef, useEffect, useState } from 'react';
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

interface AnimatedNumberProps {
  target: number;
}

function AnimatedNumber({ target }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer: IntersectionObserver | undefined;
    let animationFrame: number | undefined;
    function animateNumber() {
      const duration = 1000;
      const startTime = performance.now();
      function update(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        setCount(value);
        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        } else {
          setCount(target);
        }
      }
      animationFrame = requestAnimationFrame(update);
    }
    function handleIntersect(entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateNumber();
        if (observer) observer.disconnect();
      }
    }
    observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.3 });
    observer.observe(node);
    return () => {
      if (observer) observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
    // eslint-disable-next-line
  }, [target]);
  return <span ref={ref}>{count}+</span>;
}

interface SocialLink {
  href: string;
  label: string;
  Icon?: React.ComponentType<{ className?: string }>;
  bg: string;
  title: string;
  subtitle: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/",
    label: "Connect with us on LinkedIn",
    Icon: FaLinkedin,
    bg: "linear-gradient(135deg, #0077B5 0%, #00c6fb 100%)",
    title: "LinkedIn",
    subtitle: "Join our network",
  },
  {
    href: "https://x.com/",
    label: "Follow us on X",
    Icon: FaXTwitter,
    bg: "linear-gradient(135deg, #232526 0%, #000000 100%)",
    title: "X",
    subtitle: "Follow our news",
  },
  {
    href: "https://instagram.com/",
    label: "Explore our Instagram",
    Icon: FaInstagram,
    bg: "linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)",
    title: "Instagram",
    subtitle: "Explore our creations",
  },
  {
    href: "https://facebook.com/",
    label: "Join our Facebook community",
    Icon: FaFacebook,
    bg: "linear-gradient(135deg, #1877F2 0%, #00c6fb 100%)",
    title: "Facebook",
    subtitle: "Join our community",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="min-h-[35vh] bg-[#301F50] text-white font-sans">
        <NavBar logoSize={90} activeUnderline="About" />
        {/* Hero Banner très compact */}
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About</h1>
          {/* Breadcrumb Button sous le titre */}
          <div className="relative flex justify-center w-full mt-2 mb-0.5">
            <span className="breadcrumb-gradient px-4 py-1.5 text-white text-[15px] font-medium flex items-center gap-2" style={{ borderRadius: 20, position: 'relative', zIndex: 1 }}>
              Home <span className="mx-1">&gt;</span> About
            </span>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative w-full py-10 bg-[#FFFFFF] overflow-hidden font-sans">
        {/* Décorations de fond */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-0 left-0 w-44 h-44 rounded-full bg-[#FBD915] opacity-30 -z-10" style={{top: -60, left: -60}} />
          <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-[#e5e1d8] opacity-40 -z-10" style={{bottom: -80, right: -80}} />
          <div className="absolute bottom-10 left-0 w-24 h-24 rounded-full bg-[#FBD915] opacity-20 -z-10" style={{bottom: 40, left: -30}} />
          <div className="absolute top-8 right-[10vw] w-32 h-32 rounded-full bg-[#e5e1d8] opacity-20 -z-10" />
        </div>
          {/* Décoration Box en haut à gauche */}
          <div className="absolute w-[180px] h-8 top-15 left-0 rounded-[20px] rotate-[-18.00deg] blur-[0.25px] bg-[linear-gradient(90deg,rgba(48,31,80,1)_0%,rgba(251,217,21,1)_100%)] opacity-20 z-0" />
        {/* Décoration Box verticale en bas à gauche */}
        <div className="absolute w-[19px] h-[120px] bottom-12 left-18 rounded-lg rotate-[12.00deg] blur-[0.25px] bg-[linear-gradient(180deg,rgba(48,31,80,1)_0%,rgba(251,217,21,1)_100%)] opacity-20 z-0" />
        {/* Décorations de fond */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-0 left-0 w-44 h-44 rounded-full bg-[#FBD915] opacity-30 -z-10" style={{top: -60, left: -60}} />
          <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-[#e5e1d8] opacity-40 -z-10" style={{bottom: -80, right: -80}} />
          <div className="absolute bottom-10 left-0 w-24 h-24 rounded-full bg-[#FBD915] opacity-20 -z-10" style={{bottom: 40, left: -30}} />
          <div className="absolute top-8 right-[10vw] w-32 h-32 rounded-full bg-[#e5e1d8] opacity-20 -z-10" />
        </div>
        
        {/* Décoration Box en bas à droite */}
        <div
          className="absolute w-[160px] h-10 bottom-10 right-0 rounded-[20px] rotate-[24.00deg] blur-[0.25px] bg-[linear-gradient(90deg,rgba(48,31,80,1)_0%,rgba(251,217,21,1)_100%)] opacity-20 z-0"
          role="presentation"
          aria-hidden="true"
        />
        
        {/* Décoration Box en haut à droite */}
        <div
          className="absolute w-[19px] h-[115px] top-4 right-10 rounded-lg rotate-[-8.00deg] blur-[0.25px] bg-[linear-gradient(180deg,rgba(48,31,80,1)_0%,rgba(251,217,21,1)_100%)] opacity-20 z-0"
          role="presentation"
          aria-hidden="true"
        />
        <div className="relative max-w-[1200px] mx-auto px-10">
          {/* Header */}
          <header className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-[#301F50] leading-tight mb-4 ">Who We Are</h2>
            <div className="mx-auto w-20 h-1 rounded-full bg-[#FBD915]" style={{width: 80, height: 4}} />
          </header>
          
          {/* Two-Column Layout */}
          <div className="grid grid-cols-[45%_55%] gap-18 items-start">
            {/* Left Column - Text Content */}
            <div className="text-[#301F50] flex flex-col justify-start">
              <h3 className="text-[34px] font-bold mb-6">Innovative Digital Solutions</h3>
              <p className="text-[#666666] text-base leading-relaxed font-normal">
                We are a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology and creative marketing strategies. Our expertise spans across web development, digital marketing, and IT solutions.
              </p>
            </div>
            
            {/* Right Column - Image Arrangement */}
            <div className="relative h-[500px] flex items-start">
              {/* Main Large Image (Bottom-Left) */}
              <div className="relative w-[320px] h-[340px] rounded-[20px] overflow-hidden z-1 transition-all duration-300 ease-in-out hover:scale-[1.03]" style={{top: 0, background: 'linear-gradient(to bottom, #301F50, #FBD915)', padding: '2px', borderRadius: '20px'}}>
                <div className="w-full h-full rounded-[18px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Two professionals giving high-five in office" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Top-Right Image */}
              <div className="absolute top-8 right-0 w-[260px] h-[220px] rounded-[20px] overflow-hidden z-2 transition-all duration-300 ease-in-out hover:scale-[1.03]" style={{top: -40, background: 'linear-gradient(to bottom, #301F50, #FBD915)', padding: '2px', borderRadius: '20px'}}>
                <div className="w-full h-full rounded-[18px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Team meeting with presentation/charts" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bottom-Right Image */}
              <div className="absolute bottom-0 right-0 w-[260px] h-[220px] rounded-[20px] overflow-hidden z-2 transition-all duration-300 ease-in-out hover:scale-[1.03]" style={{bottom: 80, background: 'linear-gradient(to bottom, #301F50, #FBD915)', padding: '2px', borderRadius: '20px'}}>
                <div className="w-full h-full rounded-[18px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Collaborative session with sticky notes" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section">
        {/* Header for About Section */}
        <header className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#301F50] leading-tight mb-4">Innovation Starts with Us</h2>
          <div className="mx-auto w-20 h-1 rounded-full bg-[#FBD915]" style={{width: 80, height: 4}} />
        </header>
        {/* Decorative Boxes - only 4 big ones, at the top of the section */}
        <div className="decorative-box box-1">
          <div className="w-[80px] h-[81px] relative">
            <div className="w-full h-full rounded-[40px/40.5px] mix-blend-darken bg-[linear-gradient(to_bottom,#301F50_0%,#FBD915_100%)] opacity-20" />
          </div>
        </div>
        <div className="decorative-box box-2">
          <div className="w-[80px] h-[81px] relative">
            <div className="w-full h-full rounded-[40px/40.5px] mix-blend-darken bg-[linear-gradient(to_bottom,#301F50_0%,#FBD915_100%)] opacity-20" />
          </div>
        </div>
        <div className="decorative-box box-3">
          <div className="w-[80px] h-[81px] relative">
            <div className="w-full h-full rounded-[40px/40.5px] mix-blend-darken bg-[linear-gradient(to_bottom,#301F50_0%,#FBD915_100%)] opacity-20" />
          </div>
        </div>
        <div className="decorative-box box-4">
          <div className="w-[80px] h-[81px] relative">
            <div className="w-full h-full rounded-[40px/40.5px] mix-blend-darken bg-[linear-gradient(to_bottom,#301F50_0%,#FBD915_100%)] opacity-20" />
          </div>
        </div>
        <div className="about-container">
          <div className="team-image-container">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our creative team at work" className="team-image" />
            <div className="team-image-overlay">
              <h2>Our Creative Team</h2>
              <p>A passionate team dedicated to excellence and innovation in digital marketing</p>
            </div>
          </div>
          
          <div className="about-grid relative">
            <div className="about-card relative">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Vision" />
              <h3>Our Vision</h3>
              <p>At INTERCATI AGENCY MARKETING, we combine strategy, innovation and design to create impactful and memorable brand identities. Our unique approach combines technical expertise and creativity for exceptional results.</p>
            </div>
            <div className="about-card">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Expertise" />
              <h3>Our Expertise</h3>
              <p>Specialized in digital marketing, branding and visual communication, we support our clients in designing elegant and engaging digital experiences. Each project is an opportunity to create something extraordinary.</p>
            </div>
            <div className="about-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Commitment" />
              <h3>Our Commitment</h3>
              <p>Our passionate and creative team is committed to exceeding your expectations. We highlight the boldness of purple and the refinement of gold to offer a result that is both modern and prestigious.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-0">
        <div className="w-full">
          <div className="flex justify-center gap-6 flex-wrap h-full">
            <div className="group rounded-2xl p-[2.5px] mb-4 transition-all duration-300" style={{ background: '#F8F6F6', display: 'inline-block' }}>
              <div className="stat-item flex flex-col items-center bg-white rounded-2xl px-4 py-4 min-w-[200px] max-w-[220px] w-full h-[220px] transition-all duration-300 shadow-[5px_5px_5px_1px_#F8F6F6] group-hover:shadow-[5px_5px_5px_1px_#301F50] group-hover:-translate-y-1">
                <div className="stat-image w-20 h-20 mb-4 flex items-center justify-center rounded-full p-[2.5px]" style={{ background: 'linear-gradient(135deg, #301F50 0%, #FBD915 100%)' }}>
                  <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Team" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <span style={{background: 'linear-gradient(90deg, #301F50 0%, #FBD915 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className="stat-number text-4xl font-bold mb-1 bg-clip-text text-transparent"><AnimatedNumber target={50} /></span>
                <span className="stat-label text-[#301F50] font-medium text-base">Expert Team Members</span>
              </div>
            </div>
            <div className="group rounded-2xl p-[2.5px] mb-4 transition-all duration-300" style={{ background: '#F8F6F6', display: 'inline-block' }}>
              <div className="stat-item flex flex-col items-center bg-white rounded-2xl px-4 py-4 min-w-[200px] max-w-[220px] w-full h-[220px] transition-all duration-300 shadow-[5px_5px_5px_1px_#F8F6F6] group-hover:shadow-[5px_5px_5px_1px_#301F50] group-hover:-translate-y-1">
                <div className="stat-image w-20 h-20 mb-4 flex items-center justify-center rounded-full p-[2.5px]" style={{ background: 'linear-gradient(135deg, #301F50 0%, #FBD915 100%)' }}>
                  <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Projects" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <span style={{background: 'linear-gradient(90deg, #301F50 0%, #FBD915 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className="stat-number text-4xl font-bold mb-1 bg-clip-text text-transparent"><AnimatedNumber target={1000} /></span>
                <span className="stat-label text-[#301F50] font-medium text-base">Projects Delivered</span>
              </div>
            </div>
            <div className="group rounded-2xl p-[2.5px] mb-4 transition-all duration-300" style={{ background: '#F8F6F6', display: 'inline-block' }}>
              <div className="stat-item flex flex-col items-center bg-white rounded-2xl px-4 py-4 min-w-[200px] max-w-[220px] w-full h-[220px] transition-all duration-300 shadow-[5px_5px_5px_1px_#F8F6F6] group-hover:shadow-[5px_5px_5px_1px_#301F50] group-hover:-translate-y-1">
                <div className="stat-image w-20 h-20 mb-4 flex items-center justify-center rounded-full p-[2.5px]" style={{ background: 'linear-gradient(135deg, #301F50 0%, #FBD915 100%)' }}>
                  <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Satisfaction" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <span style={{background: 'linear-gradient(90deg, #301F50 0%, #FBD915 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className="stat-number text-4xl font-bold mb-1 bg-clip-text text-transparent"><AnimatedNumber target={98} /></span>
                <span className="stat-label text-[#301F50] font-medium text-base">Client Satisfaction</span>
              </div>
            </div>
            <div className="group rounded-2xl p-[2.5px] mb-4 transition-all duration-300" style={{ background: '#F8F6F6', display: 'inline-block' }}>
              <div className="stat-item flex flex-col items-center bg-white rounded-2xl px-4 py-4 min-w-[200px] max-w-[220px] w-full h-[220px] transition-all duration-300 shadow-[5px_5px_5px_1px_#F8F6F6] group-hover:shadow-[5px_5px_5px_1px_#301F50] group-hover:-translate-y-1">
                <div className="stat-image w-20 h-20 mb-4 flex items-center justify-center rounded-full p-[2.5px]" style={{ background: 'linear-gradient(135deg, #301F50 0%, #FBD915 100%)' }}>
                  <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Support" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <span style={{background: 'linear-gradient(90deg, #301F50 0%, #FBD915 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className="stat-number text-4xl font-bold mb-1 bg-clip-text text-transparent"><AnimatedNumber target={200} /></span>
                <span className="stat-label text-[#301F50] font-medium text-base">Support Agents</span>
              </div>
            </div>
            <div className="group rounded-2xl p-[2.5px] mb-4 transition-all duration-300" style={{ background: '#F8F6F6', display: 'inline-block' }}>
              <div className="stat-item flex flex-col items-center bg-white rounded-2xl px-4 py-4 min-w-[200px] max-w-[220px] w-full h-[220px] transition-all duration-300 shadow-[5px_5px_5px_1px_#F8F6F6] group-hover:shadow-[5px_5px_5px_1px_#301F50] group-hover:-translate-y-1">
                <div className="stat-image w-20 h-20 mb-4 flex items-center justify-center rounded-full p-[2.5px]" style={{ background: 'linear-gradient(135deg, #301F50 0%, #FBD915 100%)' }}>
                  <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Campaigns" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <span style={{background: 'linear-gradient(90deg, #301F50 0%, #FBD915 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className="stat-number text-4xl font-bold mb-1 bg-clip-text text-transparent"><AnimatedNumber target={120} /></span>
                <span className="stat-label text-[#301F50] font-medium text-base">Successful Campaigns</span>
              </div>
            </div>
            <div className="group rounded-2xl p-[2.5px] mb-4 transition-all duration-300" style={{ background: '#F8F6F6', display: 'inline-block' }}>
              <div className="stat-item flex flex-col items-center bg-white rounded-2xl px-4 py-4 min-w-[200px] max-w-[220px] w-full h-[220px] transition-all duration-300 shadow-[5px_5px_5px_1px_#F8F6F6] group-hover:shadow-[5px_5px_5px_1px_#301F50] group-hover:-translate-y-1">
                <div className="stat-image w-20 h-20 mb-4 flex items-center justify-center rounded-full p-[2.5px]" style={{ background: 'linear-gradient(135deg, #301F50 0%, #FBD915 100%)' }}>
                  <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Happy Clients" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <span style={{background: 'linear-gradient(90deg, #301F50 0%, #FBD915 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className="stat-number text-4xl font-bold mb-1 bg-clip-text text-transparent"><AnimatedNumber target={85} /></span>
                <span className="stat-label text-[#301F50] font-medium text-base">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center justify-center" aria-labelledby="connect-heading">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-between">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col text-center md:text-left mb-8 md:mb-0 relative items-center md:items-start">
            <div className="absolute -left-4 md:-left-6 -top-4 md:-top-3 w-12 h-12 rounded-[25%] z-0" style={{
              background: 'linear-gradient(135deg, #301F50 0%, #FBD915 100%)',
              opacity: 0.18,
              pointerEvents: 'none'
            }} />
            <h2 id="connect-heading" className="relative z-10 text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #301F50 0%, #FBD915 100%)' }}>
              Connect With Us
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 relative z-10">
              Ready to transform your digital presence? Get in touch with our team of experts. We're here to help you achieve your business goals through innovative digital solutions.
            </p>
          </div>
          {/* Right: Social Media Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md mx-auto">
            {socialLinks.map((
              { href, label, Icon, bg, title, subtitle }: {
                href: string;
                label: string;
                Icon?: React.ComponentType<{ className?: string }>;
                bg: string;
                title: string;
                subtitle: string;
              },
              idx: number
            ) => {
              // Brand color for icon on hover
              let brandColor = '#0077B5';
              let cardHoverBg = 'linear-gradient(135deg, #0077B5 0%, #00c6fb 100%)';
              if (title === 'Facebook') {
                brandColor = '#1877F2';
                cardHoverBg = 'linear-gradient(135deg, #1877F2 0%, #00c6fb 100%)';
              }
              if (title === 'Instagram') {
                brandColor = '#E1306C';
                cardHoverBg = 'linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)';
              }
              if (title === 'X') {
                brandColor = '#000000';
                cardHoverBg = 'linear-gradient(135deg, #232526 0%, #000000 100%)';
              }
              return (
                <div
                  key={label}
                  className="group rounded-2xl p-[2px] mb-4 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #301F50 0%, #FBD915 100%)',
                    display: 'inline-block',
                  }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-full aspect-square max-w-[220px] flex items-center justify-center rounded-2xl shadow-md transition-transform duration-300 hover:scale-107 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#FBD915] border border-transparent group-hover:border-[#FBD915]"
                    style={{ background: 'white', transition: 'background 0.3s' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = cardHoverBg;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'white';
                    }}
                  >
                    <div
                      className="flex flex-col items-center justify-center p-8 rounded-2xl w-full h-full min-h-[180px] transition-all duration-300"
                    >
                      <span
                        className="flex items-center justify-center w-14 h-14 aspect-square rounded-[12px] mb-4 transition-all duration-300 shadow group-hover:bg-white"
                        style={{ background: bg }}
                      >
                        {Icon ? (
                          <Icon
                            className={`w-8 h-8 object-contain block text-white transition-all duration-300 group-hover:text-[${brandColor}]`}
                            aria-hidden="true"
                          />
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 object-contain block text-white transition-all duration-300 group-hover:text-[${brandColor}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.53 6.47L6.47 17.53M6.47 6.47l11.06 11.06" strokeWidth="2" strokeLinecap="round"/></svg>
                        )}
                      </span>
                      <span className="text-[#374151] text-lg font-bold mb-1 w-full text-center transition-all duration-300 group-hover:text-white">
                        {title}
                      </span>
                      <span className="text-[#6B7280] text-sm text-center w-full transition-all duration-300 group-hover:text-[rgba(255,255,255,0.8)]">
                        {subtitle}
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Espacement entre la section Connect With Us et le Footer */}
      <section className="w-full" style={{height: '50px'}} aria-hidden="true"></section>

      {/* Footer */}
      <Footer />

      {/* Global styles for Who We Are section and breadcrumb-gradient */}
      <style jsx global>{`
        .shadow-lg { box-shadow: 0 8px 24px #301F50; }
        .shadow-xl { box-shadow: 0 16px 32px #FBD915; }
        .z-1 { z-index: 1; }
        .z-2 { z-index: 2; }
        
        /* Animations modernes pour l'overlay */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up-delay {
          animation: slideUp 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-delay-2 {
          animation: slideUp 0.6s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .breadcrumb-gradient {
          background: transparent;
          position: relative;
          display: inline-block;
          padding: 0.25rem 1rem;
          border: 2px solid transparent;
        }
        .breadcrumb-gradient:before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(90deg, #6F47BB, #FBD915);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        @media (max-width: 1024px) {
          .grid-cols-\[45\%_55\%\] {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          
          .max-w-\[1200px\] { 
            padding-left: 20px !important; 
            padding-right: 20px !important; 
          }
          
          .w-\[380px\] { width: 320px !important; }
          .h-\[280px\] { height: 240px !important; }
          .w-\[260px\] { width: 220px !important; }
          .h-\[180px\] { height: 150px !important; }
          
          .absolute.top-5.right-0 {
            top: 15px !important;
          }
          
          .absolute.bottom-0.right-0 {
            bottom: 15px !important;
          }
        }
        
        @media (max-width: 768px) {
          .grid-cols-\[45\%_55\%\] {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .text-\[48px\] { font-size: 2.5rem !important; }
          .text-\[32px\] { font-size: 1.75rem !important; }
          .mb-16 { margin-bottom: 40px !important; }
          
          .relative.h-\[500px\] {
            height: auto !important;
            min-height: 400px;
          }
          
          .w-\[380px\], .w-\[260px\] { 
            width: 100% !important; 
            max-width: 300px !important;
          }
          .h-\[280px\], .h-\[180px\] { 
            height: 200px !important; 
          }
          
          .absolute.bottom-0.left-0 {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .absolute.top-5.right-0 {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .absolute.bottom-0.right-0 {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-left: auto;
            margin-right: auto;
          }
        }
        
        @media (max-width: 600px) {
          /* Suppression des espaces vides inutiles */
          section[aria-hidden="true"], .mb-16, .mb-12, .mb-8 {
            display: none !important;
            margin: 0 !important;
            height: 0 !important;
            padding: 0 !important;
          }
          /* Header/NavBar */
          .navbar, .NavBar, nav {
            padding-left: 8px !important;
            padding-right: 8px !important;
            min-height: 48px !important;
          }
          .navbar img, .NavBar img {
            max-width: 60px !important;
            max-height: 60px !important;
          }
          /* Titres */
          .text-[48px], .text-5xl, h1, h2 {
            font-size: 1.5rem !important;
            line-height: 2rem !important;
          }
          .text-[34px], .text-4xl, h3 {
            font-size: 1.1rem !important;
            line-height: 1.5rem !important;
          }
          /* Grilles */
          .about-grid, .grid-cols-[45%_55%], .grid-cols-2, .grid-cols-3, .grid-cols-4 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          /* Images */
          .team-image, .about-card img, .stat-image img {
            width: 100% !important;
            max-width: 320px !important;
            height: 180px !important;
            border-radius: 14px !important;
            margin: 0 auto !important;
          }
          /* Décorations */
          .decorative-box,
          .absolute.top-2.left-2,
          .absolute.bottom-4.right-4,
          .absolute.top-6.right-10,
          .absolute.bottom-10.left-8 {
            width: 24px !important;
            height: 24px !important;
            min-width: 0 !important;
            min-height: 0 !important;
          }
          /* Padding général */
          .max-w-6xl, .max-w-[1200px], .px-10, .px-4, .px-8 {
            padding-left: 8px !important;
            padding-right: 8px !important;
          }
          /* Footer */
          footer, .Footer {
            padding: 16px 8px !important;
            text-align: center !important;
            flex-direction: column !important;
            gap: 8px !important;
          }
          /* Espacements */
          .py-10, .py-16, .py-20 {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          /* Cartes réseaux sociaux */
          .max-w-md, .aspect-square {
            max-width: 100% !important;
            aspect-ratio: 1/1 !important;
          }
          .rounded-2xl, .rounded-xl, .rounded-lg {
            border-radius: 14px !important;
          }
          /* Empêcher le débordement horizontal */
          html, body, #__next {
            overflow-x: hidden !important;
          }
        }

        /* About Section Styles */
        .about-section {
          padding: 40px 0 100px 0;
          background: #FFFFFF;
          position: relative;
          overflow: hidden;
          margin-top: 0;
        }

        /* Decorative Boxes */
        .decorative-box {
          position: absolute;
          z-index: 0;
          pointer-events: none;
        }
        .decorative-box .w-full {
          background: linear-gradient(to bottom, #301F50 0%, #FBD915 100%) !important;
          opacity: 0.2 !important;
        }

        .box-1 {
          top: 120px;
          left: 40px;
        }

        .box-2 {
          top: 400px;
          left: 30px;
        }

        .box-3 {
          top: 200px;
          right: 50px;
        }

        .box-4 {
          top: 500px;
          right: 40px;
        }

        .about-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .team-image-container {
          position: relative;
          max-width: 1100px;
          margin: 55px auto;
          padding: 0 20px;
        }

        .team-image {
          width: 100%;
          height: 550px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(48, 31, 80, 0.2);
          transition: all 0.5s ease;
          position: relative;
        }

        .team-image:hover {
          transform: scale(1.02);
          box-shadow: 0 40px 80px rgba(48, 31, 80, 0.3);
        }

        .team-image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px;
          background: linear-gradient(to top, rgba(48, 31, 80, 0.9), transparent);
          color: white;
          border-radius: 0 0 30px 30px;
        }

        .team-image-overlay h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .team-image-overlay p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 50px;
          position: relative;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-card {
          background: #ffffff;
          padding: 30px 25px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(48, 31, 80, 0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 400px;
          text-align: center;
        }

        .about-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #301F50, #FBD915);
          transition: width 0.3s ease;
        }

        .about-card:hover::before {
          width: 8px;
        }

        .about-card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: 0 15px 30px rgba(48, 31, 80, 0.1);
          transition: transform 0.3s ease;
        }

        .about-card:hover img {
          transform: scale(1.05);
        }

        .about-card h3 {
          color: #301F50;
          margin-bottom: 20px;
          font-size: 1.8rem;
          font-weight: 600;
          position: relative;
          padding-left: 15px;
        }

        .about-card h3::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 70%;
          background: #FBD915;
          border-radius: 2px;
        }

        .about-card p {
          color: #666666;
          font-size: 1.1rem;
          line-height: 1.8;
          position: relative;
          flex-grow: 1;
        }

        .about-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(48, 31, 80, 0.15);
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .about-card {
            min-height: auto;
            padding: 30px 20px;
          }
          
          .about-card img {
            height: 120px;
          }
        }
        
        .image-border-gradient {
          position: relative;
          border: 1px solid;
          border-image: linear-gradient(135deg, #301F50, #FBD915) 1;
          border-radius: 50%;
        }
        
        .image-border-gradient img {
          border-radius: 17px;
        }

        .scrolling-stats-track {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .stat-image {
          border-radius: 50%;
          overflow: hidden;
          width: 5rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .group::after {
          content: '';
          position: absolute;
          left: 8px;
          top: 8px;
          width: calc(100% - 8px);
          height: calc(100% - 8px);
          border-radius: 16px;
          background: #FBD915;
          filter: blur(8px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
          z-index: 0;
        }
        .group:hover::after {
          opacity: 0.5;
        }

        .shadow-md { box-shadow: 0 4px 12px rgba(0,0,0,0.10); }

        .group:hover {
          background: linear-gradient(135deg, #301F50 0%, #FBD915 100%);
        }
        .group {
          background: #F8F6F6;
          transition: background 0.3s;
        }
      `}</style>
    </>
  );
} 