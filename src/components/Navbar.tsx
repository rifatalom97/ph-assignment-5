import { useState } from "react";
import toast from "react-hot-toast";

import { Menu, X } from "lucide-react";

const links = ["Home", "Technologies", "Projects", "About", "Contact"];


export default function Navbar(){
    const [open,setOpen] = useState<boolean>(false);
    const [active,setActive] = useState<string>("Home");

    const go = (linkItem:string)=>{
        setOpen(true);
        setActive(linkItem)
    }

    return(
        <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#home" className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[11px] font-extrabold text-white">
                        DS
                    </span>
                    <span className="text-lg font-bold">
                        Dev <span className="text-fuchsia-600">Stack</span>
                    </span>
                </a>

                <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
                    {links.map((linkItem) => (
                        <li key={linkItem}>
                            <a href={`#${linkItem.toLowerCase()}`} onClick={() => go(linkItem)} className={active===linkItem? "text-fuchsia-600" : "text-slate-700 hover:text-fuchsia-600"}>
                                {linkItem}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-4 md:flex">
                    <button onClick={() => toast("This will go sign in", { icon: "🔐" })}
                        className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign In</button>
                    <button onClick={() => toast.success("This will go sign up")}
                        className="rounded-full bg-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700">
                        Sign Up
                    </button>
                </div>

                <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {open && (
                <div className="border-t border-slate-100 bg-white px-4 pb-4 md:hidden">
                    {links.map((linkItem) => (
                        <a key={linkItem} href={`#${linkItem.toLowerCase()}`} onClick={() => go(linkItem)}
                        className={`block py-2.5 text-sm font-medium ${active === linkItem ? "text-fuchsia-600" : "text-slate-700"}`}>
                        {linkItem}
                        </a>
                    ))}
                    <div className="mt-2 flex gap-3">
                        <button onClick={() => toast("This will go sign in", { icon: "🔐" })}
                        className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign In</button>
                        <button onClick={() => toast.success("This will go sign up")}
                            className="rounded-full bg-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}

        </header>
    )
}