export default function FakeWebsite() {
    return (
        <div className="w-full h-full overflow-y-auto bg-white text-gray-800 font-sans">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-10 py-4 border-b">
                <span className="font-bold text-xl">Acme Inc.</span>
                <div className="flex gap-6 text-sm text-gray-500">
                    <span>Product</span>
                    <span>Pricing</span>
                    <span>About</span>
                </div>
                <button className="text-sm bg-black text-white px-4 py-2 rounded-full">Get started</button>
            </nav>

            {/* Hero */}
            <section className="flex flex-col items-center text-center px-6 py-24 gap-6">
                <h1 className="text-5xl font-bold max-w-2xl leading-tight">The fastest way to build products</h1>
                <p className="text-gray-500 max-w-md">Ship faster, collaborate better, and delight your customers with our all-in-one platform.</p>
                <div className="flex gap-3">
                    <button className="bg-black text-white px-6 py-3 rounded-full text-sm">Start for free</button>
                    <button className="border px-6 py-3 rounded-full text-sm">See demo</button>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="grid grid-cols-3 gap-6 px-16 pb-24">
                {["Analytics", "Automation", "Integrations"].map((f) => (
                    <div key={f} className="border rounded-2xl p-6">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg mb-4" />
                        <h3 className="font-semibold mb-2">{f}</h3>
                        <p className="text-sm text-gray-400">Powerful tools to help your team move faster and smarter every day.</p>
                    </div>
                ))}
            </section>
        </div>
    )
}