import { useNavigate } from "react-router-dom"
import { MessageCircle } from "lucide-react"

const widgets = [
    { id: "widget-01", label: "Widget 01", gradient: "from-violet-600 to-violet-700" },
    { id: "widget-02", label: "Widget 02", gradient: "from-blue-600 to-indigo-600" },
    { id: "widget-03", label: "Widget 03", gradient: "from-slate-800 to-indigo-900" },
    { id: "widget-04", label: "Widget 04", gradient: "from-pink-500 to-rose-400" },
    { id: "widget-05", label: "Widget 05", gradient: "from-amber-400 to-orange-400" },
    { id: "widget-06", label: "Widget 06", gradient: "from-sky-500 to-cyan-400" },
    { id: "widget-07", label: "Widget 07", gradient: "from-emerald-500 to-teal-400" },
    { id: "widget-08", label: "Widget 08", gradient: "from-gray-900 to-purple-900" },
    { id: "widget-09", label: "Widget 09", gradient: "from-violet-600 to-fuchsia-500" },
    { id: "widget-10", label: "Widget 10", gradient: "from-indigo-900 to-purple-900" },
]

export default function Gallery() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 px-10 py-12">
            <h1 className="text-2xl font-bold mb-2">Sohbet Widget Galerisi</h1>
            <p className="text-gray-400 text-sm mb-10">Canlı önizleme için bir widget seçin.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {widgets.map(({ id, label, gradient }) => (
                    <div
                        key={id}
                        onClick={() => navigate(`/preview/${id}`)}
                        className="cursor-pointer group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-48 bg-gray-100 overflow-hidden">
                            <div className="absolute inset-0 p-5">
                                <div className="h-full w-full rounded-2xl border border-white/60 bg-white/40 p-4 backdrop-blur-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold text-gray-700">{label}</p>
                                            <p className="text-[11px] text-gray-500">Canlı sohbet önizlemesi</p>
                                        </div>
                                        <div className={`h-10 w-10 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center text-white shadow-sm`}>
                                            <MessageCircle size={16} />
                                        </div>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <div className="h-2 w-3/4 rounded bg-gray-200" />
                                        <div className="h-2 w-1/2 rounded bg-gray-200" />
                                        <div className="h-2 w-2/3 rounded bg-gray-200" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Label */}
                        <div className="px-4 py-3 border-t">
                            <p className="text-sm font-medium">{label}</p>
                            <p className="text-xs text-gray-400">Önizleme için tıklayın</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}