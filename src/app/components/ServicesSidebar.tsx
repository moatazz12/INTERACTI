'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { name: "Marketing Numérique", slug: "marketing-numerique" },
  { name: "SEO", slug: "seo" },
  { name: "Développement Web", slug: "developpement-web" },
  { name: "Design Graphique", slug: "design-graphique" },
];

export default function ServicesSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3 w-60 bg-white p-6 rounded-xl shadow">
      <h3 className="font-bold text-lg text-[#330052]">Tous les services</h3>
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className={`block py-2 px-4 rounded-lg font-medium ${
            pathname === `/services/${service.slug}`
              ? "bg-[#330052] text-white"
              : "text-[#330052] hover:bg-yellow-300"
          }`}
        >
          {service.name}
        </Link>
      ))}
    </div>
  );
}
