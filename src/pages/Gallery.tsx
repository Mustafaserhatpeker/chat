import { useNavigate } from "react-router-dom"
import Widget01 from "@/widgets/Widget01"

const widgets = [
    { id: "widget-01", label: "Widget 01", component: Widget01 },
]

export default function Gallery() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 px-10 py-12">
            <h1 className="text-2xl font-bold mb-2">Chat Widget Gallery</h1>
            <p className="text-gray-400 text-sm mb-10">Click any widget to preview it live.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {widgets.map(({ id, label, component: Widget }) => (
                    <div
                        key={id}
                        onClick={() => navigate(`/preview/${id}`)}
                        className="cursor-pointer group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-48 bg-gray-100 overflow-hidden">
                            <div
                                className="absolute origin-bottom-right"
                                style={{ transform: "scale(0.45)", bottom: 16, right: 16 }}
                            >
                                <Widget />
                            </div>
                        </div>

                        {/* Label */}
                        <div className="px-4 py-3 border-t">
                            <p className="text-sm font-medium">{label}</p>
                            <p className="text-xs text-gray-400">Click to preview</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}