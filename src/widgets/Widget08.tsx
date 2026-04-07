import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot } from "lucide-react"
import Lottie from "lottie-react"
import roboticAnimation from "../assets/lotties/robotic.json"
import { useProactiveMessage } from "../hooks/useProactiveMessage"

export default function Widget08() {
    const [open, setOpen] = useState(false)
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(3000)

    return (
        <div className="fixed bottom-14 right-6 flex flex-col items-end gap-3 z-50">

            <AnimatePresence>
                {!open && proactiveVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="relative bg-gray-900 rounded-2xl rounded-br-sm shadow-2xl border border-purple-800 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm font-semibold text-purple-300">Sistem çevrim içi... 🔮</p>
                        <p className="text-xs text-gray-500 dark:text-zinc-300 mt-1">Komutunuzu bekliyorum.</p>
                        <button
                            onClick={dismiss}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-purple-900 rounded-full flex items-center justify-center hover:bg-purple-800 transition"
                        >
                            <X size={10} className="text-purple-300" />
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
                        className="w-[19rem] rounded-2xl shadow-2xl overflow-hidden bg-gray-900 border border-purple-800"
                    >
                        {/* Header */}
                        <div className="relative px-4 py-4 flex items-center justify-between overflow-hidden bg-gray-950">
                            <div className="flex items-center gap-3 z-10">
                                <div className="w-10 h-10">
                                    <Lottie animationData={roboticAnimation} loop autoplay />
                                </div>
                                <div>
                                    <p className="text-purple-300 font-bold text-sm">UNIT-X</p>
                                    <p className="text-purple-600 text-xs">🔴 Sistem etkin</p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-purple-600 hover:text-purple-300 transition z-10">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-gray-900 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-800 border border-purple-700 shrink-0">
                                    <div className="w-full h-full flex items-center justify-center text-purple-300">
                                        <Bot size={14} />
                                    </div>
                                </div>
                                <div className="bg-gray-800 border border-purple-900 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-purple-200 shadow-sm max-w-56">
                                    Destek süreci başlatılıyor... Nasıl yardımcı olabilirim? 🤖
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t border-gray-800 bg-gray-950 flex items-center gap-2">
                            <input
                                className="flex-1 text-sm outline-none px-3 py-2 rounded-full bg-gray-800 text-purple-200 placeholder:text-gray-600"
                                placeholder="Komut girin..."
                            />
                            <button className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition">
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
                className="w-[5.5rem] h-[5.5rem] rounded-full flex items-center justify-center"
            >
                <div className="w-[4.5rem] h-[4.5rem] scale-[1.2] drop-shadow-xl">
                    <Lottie animationData={roboticAnimation} loop autoplay />
                </div>
            </motion.button>
        </div>
    )
}