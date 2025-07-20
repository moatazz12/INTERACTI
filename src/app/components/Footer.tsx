import Link from 'next/link';
import Image from 'next/image';
import { FooterDict } from '@/lib/dictionaries';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import ServiceLink from './ServiceLink';
import { Separator } from './ui/separator';
import { memo, useMemo } from 'react';

interface FooterProps {
  dict: FooterDict;
  locale: string;
}

const SectionTitle = memo(({ title }: { title: string }) => (
  <div>
    <h4 className="text-lg font-semibold mb-3">{title}</h4>
    <div className="flex items-center space-x-2 w-fit mb-4">
      <div className="h-0.5 w-6 bg-yellow-400" />
      <div className="h-0.5 w-20 bg-white" />
    </div>
  </div>
));

const Footer = ({ dict, locale }: FooterProps) => {
  const localizePath = (path: string) => `/${locale}${path}`;

  const contact = useMemo(
    () => [
      { icon: <MapPin className="w-4 h-4 text-[#FBD915]" />, text: 'N°30, Av 5 Août, Rue de Misrata, 3002' },
      { icon: <Phone className="w-4 h-4 text-[#FBD915]" />, text: '+216 25 936 938' },
      { icon: <Mail className="w-4 h-4 text-[#FBD915]" />, text: 'Contact@interactiagency.com' },
    ],
    []
  );

  const socialIcons = useMemo(
    () => [
      { src: '/icons/facebook.svg', label: 'Facebook' },
      { src: '/icons/linkedin.svg', label: 'LinkedIn' },
      { src: '/icons/instagram.svg', label: 'Instagram' },
      { src: '/icons/twitter.svg', label: 'Twitter' },
      { src: '/icons/pinterest.svg', label: 'Pinterest' },
      { src: '/icons/whatsapp.svg', label: 'WhatsApp' },
    ],
    []
  );

  return (
    <footer className="bg-[#330052] text-white px-6 py-10 sm:px-10 lg:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Présentation */}
        <div>
          <Image
            src="/logo-gold.webp"
            alt="Logo"
            width={144}
            height={40}
            className="w-40 h-auto mb-0"
            loading="lazy"
          />
          <p className="text-[#d9d9d9] text-sm">{dict.description}</p>
          <Link
            href={localizePath('/contact')}
            prefetch={false}
            className="inline-block mt-4 bg-gradient-to-r from-[#330052] to-[#FFD900] text-white rounded-full px-6 py-2 hover:opacity-90"
          >
            {dict.contactUs}
          </Link>
        </div>

        {/* Liens rapides */}
        <div>
          <SectionTitle title={dict.quickLinks} />
          <ul className="space-y-2">
            {dict.links.map(({ slug, label }) => (
              <li key={slug}>
                <Link
                  href={localizePath('/' + slug.toLowerCase().replace(/\s+/g, '-'))}
                  className="flex items-center text-[#d9d9d9] hover:text-[#FBD915]"
                  prefetch={false}
                >
                  <ChevronRight className="w-4 h-4 mr-2" /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <SectionTitle title={dict.ourServices} />
          <ul className="space-y-2">
            {dict.services.map((s) => (
              <li key={s.slug} className="flex items-center text-[#d9d9d9]">
                <ChevronRight className="w-4 h-4 mr-2" />
                <ServiceLink
                  serviceTitle={s.slug}
                  locale={locale}
                  className="text-[#d9d9d9] hover:text-[#FBD915]"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <SectionTitle title={dict.contactTitle} />
          <ul className="space-y-4">
            {contact.map(({ icon, text }, i) => (
              <li key={i} className="flex items-start text-[#d9d9d9]">
                <span aria-hidden="true">{icon}</span>
                <span className="ml-2 text-sm">{text}</span>
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
            {socialIcons.map(({ src, label }) => (
              <a key={label} href="#" aria-label={label}>
                <Image
                  src={src}
                  alt={label}
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </a>
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

export default memo(Footer);
