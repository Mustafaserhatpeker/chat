import { BrowserRouter, Routes, Route } from "react-router-dom"
import Gallery from "@/pages/Gallery"
import Preview from "@/pages/Preview"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  )
}