export default function TechCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="h-9 w-9 rounded-lg bg-slate-200" />
        <div className="h-5 w-16 rounded-full bg-slate-200" />
      </div>

      <div className="mt-4 h-5 w-1/2 rounded bg-slate-200" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-4/5 rounded bg-slate-100" />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="h-5 w-16 rounded bg-slate-100" />
        <div className="h-4 w-20 rounded bg-slate-100" />
        <div className="h-4 w-10 rounded bg-slate-100" />
      </div>

      <div className="mt-4 h-10 w-full rounded-lg bg-slate-200" />
    </div>
  );
}

export function TechGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
      role="status"
      aria-label="Loading technologies"
    >
      {Array.from({ length: count }).map((_, i) => (
        <TechCardSkeleton key={i} />
      ))}
    </div>
  );
}