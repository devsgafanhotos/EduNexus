import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";

export default function AppLayout({ children }) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-2 overflow-auto">
                    {children}

                    <Footer />
                </main>
            </div>
        </div>
    );
}
