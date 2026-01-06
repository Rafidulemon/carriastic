import type { ElementType } from "react";
import {
  FiBriefcase,
  FiBox,
  FiCompass,
  FiCpu,
  FiHeart,
  FiLayers,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";

export type ServiceCardData = {
  title: string;
  description: string;
  icon: ElementType;
  cardClass: string;
  glowClass: string;
  path?: string;
};

export type ServiceStyle = Omit<ServiceCardData, "title" | "description">;

export const serviceStyles: ServiceStyle[] = [
  {
    icon: FiLayers,
    cardClass:
      "bg-gradient-to-br from-[#1b0a2a] via-[#4c1d95] to-[#2e1065] shadow-[0_18px_40px_rgba(88,28,135,0.4)]",
    glowClass: "bg-[#a855f7]",
    path: "/"
  },
  {
    icon: FiCpu,
    cardClass:
      "bg-gradient-to-br from-[#071a2f] via-[#1d4ed8] to-[#1e3a8a] shadow-[0_18px_40px_rgba(29,78,216,0.36)]",
    glowClass: "bg-[#38bdf8]",
    path: "/"
  },
  {
    icon: FiHeart,

    cardClass:
      "bg-gradient-to-br from-[#052e2b] via-[#0f766e] to-[#134e4a] shadow-[0_18px_40px_rgba(20,184,166,0.36)]",
    glowClass: "bg-[#2dd4bf]",
    path: "/"
  },
  {
    icon: FiBriefcase,
    cardClass:
      "bg-gradient-to-br from-[#2a0a12] via-[#9f1239] to-[#4c0519] shadow-[0_18px_40px_rgba(190,24,93,0.36)]",
    glowClass: "bg-[#fb7185]",
    path: "/"
  },
  {
    icon: FiCompass,
    cardClass:
      "bg-gradient-to-br from-[#2a1607] via-[#b45309] to-[#7c2d12] shadow-[0_18px_40px_rgba(234,88,12,0.36)]",
    glowClass: "bg-[#fbbf24]",
    path: "/"
  },
  {
    icon: FiBox,
    cardClass:
      "bg-gradient-to-br from-[#0b2e1a] via-[#15803d] to-[#14532d] shadow-[0_18px_40px_rgba(34,197,94,0.36)]",
    glowClass: "bg-[#4ade80]",
    path: "/"
  },
  {
    icon: FiTrendingUp,
    cardClass:
      "bg-gradient-to-br from-[#062533] via-[#0e7490] to-[#083344] shadow-[0_18px_40px_rgba(14,116,144,0.36)]",
    glowClass: "bg-[#22d3ee]",
    path: "/"
  },
  {
    icon: FiTool,
    cardClass:
      "bg-gradient-to-br from-[#0b0f1f] via-[#1f2937] to-[#111827] shadow-[0_18px_40px_rgba(148,163,184,0.32)]",
    glowClass: "bg-[#a3e635]",
    path: "/"
  },
];