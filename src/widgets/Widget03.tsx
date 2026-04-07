import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
import Lottie from "lottie-react"
import astronautAnimation from "../assets/lotties/astronaut_illustration.json"
import { useMousePosition } from "../hooks/useMousePosition"
import { useProactiveMessage } from "../hooks/useProactiveMessage"

export default function Widget03() {
    const [open, setOpen] = useState(false)
    const mouse = useMousePosition()
    const buttonRef = useRef<HTMLDivElement>(null)
    const { visible: proactiveVisible, dismiss } = useProactiveMessage(4000)

    // Butona göre fare açısını hesapla
    const getRotation = () => {
        if (!buttonRef.current) return 0
        const rect = buttonRef.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const angle = Math.atan2(mouse.y - cy, mouse.x - cx) * (180 / Math.PI)
        return angle
    }

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
            <AnimatePresence>
                {!open && proactiveVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="relative bg-white rounded-2xl rounded-br-sm shadow-xl border border-gray-100 px-4 py-3 max-w-52"
                    >
                        <p className="text-sm font-semibold text-gray-800">Houston, bir soru var! 🚀</p>
                        <p className="text-xs text-gray-400 mt-1">Bir konuda yardımcı olabilir miyim?</p>
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
                        className="w-80 rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-slate-900 to-indigo-900 px-4 py-4 flex items-center justify-between relative overflow-hidden">
                            {/* Yıldızlar */}
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
                                    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                                />
                            ))}
                            <div className="flex items-center gap-3 z-10">
                                <div className="w-10 h-10">
                                    <Lottie animationData={astronautAnimation} loop autoplay />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Uzay Destek</p>
                                    <p className="text-indigo-300 text-xs">Hep yörüngede, yakındayım 🛸</p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition z-10">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-gray-50 min-h-36">
                            <div className="flex gap-2 items-end">
                                <div className="w-6 h-6 rounded-full bg-indigo-900 shrink-0" />
                                <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 text-sm shadow-sm max-w-56">
                                    Houston, destek ekibi hazır! Nasıl yardımcı olabilirim? 🌍
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t bg-white flex items-center gap-2">
                            <input
                                className="flex-1 text-sm outline-none px-3 py-2 rounded-full bg-gray-100 placeholder:text-gray-400"
                                placeholder="Mesaj gönderin..."
                            />
                            <button className="w-8 h-8 bg-indigo-900 rounded-full flex items-center justify-center text-white hover:bg-indigo-800 transition">
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger — fareyi takip eden astronot */}
            <div ref={buttonRef}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ rotate: open ? 0 : getRotation() }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onClick={() => { setOpen(!open); dismiss() }}
                    className="w-16 h-16 bg-linear-to-br from-slate-900 to-indigo-900 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                >
                    <div className="w-14 h-14 scale-110">
                        <Lottie animationData={astronautAnimation} loop autoplay />
                    </div>
                </motion.button>
            </div>
        </div>
    )
}