import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 w-15 h-15 flex items-center drop-shadow-2xl justify-center rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-lg  transition-all hover:scale-103"
                aria-label="Scroll to Top"
            >
                <i className="bx bx-chevron-up text-2xl" />
            </button>

        )
    );
};

export default ScrollToTop;
