import { X, Trash2 } from "lucide-react";
import type { Tech } from "./TechCard";

export type Stack = Record<string, Tech>;

interface StackPanelProps {
  stack: Stack;
  onRemove: (tech: Tech) => void;
  onClear: () => void;
  onSave: () => void;
}

export default function StackPanel({ stack, onRemove, onClear, onSave }: StackPanelProps) {
  const items = Object.values(stack);

  return (
    <aside className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Your Stack</h3>
        {items.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-red-500"
          >
            <Trash2 className="h-3.5 w-3.5" /> Clear
          </button>
        )}
      </div>
      
      <p className="mt-1 text-xs text-slate-400">
        {items.length === 0
          ? "No technologies selected yet."
          : `${items.length} ${items.length === 1 ? "technology" : "technologies"} selected`}
      </p>

      {items.length === 0 ? (
        <div className="mt-4 rounded-lg border border-dashed border-slate-200 py-8 text-center text-sm text-slate-400">
          Your stack is empty
        </div>
      ) : (
        <>
          <ul className="mt-4 space-y-2">
            {items.map((t) => (
              <li key={t.id} className="flex items-center gap-3 rounded-lg border border-slate-100 p-2.5">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-md text-xs font-bold ${t.color}`}>
                  {t.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(t)}
                  aria-label={`Remove ${t.name}`}
                  className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onSave}
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Save Stack
          </button>
        </>
      )}
    </aside>
  );
}