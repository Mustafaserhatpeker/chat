import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot } from "lucide-react"
import Lottie from "lottie-react"
import chatbotAnimation from "../assets/lotties/chatbot.json"
import { useGreeting } from "../hooks/useGreeting"
import { useIdleDetector } from "../hooks/useIdleDetector"
import { useProactiveMessage } from "../hooks/useProactiveMessage"

export default function Widget04() {
    const [open, setOpen] = useState(false)
    const greeting = useGreeting()
    const idle = useIdleDetector(5000)
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(5000)

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

            <AnimatePresence>
                {!open && proactiveVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="relative bg-white dark:bg-zinc-900 rounded-2xl rounded-br-sm shadow-xl border border-sky-100 dark:border-zinc-700 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm font-semibold text-gray-800 dark:text-zinc-100">Teknik destek çevrim içi</p>
                        <p className="text-xs text-gray-400 dark:text-zinc-400 mt-1">Sorularınızı yanıtlamak için hazırım.</p>
                        <button
                            onClick={dismiss}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center hover:bg-sky-200 transition"
                        >
                            <X size={10} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Idle mesajı */}
            <AnimatePresence>
                {!open && idle && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="bg-white dark:bg-zinc-900 rounded-2xl rounded-br-sm shadow-xl border border-sky-100 dark:border-zinc-700 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm text-gray-500 dark:text-zinc-300">Bir sorunuz olursa yardımcı olmaya hazırım.</p>
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
                        className="w-80 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-sky-100 dark:border-zinc-700"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-slate-800 to-sky-700 px-4 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10">
                                    <Lottie animationData={chatbotAnimation} loop autoplay />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Acme Teknik Destek</p>
                                    <p className="text-sky-100 text-xs">{greeting}. Size yardımcı olmaya hazırım.</p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-slate-50 dark:bg-zinc-800/70 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-7 h-7 rounded-full overflow-hidden bg-sky-100 dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 shrink-0">
                                    <div className="w-full h-full flex items-center justify-center text-sky-700 dark:text-sky-300">
                                        <Bot size={14} />
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-gray-800 dark:text-zinc-100 shadow-sm max-w-56">
                                    {greeting}. Altyapı, entegrasyon veya ürünle ilgili sorularınızı yanıtlayabilirim.
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center gap-2">
                            <input
                                className="flex-1 text-sm text-gray-800 dark:text-zinc-100 outline-none px-3 py-2 rounded-full bg-slate-50 dark:bg-zinc-800/70 placeholder:text-slate-400 dark:placeholder:text-zinc-500"
                                placeholder="Mesajınızı yazın..."
                            />
                            <button className="w-8 h-8 bg-sky-700 rounded-full flex items-center justify-center text-white hover:bg-sky-800 transition">
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={idle ? { y: [0, -3, 0] } : { y: 0 }}
                transition={idle ? { repeat: Infinity, duration: 1.6, ease: "easeInOut" } : { duration: 0.2 }}
                onClick={() => { setOpen(!open); dismiss() }}
                className="w-24 h-24 flex items-center justify-center"
            >
                <div className="w-20 h-20 scale-125 drop-shadow-xl">
                    <Lottie animationData={chatbotAnimation} loop autoplay />
                </div>
            </motion.button>
        </div>
    )
}