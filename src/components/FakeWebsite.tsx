import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function FakeWebsite() {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <div className="w-full h-full overflow-y-auto bg-white text-gray-800 font-sans transition-colors dark:bg-zinc-950 dark:text-zinc-100">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-10 py-4 border-b border-gray-200 dark:border-zinc-800">
                <span className="font-bold text-xl">Acme Inc.</span>
                <div className="flex gap-6 text-sm text-gray-500 dark:text-zinc-400">
                    <span>Product</span>
                    <span>Pricing</span>
                    <span>About</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        className="h-9 w-9 rounded-full border border-gray-200 bg-white text-gray-700 flex items-center justify-center hover:bg-gray-100 transition dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                        aria-label="Tema değiştir"
                    >
                        {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    <button className="text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
                        Get started
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="flex flex-col items-center text-center px-6 py-24 gap-6">
                <h1 className="text-5xl font-bold max-w-2xl leading-tight">The fastest way to build products</h1>
                <p className="text-gray-500 dark:text-zinc-400 max-w-md">Ship faster, collaborate better, and delight your customers with our all-in-one platform.</p>
                <div className="flex gap-3">
                    <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">Start for free</button>
                    <button className="border border-gray-300 px-6 py-3 rounded-full text-sm hover:bg-gray-50 transition dark:border-zinc-700 dark:hover:bg-zinc-900">See demo</button>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="grid grid-cols-3 gap-6 px-16 pb-24">
                {["Analytics", "Automation", "Integrations"].map((f) => (
                    <div key={f} className="border border-gray-200 rounded-2xl p-6 bg-white dark:bg-zinc-900 dark:border-zinc-800">
                        <div className="w-8 h-8 bg-gray-100 dark:bg-zinc-800 rounded-lg mb-4" />
                        <h3 className="font-semibold mb-2">{f}</h3>
                        <p className="text-sm text-gray-400 dark:text-zinc-500">Powerful tools to help your team move faster and smarter every day.</p>
                    </div>
                ))}
            </section>
        </div>
    )
}