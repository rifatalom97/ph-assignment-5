import { use } from "react";
import TechCard, { type Tech } from "./TechCard";
import type { Stack } from "./StackPanel";

// Created once at module level so every render reads the same promise.
const technologiesPromise: Promise<Tech[]> = import("../data/technologies.json").then(
  (m): Tech[] => m.default
);

interface TechGridProps {
  stack: Stack;
  onAdd: (tech: Tech) => void;
}

export default function TechGrid({ stack, onAdd }: TechGridProps) {
  const technologies = use(technologiesPromise);

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((t) => (
        <TechCard
          key={t.id}
          tech={t}
          selected={Boolean(stack[t.id])}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}