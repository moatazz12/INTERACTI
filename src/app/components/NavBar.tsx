import Image from "next/image";

type NavBarProps = {
  logoSize?: number;
};

export default function NavBar({ logoSize = 140 }: NavBarProps) {
  return (
    <header className="w-full px-6 py-2 flex flex-row items-center max-w-7xl mx-auto relative">
      {/* Logo à gauche, taille configurable */}
      <div className="flex items-center" style={{ minWidth: 130 }}>
        <Image src="/logo.png" alt="INTERACTI Logo" width={130} height={130} className="rounded" />
      </div>
      {/* Navigation centrée */}
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
        <ul className="flex gap-5 md:gap-8 text-sm md:text-base font-medium">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
            { label: "About", href: "/about" },
          ].map((item) => (
            item.label === "About" ? (
              <li key={item.label} className="relative flex items-center">
                <a
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#FBD915] focus:text-[#FBD915] outline-none px-2 md:px-3"
                >
                  {item.label}
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-14 h-3 rounded-full bg-white" />
              </li>
            ) : (
              <li key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#FBD915] focus:text-[#FBD915] outline-none px-2 md:px-3"
                >
                  {item.label}
                </a>
              </li>
            )
          ))}
        </ul>
      </nav>
    </header>
  );
} 