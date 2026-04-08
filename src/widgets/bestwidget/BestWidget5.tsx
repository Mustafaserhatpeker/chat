import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, Bot } from "lucide-react"
import Lottie from "lottie-react"
import orbitAnimation from "../../assets/lotties/best/crimson.json"
import { useGreeting } from "../../hooks/useGreeting"
import { useProactiveMessage } from "../../hooks/useProactiveMessage"

export default function BestWidget5() {
    const [open, setOpen] = useState(false)
    const greeting = useGreeting()
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(4000)

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

            <AnimatePresence>
                {!open && proactiveVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="relative bg-white dark:bg-zinc-900 rounded-2xl rounded-br-sm shadow-xl border border-indigo-100 dark:border-zinc-700 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm font-semibold text-gray-800 dark:text-zinc-100">
                            <Sparkles size={13} className="inline mr-1 text-indigo-400" />
                            Yakın yörüngedeyim...
                        </p>
                        <p className="text-xs text-gray-400 dark:text-zinc-400 mt-1">{greeting} Yörüngenizdeyim 🪐</p>
                        <button
                            onClick={dismiss}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition"
                        >
                            <X size={10} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-80 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-700"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-indigo-900 to-purple-900 px-4 py-2 flex items-center justify-between relative overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                className="absolute -right-8 -top-8 w-24 h-24 opacity-20"
                            >
                                <Lottie animationData={orbitAnimation} loop autoplay />
                            </motion.div>
                            <div className="flex items-center gap-3 z-10">
                                <div className="w-14 h-14 -my-1">
                                    <Lottie animationData={orbitAnimation} loop autoplay />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Orbit</p>
                                    <p className="text-indigo-300 text-xs">🪐 Her zaman evreninizdeyim</p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition z-10">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-indigo-50 dark:bg-zinc-800/70 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-7 h-7 rounded-full overflow-hidden bg-indigo-100 dark:bg-zinc-800 border border-indigo-200 dark:border-zinc-700 shrink-0">
                                    <div className="w-full h-full flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                                        <Bot size={14} />
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-gray-800 dark:text-zinc-100 shadow-sm max-w-56">
                                    {greeting} Ben Orbit 🪐 Size yardımcı olmak için etrafınızda dönüyorum!
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center gap-2">
                            <input
                                className="flex-1 text-sm text-gray-800 dark:text-zinc-100 outline-none px-3 py-2 rounded-full bg-indigo-50 dark:bg-zinc-800/70 placeholder:text-indigo-300 dark:placeholder:text-zinc-500"
                                placeholder="Mesaj gönderin..."
                            />
                            <button className="w-8 h-8 bg-indigo-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-800 transition">
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger — dönen küre */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                onClick={() => { setOpen(!open); dismiss() }}
                className="w-24 h-24 flex items-center justify-center"
            >
                <div className="w-20 h-20 scale-125 drop-shadow-xl">
                    <Lottie animationData={orbitAnimation} loop autoplay />
                </div>
            </motion.button>
        </div>
    )
}