import Footer from "./Footer";

export default function NoPage() {
    return (
        <div className="text-sky-100 bg-slate-800 py-8 sm:py-10">
            <div className="text-center min-h-dvh justify-center p-20">
                <p className="text-5xl font-semibold">404</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                    Page not found
                </h2>
            </div>
            <Footer />
        </div>
    );
}