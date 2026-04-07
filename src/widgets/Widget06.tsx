import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, Bot } from "lucide-react"
import Lottie from "lottie-react"
import liveChatbotAnimation from "../assets/lotties/live_chatbot.json"
import { useGreeting } from "../hooks/useGreeting"
import { useProactiveMessage } from "../hooks/useProactiveMessage"

const thoughts = [
    "Yardıma ihtiyacınız var mı? 🤔",
    "Bana her şeyi sorabilirsiniz! ✨",
    "Düşünüyorum... 💭",
    "Hadi sohbet edelim! 🗨️",
]

export default function Widget06() {
    const [open, setOpen] = useState(false)
    const greeting = useGreeting()
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(3500)
    const [thoughtIndex] = useState(() => Math.floor(Math.random() * thoughts.length))

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

            {/* Düşünce baloncukları */}
            <AnimatePresence>
                {!open && proactiveVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative"
                    >
                        {/* Ana balon */}
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl rounded-br-sm shadow-xl border border-sky-100 dark:border-zinc-700 px-4 py-3 max-w-52">
                            <p className="text-sm font-semibold text-gray-800 dark:text-zinc-100">{thoughts[thoughtIndex]}</p>
                            <p className="text-xs text-gray-400 dark:text-zinc-400 mt-1">{greeting} Yardım etmek için buradayım!</p>
                            <button
                                onClick={dismiss}
                                className="absolute -top-2 -right-2 w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center hover:bg-sky-200 transition"
                            >
                                <X size={10} />
                            </button>
                        </div>
                        {/* Küçük baloncuklar */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -bottom-2 -right-1 w-3 h-3 bg-white dark:bg-zinc-900 border border-sky-100 dark:border-zinc-700 rounded-full shadow-sm"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                            className="absolute -bottom-4 right-2 w-2 h-2 bg-white dark:bg-zinc-900 border border-sky-100 dark:border-zinc-700 rounded-full shadow-sm"
                        />
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
                        <div className="bg-linear-to-r from-sky-500 to-cyan-400 px-4 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10">
                                    <Lottie animationData={liveChatbotAnimation} loop autoplay />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Nova</p>
                                    <p className="text-sky-100 text-xs flex items-center gap-1">
                                        <Sparkles size={10} /> Hep bir adım önde düşünüyorum
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-sky-50 dark:bg-zinc-800/70 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-7 h-7 rounded-full overflow-hidden bg-sky-100 dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 shrink-0">
                                    <div className="w-full h-full flex items-center justify-center text-sky-600 dark:text-sky-300">
                                        <Bot size={14} />
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-gray-800 dark:text-zinc-100 shadow-sm max-w-56">
                                    {greeting} Ben Nova ✨ Size nasıl yardımcı olabileceğimi şimdiden düşünüyorum!
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center gap-2">
                            <input
                                className="flex-1 text-sm text-gray-800 dark:text-zinc-100 outline-none px-3 py-2 rounded-full bg-sky-50 dark:bg-zinc-800/70 placeholder:text-sky-300 dark:placeholder:text-zinc-500"
                                placeholder="Aklınızdan ne geçiyor?"
                            />
                            <button className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition">
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setOpen(!open); dismiss() }}
                className="w-32 h-32 flex items-center justify-center"
            >
                <div className="w-28 h-28 scale-[1.45] drop-shadow-xl">
                    <Lottie animationData={liveChatbotAnimation} loop autoplay />
                </div>
            </motion.button>
        </div>
    )
}