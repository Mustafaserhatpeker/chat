import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
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
                        className="relative bg-white rounded-2xl rounded-br-sm shadow-xl border border-pink-100 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm font-semibold text-gray-800">Psst... merhaba! 👀</p>
                        <p className="text-xs text-gray-400 mt-1">Çekinmeyin, yardımcı olmak için buradayım 😊</p>
                        <button
                            onClick={dismiss}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition"
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
                        className="bg-white rounded-2xl rounded-br-sm shadow-xl border border-pink-100 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm text-gray-500">Hâlâ burada mısınız? 👋 İhtiyacınız olursa buradayım!</p>
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
                        className="w-80 rounded-2xl shadow-2xl overflow-hidden bg-white border border-pink-100"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-pink-500 to-rose-400 px-4 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10">
                                    <Lottie animationData={chatbotAnimation} loop autoplay />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Rosie</p>
                                    <p className="text-pink-100 text-xs">{greeting} 💕</p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-rose-50 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-6 h-6 rounded-full bg-pink-400 shrink-0" />
                                <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 text-sm shadow-sm max-w-56">
                                    {greeting} Ben Rosie 🌸 Gününüzü nasıl güzelleştirebilirim?
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t bg-white flex items-center gap-2">
                            <input
                                className="flex-1 text-sm outline-none px-3 py-2 rounded-full bg-rose-50 placeholder:text-pink-300"
                                placeholder="Bir şey yazın... 💬"
                            />
                            <button className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition">
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
                animate={idle ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
                onClick={() => { setOpen(!open); dismiss() }}
                className="w-16 h-16 bg-linear-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
            >
                <div className="w-14 h-14 scale-110">
                    <Lottie animationData={chatbotAnimation} loop autoplay />
                </div>
            </motion.button>
        </div>
    )
}