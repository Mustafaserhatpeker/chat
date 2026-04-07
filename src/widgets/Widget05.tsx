import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Zap, Bot } from "lucide-react"
import Lottie from "lottie-react"
import robotAnimation from "../assets/lotties/little_power_robot.json"
import { useIdleDetector } from "../hooks/useIdleDetector"
import { useProactiveMessage } from "../hooks/useProactiveMessage"

export default function Widget05() {
    const [open, setOpen] = useState(false)
    const idle = useIdleDetector(5000)
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(4000)

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

            <AnimatePresence>
                {!open && idle && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-white dark:bg-zinc-900 rounded-2xl rounded-br-sm shadow-xl border border-gray-100 dark:border-zinc-700 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm text-gray-500 dark:text-zinc-300">💤 Zzz... Aa, hâlâ buradasınız!</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!open && proactiveVisible && !idle && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative bg-white dark:bg-zinc-900 rounded-2xl rounded-br-sm shadow-xl border border-amber-100 dark:border-zinc-700 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm font-semibold text-gray-800 dark:text-zinc-100">⚡ Güçleniyorum!</p>
                        <p className="text-xs text-gray-400 dark:text-zinc-400 mt-1">Şarjım tam, yardıma hazırım!</p>
                        <button
                            onClick={dismiss}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition"
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
                        className="w-80 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-amber-100 dark:border-zinc-700"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-amber-400 to-orange-400 px-4 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10">
                                    <Lottie animationData={robotAnimation} loop autoplay />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Bolt</p>
                                    <p className="text-amber-100 text-xs flex items-center gap-1">
                                        <Zap size={10} /> Tam şarj ve hazırım!
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-amber-50 dark:bg-zinc-800/70 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-7 h-7 rounded-full overflow-hidden bg-amber-100 dark:bg-zinc-800 border border-amber-200 dark:border-zinc-700 shrink-0">
                                    <div className="w-full h-full flex items-center justify-center text-amber-600 dark:text-amber-300">
                                        <Bot size={14} />
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-gray-800 dark:text-zinc-100 shadow-sm max-w-56">
                                    ⚡ Tam güçteyim ve hazırım! Sizin için ne yapabilirim?
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center gap-2">
                            <input
                                className="flex-1 text-sm text-gray-800 dark:text-zinc-100 outline-none px-3 py-2 rounded-full bg-amber-50 dark:bg-zinc-800/70 placeholder:text-amber-300 dark:placeholder:text-zinc-500"
                                placeholder="Bana bir şey sorun..."
                            />
                            <button className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition">
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger — idle'da uyuklama animasyonu */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={idle
                    ? { y: [0, -4, 0], transition: { repeat: Infinity, duration: 2 } }
                    : { y: 0 }
                }
                onClick={() => { setOpen(!open); dismiss() }}
                className="w-24 h-24 flex items-center justify-center"
            >
                <div className="w-24 h-24 rounded-full bg-white border border-zinc-200 shadow-xl flex items-center justify-center">
                    <div className="w-20 h-20 scale-125 drop-shadow-xl">
                        <Lottie animationData={robotAnimation} loop={!idle} autoplay />
                    </div>
                </div>
            </motion.button>
        </div>
    )
}