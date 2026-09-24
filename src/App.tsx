import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechCard, { type Tech } from "./components/TechCard";
import StackPanel, { type Stack } from "./components/StackPanel";

import { technologies } from "./data/technologies";

function App() {
  // One technology per category: { [category]: tech }
  const [stack, setStack] = useState<Stack>({});

  const handleAdd = (tech: Tech) => {
    const current: Tech | undefined = stack[tech.category];

    if (current?.id === tech.id) {
      toast(`${tech.name} is already in your stack`, { icon: "ℹ️" });
      return;
    }
    setStack((s) => ({ ...s, [tech.category]: tech }));

    if (current) {
      toast.success(`Replaced ${current.name} with ${tech.name} for ${tech.category}`);
    } else {
      toast.success(`${tech.name} added to your stack`);
    }
  };

  const handleRemove = (tech: Tech) => {
    setStack((s) => {
      const next = { ...s };
      delete next[tech.category];
      return next;
    });
    toast(`${tech.name} removed from your stack`, { icon: "🗑️" });
  };

  const handleClear = () => {
    setStack({});
    toast("Stack cleared", { icon: "🧹" });
  };

  const handleSave = () => {
    const names = Object.values(stack).map((t) => t.name).join(" + ");
    toast.success(`Stack saved: ${names}`, { duration: 4000 });
  };

  return (
    <div className="min-h-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          style: { fontFamily: "inherit", fontSize: "14px", borderRadius: "10px" },
          success: { iconTheme: { primary: "#c026d3", secondary: "#fff" } },
        }}
      />

      <Navbar />

      <main>
        <Hero />

        <section id="technologies" className="mx-auto max-w-7xl scroll-mt-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Explore the{" "}
              <span className="bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            
            <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((t) => (
                <TechCard
                  key={t.id}
                  tech={t}
                  selected={stack[t.category]?.id === t.id}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            <StackPanel stack={stack} onRemove={handleRemove} onClear={handleClear} onSave={handleSave} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;