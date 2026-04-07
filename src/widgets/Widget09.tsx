import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Mic } from "lucide-react"
import Lottie from "lottie-react"
import waveAnimation from "../assets/lotties/ai_assistant_animation.json"
import { useGreeting } from "../hooks/useGreeting"
import { useProactiveMessage } from "../hooks/useProactiveMessage"

export default function Widget09() {
    const [open, setOpen] = useState(false)
    const greeting = useGreeting()
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(3500)

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

            <AnimatePresence>
                {!open && proactiveVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative bg-white rounded-2xl rounded-br-sm shadow-xl border border-violet-100 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm font-semibold text-gray-800">🎙️ Dinliyorum...</p>
                        <p className="text-xs text-gray-400 mt-1">{greeting} Bana her şeyi sorabilirsiniz!</p>
                        <button
                            onClick={dismiss}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center hover:bg-violet-200 transition"
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
                        className="w-80 rounded-2xl shadow-2xl overflow-hidden bg-white border border-violet-100"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-violet-600 to-fuchsia-500 px-4 py-2 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-16 -my-2">
                                    <Lottie animationData={waveAnimation} loop autoplay />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Wave AI</p>
                                    <p className="text-violet-200 text-xs">🎙️ Ses destekli asistan</p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-violet-50 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-6 h-6 rounded-full bg-violet-500 shrink-0" />
                                <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 text-sm shadow-sm max-w-56">
                                    {greeting} Ben Wave 🎵 Yazabilir ya da konuşabilirsiniz; sizi dinliyorum!
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t bg-white flex items-center gap-2">
                            <button className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-500 hover:bg-violet-200 transition">
                                <Mic size={14} />
                            </button>
                            <input
                                className="flex-1 text-sm outline-none px-3 py-2 rounded-full bg-violet-50 placeholder:text-violet-300"
                                placeholder="Yazın veya konuşun..."
                            />
                            <button className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 transition">
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger — ses dalgası animasyonu */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setOpen(!open); dismiss() }}
                className="w-16 h-16 bg-linear-to-br from-violet-600 to-fuchsia-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
            >
                <div className="w-14 h-14 scale-110">
                    <Lottie animationData={waveAnimation} loop autoplay />
                </div>
            </motion.button>
        </div>
    )
}