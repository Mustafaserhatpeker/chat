import { useParams, useNavigate } from "react-router-dom"
import FakeWebsite from "@/components/FakeWebsite"
import Widget01 from "@/widgets/Widget01"
import Widget02 from "@/widgets/Widget02"
import { ArrowLeft } from "lucide-react"
import Widget03 from "@/widgets/Widget03"
import Widget04 from "@/widgets/Widget04"
import Widget05 from "@/widgets/Widget05"
import Widget06 from "@/widgets/Widget06"
import Widget07 from "@/widgets/Widget07"
import Widget08 from "@/widgets/Widget08"
import Widget09 from "@/widgets/Widget09"
import Widget10 from "@/widgets/Widget10"

const widgetMap: Record<string, React.ComponentType> = {
    "widget-01": Widget01,
    "widget-02": Widget02,
    "widget-03": Widget03,
    "widget-04": Widget04,
    "widget-05": Widget05,
    "widget-06": Widget06,
    "widget-07": Widget07,
    "widget-08": Widget08,
    "widget-09": Widget09,
    "widget-10": Widget10,

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
                Geri
            </button>

            {/* Fake Website */}
            <FakeWebsite />

            {/* Widget */}
            {Widget && <Widget />}
        </div>
    )
}