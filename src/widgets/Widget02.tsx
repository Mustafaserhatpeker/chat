import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot } from "lucide-react"
import Lottie from "lottie-react"
import robotAnimation from "../assets/lotties/robot_assistant_online.json"
import { useGreeting } from "../hooks/useGreeting"
import { useProactiveMessage } from "../hooks/useProactiveMessage"

export default function Widget02() {
    const [open, setOpen] = useState(false)
    const greeting = useGreeting()
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(3000)

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
            <AnimatePresence>
                {/* Proaktif mesaj balonu */}
                {!open && proactiveVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="bg-white dark:bg-zinc-900 rounded-2xl rounded-br-sm shadow-xl border border-gray-100 dark:border-zinc-700 px-4 py-3 max-w-56 flex flex-col gap-1"
                    >
                        <p className="text-sm font-semibold text-gray-800 dark:text-zinc-100">{greeting}</p>
                        <p className="text-xs text-gray-400 dark:text-zinc-400">Yardıma mı ihtiyacınız var? Buradayım! 👇</p>
                        <button
                            onClick={dismiss}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
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
                        className="w-80 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-700"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-4 pt-4 pb-6 flex items-end justify-between relative">
                            <div>
                                <p className="text-white font-bold text-base">Acme Asistan</p>
                                <p className="text-blue-200 text-xs">{greeting}</p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white/70 hover:text-white transition mb-1"
                            >
                                <X size={18} />
                            </button>
                            {/* Robot */}
                            <div className="absolute -bottom-8 left-4 w-20 h-20">
                                <Lottie animationData={robotAnimation} loop autoplay />
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="px-4 pt-12 pb-4 flex flex-col gap-3 bg-gray-50 dark:bg-zinc-800/70 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-7 h-7 rounded-full overflow-hidden bg-indigo-100 dark:bg-zinc-800 border border-indigo-200 dark:border-zinc-700 shrink-0">
                                    <div className="w-full h-full flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                                        <Bot size={14} />
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-gray-800 dark:text-zinc-100 shadow-sm max-w-56">
                                    {greeting} Bugün size nasıl yardımcı olabilirim? 🚀
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center gap-2">
                            <input
                                className="flex-1 text-sm text-gray-800 dark:text-zinc-100 outline-none px-3 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                                placeholder="Mesajınızı yazın..."
                            />
                            <button className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition">
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger — robot animasyonu */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setOpen(!open); dismiss() }}
                className="w-24 h-24 flex items-center justify-center"
            >
                <div className="w-20 h-20 scale-125 drop-shadow-xl">
                    <Lottie animationData={robotAnimation} loop autoplay />
                </div>
            </motion.button>
        </div>
    )
}