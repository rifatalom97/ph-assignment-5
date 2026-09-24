
const cols = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 text-center sm:px-6 md:grid-cols-5 md:text-left lg:px-8">
        
        <div className="md:col-span-2">
          <div className="flex justify-center md:justify-start">
            <a href="#home" className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[11px] font-extrabold text-white">
                    DS
                </span>
                <span className="text-lg font-bold">
                    Dev <span className="text-fuchsia-600">Stack</span>
                </span>
            </a>
          </div>
          <p className="mx-auto mt-3 max-w-xs text-sm text-slate-500 md:mx-0">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm font-semibold md:justify-start">
            {["GitHub", "Twitter", "LinkedIn"].map((s) => <a key={s} href="#" className="hover:text-fuchsia-600">{s}</a>)}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-xs font-bold tracking-wider uppercase">{c.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
              {c.links.map((l) => <li key={l}><a href="#" className="hover:text-slate-900">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-slate-100 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
        <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  );
}