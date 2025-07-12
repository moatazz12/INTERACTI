"use client";

import dynamic from "next/dynamic";
import { ServiceDict } from "@/lib/dictionaries";

// lazy load DynamicServiceSections uniquement côté client
const DynamicServiceSections = dynamic(() => import("./DynamicServiceSections"), {
  ssr: false,
  loading: () => <div className="text-center py-10">Chargement…</div>,
});

interface Props {
  dict: ServiceDict;
}

export default function ServicePageClientWrapper({ dict }: Props) {
  return <DynamicServiceSections dict={dict} />;
}
