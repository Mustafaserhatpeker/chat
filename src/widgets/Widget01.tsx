import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

export default function Widget01() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
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
                        <div className="bg-violet-600 px-4 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">A</div>
                                <div>
                                    <p className="text-white text-sm font-semibold">Acme Destek</p>
                                    <p className="text-violet-200 text-xs">Genellikle birkaç dakika içinde yanıtlar</p>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 py-4 flex flex-col gap-3 bg-gray-50 min-h-40">
                            <div className="flex gap-2 items-end">
                                <div className="w-6 h-6 rounded-full bg-violet-600 shrink-0" />
                                <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 text-sm shadow-sm max-w-56">
                                    👋 Merhaba! Bugün size nasıl yardımcı olabiliriz?
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-3 py-3 border-t bg-white flex items-center gap-2">
                            <input
                                className="flex-1 text-sm outline-none px-3 py-2 rounded-full bg-gray-100 placeholder:text-gray-400"
                                placeholder="Bir mesaj yazın..."
                            />
                            <button className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 transition">
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(!open)}
                className="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-violet-700 transition"
            >
                <AnimatePresence mode="wait">
                    {open
                        ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.span>
                        : <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageCircle size={22} /></motion.span>
                    }
                </AnimatePresence>
            </motion.button>
        </div>
    )
}