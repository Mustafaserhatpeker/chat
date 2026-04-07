import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot } from "lucide-react"
import Lottie from "lottie-react"
import qntmAnimation from "../assets/lotties/qntm.json"
import { useGreeting } from "../hooks/useGreeting"
import { useProactiveMessage } from "../hooks/useProactiveMessage"

export default function Widget07() {
    const [open, setOpen] = useState(false)
    const greeting = useGreeting()
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(4500)

    return (
        <>
            {/* Widget sağ altta duruyor */}
            <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

                <AnimatePresence>
                    {!open && proactiveVisible && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="relative bg-white dark:bg-zinc-900 rounded-2xl rounded-br-sm shadow-xl border border-emerald-100 dark:border-zinc-700 px-4 py-3 max-w-52"
                        >
                            <p className="text-sm font-semibold text-gray-800 dark:text-zinc-100">Hey, buradayım! 👉</p>
                            <p className="text-xs text-gray-400 dark:text-zinc-400 mt-1">{greeting} Yardım ister misiniz?</p>
                            <button
                                onClick={dismiss}
                                className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition"
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
                            className="w-80 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-700"
                        >
                            {/* Header */}
                            <div className="bg-linear-to-r from-emerald-500 to-teal-400 px-4 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10">
                                        <Lottie animationData={qntmAnimation} loop autoplay />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Qbit</p>
                                        <p className="text-emerald-100 text-xs">Canlı destek hazır</p>
                                    </div>
                                </div>
                                <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="px-4 py-4 flex flex-col gap-3 bg-emerald-50 dark:bg-zinc-800/70 min-h-36">
                                <div className="flex gap-2 items-end">
                                    <div className="w-7 h-7 rounded-full overflow-hidden bg-emerald-100 dark:bg-zinc-800 border border-emerald-200 dark:border-zinc-700 shrink-0">
                                        <div className="w-full h-full flex items-center justify-center text-emerald-600 dark:text-emerald-300">
                                            <Bot size={14} />
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-900 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-gray-800 dark:text-zinc-100 shadow-sm max-w-56">
                                        {greeting} Ben Qbit! Sağ taraftan yardıma geldim 🤖
                                    </div>
                                </div>
                            </div>

                            {/* Input */}
                            <div className="px-3 py-3 border-t border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center gap-2">
                                <button className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition">
                                    <Send size={14} />
                                </button>
                                <input
                                    className="flex-1 text-sm text-gray-800 dark:text-zinc-100 outline-none px-3 py-2 rounded-full bg-emerald-50 dark:bg-zinc-800/70 placeholder:text-emerald-300 dark:placeholder:text-zinc-500"
                                    placeholder="Mesajınızı yazın..."
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Trigger */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ x: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    onClick={() => { setOpen(!open); dismiss() }}
                    className="w-28 h-28 flex items-center justify-center"
                >
                    <div className="w-24 h-24 scale-[1.35] drop-shadow-xl">
                        <Lottie animationData={qntmAnimation} loop autoplay />
                    </div>
                </motion.button>
            </div>
        </>
    )
}