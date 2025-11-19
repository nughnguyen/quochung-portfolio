import { useState } from "react";
import { portfolioData } from "../data/portofolioData.jsx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = activeTab === "projects" ? 3 : 6;

    // Get current items based on tab and page
    const getCurrentItems = () => {
        let items = [];
        if (activeTab === "projects") items = portfolioData.tabs.projects;
        else if (activeTab === "certificates") items = portfolioData.tabs.certificates;
        else items = portfolioData.tabs.techStacks;

        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    };

    // Calculate total pages
    const getTotalPages = () => {
        let totalItems = 0;
        if (activeTab === "projects") totalItems = portfolioData.tabs.projects.length;
        else if (activeTab === "certificates") totalItems = portfolioData.tabs.certificates.length;
        else totalItems = portfolioData.tabs.techStacks.length;
        return Math.ceil(totalItems / itemsPerPage);
    };

    // Handle tab change - reset to page 1
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    return (
        <section
            id="portofolio"
            className="min-h-screen pb-20 bg-white dark:bg-gray-800 pt-20 anim-fade-in"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title & Subtitle */}
                <div
                    className="text-center mb-12 text-gray-800 anim-fade-in"
                >
                    <h2 className="text-5xl font-bold dark:text-white mb-2">
                        {portfolioData.sectionTitle.title}
                    </h2>
                    <p className="text-lg dark:text-gray-400">
                        {portfolioData.sectionTitle.subtitle}
                    </p>
                </div>

                {/* Tabs Menu */}
                <div
                    className="flex justify-center mb-8 gap-4 flex-wrap anim-fade-in anim-delay-100"
                >
                    {[
                        { value: "projects", label: "Projects", icon: "bx bx-briefcase" },
                        { value: "certificates", label: "Certificates", icon: "bx bx-award" },
                        { value: "tech", label: "Tech Stack", icon: "bx bx-code-alt" },
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => handleTabChange(tab.value)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${activeTab === tab.value
                                    ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                                    : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"
                                }`}
                        >
                            <i className={tab.icon}></i>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div>
                    {/* Projects Tab */}
                    {activeTab === "projects" && (
                        <div>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 anim-fade-in anim-delay-200"
                            >
                                {getCurrentItems().map((project, idx) => (
                                    <div
                                        key={project.id}
                                        className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg anim-fade-in card-hover"
                                        style={{ animationDelay: `${(idx % itemsPerPage) * 70}ms` }}
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            {project.subtitle}
                                        </p>
                                        <p className="text-sm text-gray-800 dark:text-white mb-4">
                                            {project.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-white"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Tippy content="View Demo" placement="top">
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex justify-center w-full items-center gap-2 px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1"
                                            >
                                                <span className="flex items-center gap-1">
                                                    <span>Demo</span>
                                                    <i className="bx bx-link-external"></i>
                                                </span>
                                            </a>
                                        </Tippy>

                                    </div>
                                ))}
                            </div>
                            {/* Pagination */}
                            <div className="mt-12 flex justify-center items-center gap-4">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <i className="bx bx-chevron-left"></i> Prev
                                </button>
                                <div className="flex gap-2">
                                    {Array.from({ length: getTotalPages() }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-all ${currentPage === page
                                                ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                                                : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white hover:-translate-y-1"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(getTotalPages(), prev + 1))}
                                    disabled={currentPage === getTotalPages()}
                                    className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next <i className="bx bx-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Certificates Tab */}
                    {activeTab === "certificates" && (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 anim-fade-in anim-delay-200">
                                {getCurrentItems().map((certificate, idx) => (
                                    <div
                                        key={certificate.id}
                                        className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg overflow-hidden anim-fade-in card-hover"
                                        style={{ animationDelay: `${(idx % itemsPerPage) * 70}ms` }}
                                    >
                                        <img
                                            src={certificate.img}
                                            alt={certificate.title}
                                            className="w-full h-72 object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Pagination */}
                            <div className="mt-12 flex justify-center items-center gap-4">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <i className="bx bx-chevron-left"></i> Prev
                                </button>
                                <div className="flex gap-2">
                                    {Array.from({ length: getTotalPages() }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-all ${currentPage === page
                                                ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                                                : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white hover:-translate-y-1"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(getTotalPages(), prev + 1))}
                                    disabled={currentPage === getTotalPages()}
                                    className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next <i className="bx bx-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Tech Stack Tab */}
                    {activeTab === "tech" && (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 anim-fade-in anim-delay-200">
                                {getCurrentItems().map((tech, idx) => (
                                    <div
                                        key={tech.id}
                                        className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg flex flex-col items-center justify-center gap-4 anim-fade-in card-hover"
                                        style={{ animationDelay: `${(idx % itemsPerPage) * 70}ms` }}
                                    >
                                        <i
                                            className={`${tech.icon}  text-6xl`}
                                            style={{ color: tech.color }}
                                        ></i>
                                        <span className="text-lg font-medium text-gray-800 dark:text-white">
                                            {tech.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            {/* Pagination */}
                            <div className="mt-12 flex justify-center items-center gap-4">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <i className="bx bx-chevron-left"></i> Prev
                                </button>
                                <div className="flex gap-2">
                                    {Array.from({ length: getTotalPages() }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-all ${currentPage === page
                                                ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                                                : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white hover:-translate-y-1"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(getTotalPages(), prev + 1))}
                                    disabled={currentPage === getTotalPages()}
                                    className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next <i className="bx bx-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;