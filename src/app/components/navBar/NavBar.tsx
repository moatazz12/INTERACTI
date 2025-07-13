// app/components/NavBar.tsx

import Image from 'next/image';
import Link from 'next/link';
import ClientNav from './ClientNav';

const NavBar = ({ activeUnderline }: { activeUnderline?: string }) => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between max-w-8xl mx-auto relative z-50 h-[100px]">
      {/* Logo côté serveur */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={180}
          height={90}
          className="object-contain max-h-16 md:max-h-20 lg:max-h-24 w-auto"
          priority
        />
      </Link>

      {/* Client-only navigation */}
      <ClientNav activeUnderline={activeUnderline} />
    </header>
  );
};

export default NavBar;
