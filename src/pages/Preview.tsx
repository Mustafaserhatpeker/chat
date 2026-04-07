import { useParams, useNavigate } from "react-router-dom"
import FakeWebsite from "@/components/FakeWebsite"
import Widget01 from "@/widgets/Widget01"
import { ArrowLeft } from "lucide-react"

const widgetMap: Record<string, React.ComponentType> = {
    "widget-01": Widget01,
}

export default function Preview() {
    const { id } = useParams()
    const navigate = useNavigate()
    const Widget = id ? widgetMap[id] : null

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Back Button */}
            <button
                onClick={() => navigate("/")}
                className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-white border shadow-sm px-3 py-2 rounded-full text-sm hover:bg-gray-50 transition"
            >
                <ArrowLeft size={15} />
                Back
            </button>

            {/* Fake Website */}
            <FakeWebsite />

            {/* Widget */}
            {Widget && <Widget />}
        </div>
    )
}