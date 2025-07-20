import { CheckCircle } from "lucide-react";

export default function ServicePricingCard({
  title,
  features,
  price,
  highlight,
}: {
  title: string;
  features: string[];
  price: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-6 border ${
        highlight ? "bg-[#330052] text-white" : "bg-white"
      }`}
    >
      <h4 className="font-bold text-lg mb-4">{title}</h4>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle size={16} className={highlight ? "text-yellow-300" : "text-[#330052]"} />
            {f}
          </li>
        ))}
      </ul>
      <p className="text-2xl font-bold">{price}</p>
    </div>
  );
}
