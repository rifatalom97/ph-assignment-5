import HeroIllustration from "./HeroIllustration";

import toast from "react-hot-toast";

export default function Hero(){

    return(
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:grid-cols-2 md:pt-20 md:pb-24 lg:px-8">
            <div className="text-center md:text-left">
                <h1 className="text-4xl leading-right font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                    Build Your Ideal
                    <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
                        Development&nbsp;Stack
                    </span>
                </h1>
                <p className="mx-auto mt-5 max-w-lg text-base text-slate-600 sm:text-lg md:mx-0">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put
                    together the stack that fits your next project.
                </p>
                <div className="mt-8 flex justify-center gap-3 md:justify-start">
                    <a href="#technologies"
                        className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 hover:opacity-90">
                        Explore Technologies
                    </a>
                    <button onClick={() => toast("Pick one technology per category to build your stack.", { icon: "💡" })}
                        className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex justify-center md:justify-end">
                <HeroIllustration />
            </div>
        </section>
    )
}