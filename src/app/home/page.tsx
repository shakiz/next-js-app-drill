export function Home() {
    return <div className="min-h-screen bg-gray-100 flex">
        <aside className="w-64 bg-white p-6">
            <div className="h-10 bg-gray-300 rounded mb-8" />
            <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded-3xl" />
                <div className="h-8 bg-gray-200 rounded-3xl" />
                <div className="h-8 bg-gray-200 rounded-3xl" />
                <div className="h-8 bg-gray-200 rounded-3xl" />
                <div className="h-8 bg-gray-200 rounded-3xl" />
            </div>
        </aside>

        <main className="flex-1 p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-60 bg-white rounded-2xl" />
                <div className="h-60 bg-white rounded-2xl" />
                <div className="h-60 bg-white rounded-2xl" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-80 bg-white rounded-2xl" />
                <div className="h-80 bg-white rounded-2xl" />
            </div>
            <div>
                <div className="h-90 bg-white rounded-2xl" />
            </div>
        </main>
    </div>;
}

export default Home;