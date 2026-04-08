import { useParams, useNavigate } from "react-router-dom"
import type { ComponentType } from "react"
import FakeWebsite from "@/components/FakeWebsite"
import { ArrowLeft } from "lucide-react"
import BestWidget1 from "@/widgets/bestwidget/BestWidget1"
import BestWidget2 from "@/widgets/bestwidget/BestWidget2"
import BestWidget3 from "@/widgets/bestwidget/BestWidget3"
import BestWidget4 from "@/widgets/bestwidget/BestWidget4"
import BestWidget5 from "@/widgets/bestwidget/BestWidget5"
import BestWidget6 from "@/widgets/bestwidget/BestWidget6"
import BestWidget7 from "@/widgets/bestwidget/BestWidget7"
import BestWidget8 from "@/widgets/bestwidget/BestWidget8"
import BestWidget9 from "@/widgets/bestwidget/BestWidget9"
import BestWidget10 from "@/widgets/bestwidget/BestWidget10"
import BestWidget11 from "@/widgets/bestwidget/BestWidget11"
import BestWidget12 from "@/widgets/bestwidget/BestWidget12"
import BestWidget13 from "@/widgets/bestwidget/BestWidget13"
import BestWidget14 from "@/widgets/bestwidget/BestWidget14"
import BestWidget15 from "@/widgets/bestwidget/BestWidget15"
import BestWidget16 from "@/widgets/bestwidget/BestWidget16"
import BestWidget17 from "@/widgets/bestwidget/BestWidget17"
import BestWidget18 from "@/widgets/bestwidget/BestWidget18"
import BestWidget19 from "@/widgets/bestwidget/BestWidget19"
import BestWidget20 from "@/widgets/bestwidget/BestWidget20"
import BestWidget21 from "@/widgets/bestwidget/BestWidget21"
import BestWidget22 from "@/widgets/bestwidget/BestWidget22"
import BestWidget23 from "@/widgets/bestwidget/BestWidget23"
import BestWidget24 from "@/widgets/bestwidget/BestWidget24"
import BestWidget25 from "@/widgets/bestwidget/BestWidget25"
import BestWidget26 from "@/widgets/bestwidget/BestWidget26"
import BestWidget27 from "@/widgets/bestwidget/BestWidget27"
import BestWidget28 from "@/widgets/bestwidget/BestWidget28"
import BestWidget29 from "@/widgets/bestwidget/BestWidget29"
import BestWidget30 from "@/widgets/bestwidget/BestWidget30"

const widgetMap: Record<string, ComponentType> = {
    "widget-01": BestWidget1,
    "widget-02": BestWidget2,
    "widget-03": BestWidget3,
    "widget-04": BestWidget4,
    "widget-05": BestWidget5,
    "widget-06": BestWidget6,
    "widget-07": BestWidget7,
    "widget-08": BestWidget8,
    "widget-09": BestWidget9,
    "widget-10": BestWidget10,
    "widget-11": BestWidget11,
    "widget-12": BestWidget12,
    "widget-13": BestWidget13,
    "widget-14": BestWidget14,
    "widget-15": BestWidget15,
    "widget-16": BestWidget16,
    "widget-17": BestWidget17,
    "widget-18": BestWidget18,
    "widget-19": BestWidget19,
    "widget-20": BestWidget20,
    "widget-21": BestWidget21,
    "widget-22": BestWidget22,
    "widget-23": BestWidget23,
    "widget-24": BestWidget24,
    "widget-25": BestWidget25,
    "widget-26": BestWidget26,
    "widget-27": BestWidget27,
    "widget-28": BestWidget28,
    "widget-29": BestWidget29,
    "widget-30": BestWidget30,
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
                className="absolute top-20 left-6 z-50 flex items-center gap-2 border border-gray-200 dark:border-zinc-700 bg-white/95 dark:bg-zinc-900/95 text-gray-700 dark:text-zinc-100 shadow-sm px-3 py-2 rounded-full text-sm hover:bg-gray-50 dark:hover:bg-zinc-800 transition backdrop-blur"
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