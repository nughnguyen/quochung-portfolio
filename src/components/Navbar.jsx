import { useState, useEffect } from "react";
import navbarData from "../data/navbarData.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

  
    const currentYear = () => new Date().getFullYear();

  
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        navbarData.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

  
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

   
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (
            savedTheme === "dark" ||
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

   
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle("dark");

        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClick = (id) => {
        setActiveId(id);
        setIsMenuOpen(false);
    };
    return (
        <>
            <nav className="bg-white fixed top-0 left-0 w-full z-50 p-1.5 overflow-hidden shadow-lg dark:bg-gray-800 transition-all duration-300" data-aos-duration="1000" data-aos="fade-down">
                <div className="container">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between py-4">
                            <a href="#" className="flex items-center gap-2">
                                <i className="bx bx-code-alt text-2xl text-gray-800 dark:text-white"></i>
                                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    My Portofolio
                                </h1>
                            </a>


                            <button
                                className="md:hidden text-gray-700 dark:text-white focus:outline-none"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                            </button>

                            {/* Desktop Menu */}
                            <ul className="hidden md:flex items-center gap-6">
                                {navbarData.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={() => handleClick(item.id)}
                                            className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${activeId === item.id
                                                ? "bg-gray-800 shadow-2xl dark:bg-white dark:text-gray-800 text-white"
                                                : "text-gray-800 dark:text-white hover:text-blue-600"
                                                }`}>
                                            <i className={`bx ${item.icon}`}></i>
                                            <span>{item.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Off-Canvas Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-70 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                            <i className="bx bx-code-alt text-2xl text-gray-800 dark:text-white"></i>
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Navigation</h2>
                        </div>
                        <button
                            className="text-gray-800 dark:text-white focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
                            onClick={toggleMenu}
                            aria-label="Close menu"
                        >
                            <i className="bx bx-x text-2xl"></i>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto py-6">
                        <ul className="flex flex-col gap-2 px-6">
                            {navbarData.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={`transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${isMenuOpen ? index * 0.1 : 0}s`
                                    }}
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => handleClick(item.id)}
                                        className={`flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 ${activeId === item.id
                                            ? "bg-gray-800 dark:bg-white dark:text-gray-800 text-white shadow-lg"
                                            : "text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        <i className={`bx ${item.icon} text-xl`}></i>
                                        <span>{item.label}</span>
                                        <i className="bx bx-chevron-right ml-auto text-xl"></i> {/*langsung ke kanan */}
                                    </a>
                                </li>
                            ))}

                            {/* Mobile Dark Mode Toggle */}
                            <li>
                                <button
                                    onClick={toggleDarkMode}
                                    className="w-full flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    aria-label="Toggle dark mode"
                                >
                                    <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} text-xl`}></i>
                                    <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                            © {currentYear()} Hizkia Siahaan. All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;