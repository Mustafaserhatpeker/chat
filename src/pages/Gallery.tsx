import { useNavigate } from "react-router-dom"
import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const gradients = [
    "from-violet-600 to-violet-700",
    "from-blue-600 to-indigo-600",
    "from-slate-800 to-indigo-900",
    "from-pink-500 to-rose-400",
    "from-amber-400 to-orange-400",
    "from-sky-500 to-cyan-400",
    "from-emerald-500 to-teal-400",
    "from-gray-900 to-purple-900",
    "from-violet-600 to-fuchsia-500",
    "from-indigo-900 to-purple-900",
]

const widgets = Array.from({ length: 30 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0")

    return {
        id: `widget-${number}`,
        label: `BestWidget ${number}`,
        gradient: gradients[index % gradients.length],
    }
})

const miniPreviewVariants: Variants = {
    rest: { opacity: 0, y: 8, scale: 0.95 },
    hover: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.22, ease: "easeOut" },
    },
}

const miniIconVariants: Variants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
        scale: [1, 1.08, 1],
        rotate: [0, -8, 8, 0],
        transition: { duration: 1.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    },
}

const shimmerVariants: Variants = {
    rest: { x: "-120%" },
    hover: {
        x: ["-120%", "240%"],
        transition: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    },
}

export default function Gallery() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-linear-to-b dark:from-zinc-950 dark:to-zinc-900 px-10 py-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-2">Sohbet Widget Galerisi</h1>
            <p className="text-gray-500 dark:text-zinc-400 text-sm mb-10">Canlı önizleme için bir widget seçin.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {widgets.map(({ id, label, gradient }) => (
                    <motion.div
                        key={id}
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                        whileTap={{ scale: 0.99 }}
                        onClick={() => navigate(`/preview/${id}`)}
                        className="cursor-pointer group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-zinc-950/70 transition"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-48 bg-gray-100 dark:bg-zinc-800/70 overflow-hidden">
                            <div className="absolute inset-0 p-5">
                                <div className="h-full w-full rounded-2xl border border-white/60 dark:border-zinc-600 bg-white/40 dark:bg-zinc-900/55 p-4 backdrop-blur-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold text-gray-700 dark:text-zinc-200">{label}</p>
                                            <p className="text-[11px] text-gray-500 dark:text-zinc-400">Canlı sohbet önizlemesi</p>
                                        </div>
                                        <div className={`h-10 w-10 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center text-white shadow-sm`}>
                                            <MessageCircle size={16} />
                                        </div>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <div className="h-2 w-3/4 rounded bg-gray-200 dark:bg-zinc-600/80" />
                                        <div className="h-2 w-1/2 rounded bg-gray-200 dark:bg-zinc-600/80" />
                                        <div className="h-2 w-2/3 rounded bg-gray-200 dark:bg-zinc-600/80" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover mini preview */}
                            <motion.div
                                variants={miniPreviewVariants}
                                className="pointer-events-none absolute right-3 bottom-3"
                            >
                                <div className="w-36 rounded-xl border border-gray-200/90 dark:border-zinc-600 bg-white/95 dark:bg-zinc-900/95 p-2 shadow-xl">
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            variants={miniIconVariants}
                                            className={`h-7 w-7 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center text-white shadow-sm`}
                                        >
                                            <MessageCircle size={12} />
                                        </motion.div>
                                        <p className="text-[10px] text-gray-500 dark:text-zinc-400">Mini önizleme</p>
                                    </div>
                                    <div className="relative mt-2 h-7 rounded-lg bg-gray-100 dark:bg-zinc-800 overflow-hidden">
                                        <div className="absolute left-2 top-2 h-3 w-20 rounded-full bg-white dark:bg-zinc-600" />
                                        <motion.div
                                            variants={shimmerVariants}
                                            className="absolute inset-y-0 w-1/3 bg-white/80 dark:bg-zinc-300/30 blur-sm"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Label */}
                        <div className="px-4 py-3 border-t border-gray-200 dark:border-zinc-700">
                            <p className="text-sm font-medium text-gray-800 dark:text-zinc-100">{label}</p>
                            <p className="text-xs text-gray-500 dark:text-zinc-400">Önizleme için tıklayın</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}