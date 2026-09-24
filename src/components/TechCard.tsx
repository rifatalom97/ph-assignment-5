import type { ReactNode } from "react";
import { Star, Check } from "lucide-react";

export interface Tech {
  id?: string | number;
  name: string;
  description: string;
  icon: ReactNode;      // string (e.g. "R") or a component/element
  color: string;        // Tailwind classes for the icon tile
  badge: string;
  badgeStyle: string;   // Tailwind classes for the badge
  category: string;
  level: string;
  rating: number;
}

interface TechCardProps {
  tech: Tech;
  selected: boolean;
  onAdd: (tech: Tech) => void;
}

export default function TechCard({ tech, selected, onAdd }: TechCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <span className={`grid h-9 w-9 place-items-center rounded-lg text-sm font-bold ${tech.color}`}>{tech.icon}</span>
        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tech.badgeStyle}`}>{tech.badge}</span>
      </div>

      <h3 className="mt-4 text-lg font-bold">{tech.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">{tech.description}</p>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-700">{tech.category}</span>
        <span className="text-slate-500">{tech.level}</span>
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        className={`mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-semibold transition ${
          selected
            ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-100"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {selected ? (
          <>
            <Check className="h-4 w-4" /> In Your Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </article>
  );
}