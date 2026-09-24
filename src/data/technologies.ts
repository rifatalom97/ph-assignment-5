import type { Tech } from "../components/TechCard";

export const technologies: Tech[] = [
  { id: "react", name: "React", category: "Frontend", level: "Beginner-Friendly", rating: 4.9, badge: "Popular", badgeStyle: "bg-sky-50 text-sky-600", icon: "⚛", color: "bg-sky-50 text-sky-500",
    description: "A declarative, component-based JavaScript library for building modern user interfaces." },
  { id: "vue", name: "Vue.js", category: "Frontend", level: "Beginner-Friendly", rating: 4.8, badge: "Versatile", badgeStyle: "bg-emerald-50 text-emerald-600", icon: "V", color: "bg-emerald-50 text-emerald-600",
    description: "An approachable, performant, and versatile framework for building web user interfaces." },
  { id: "svelte", name: "Svelte", category: "Frontend", level: "Intermediate", rating: 4.8, badge: "Fast", badgeStyle: "bg-orange-50 text-orange-600", icon: "S", color: "bg-orange-50 text-orange-600",
    description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead." },
  { id: "nextjs", name: "Next.js", category: "Fullstack", level: "Intermediate", rating: 4.9, badge: "SSR / Edge", badgeStyle: "bg-violet-50 text-violet-600", icon: "N", color: "bg-slate-900 text-white",
    description: "The React framework for full-stack web applications with hybrid static & server rendering." },
  { id: "node", name: "Node.js", category: "Backend", level: "Intermediate", rating: 4.8, badge: "Standard", badgeStyle: "bg-green-50 text-green-600", icon: "⬢", color: "bg-green-50 text-green-600",
    description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine." },
  { id: "postgres", name: "PostgreSQL", category: "Database", level: "Intermediate", rating: 4.9, badge: "Top SQL", badgeStyle: "bg-blue-50 text-blue-600", icon: "🐘", color: "bg-blue-50 text-blue-600",
    description: "A powerful, open-source object-relational database system with proven reliability." },
  { id: "redis", name: "Redis", category: "Database", level: "Intermediate", rating: 4.8, badge: "Cache", badgeStyle: "bg-red-50 text-red-600", icon: "◆", color: "bg-red-50 text-red-600",
    description: "In-memory data structure store, used as a high-speed database, cache, and message broker." },
  { id: "javascript", name: "JavaScript", category: "Language", level: "Beginner-Friendly", rating: 4.9, badge: "Ubiquitous", badgeStyle: "bg-amber-50 text-amber-600", icon: "JS", color: "bg-yellow-300 text-slate-900",
    description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web." },
  { id: "typescript", name: "TypeScript", category: "Language", level: "Intermediate", rating: 4.9, badge: "Essential", badgeStyle: "bg-sky-50 text-sky-600", icon: "TS", color: "bg-blue-600 text-white",
    description: "A strongly typed programming language that builds on JavaScript for robust tooling." },
  { id: "java", name: "Java", category: "Language", level: "Intermediate", rating: 4.6, badge: "Robust", badgeStyle: "bg-sky-50 text-sky-600", icon: "☕", color: "bg-sky-50 text-sky-700",
    description: "A secure, object-oriented programming language designed for portability and scale." },
  { id: "tailwind", name: "Tailwind CSS", category: "Styling", level: "Beginner-Friendly", rating: 4.9, badge: "Modern", badgeStyle: "bg-teal-50 text-teal-600", icon: "≈", color: "bg-cyan-50 text-cyan-500",
    description: "A utility-first CSS framework packed with classes that can be composed to build custom UI." },
  { id: "docker", name: "Docker", category: "DevOps", level: "Intermediate", rating: 4.9, badge: "Containers", badgeStyle: "bg-sky-50 text-sky-600", icon: "🐳", color: "bg-sky-50 text-sky-600",
    description: "A platform designed to build, share, and run containerized applications reliably." },
];

export default technologies;