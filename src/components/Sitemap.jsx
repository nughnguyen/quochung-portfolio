const Sitemap = () => {
  const pages = [
    { title: "Home", href: "#home", icon: "bx bx-home", description: "Main landing page with introduction" },
    { title: "About", href: "#about", icon: "bx bx-user", description: "Learn more about me and my background" },
    { title: "Projects", href: "#portofolio", icon: "bx bx-briefcase", description: "View my portfolio and projects" },
    { title: "Testimonials", href: "#testimonials", icon: "bx bx-comment", description: "See what others say about my work" },
    { title: "Contact", href: "#contact", icon: "bx bx-envelope", description: "Get in touch with me" },
  ];

  const legalPages = [
    { title: "Privacy Policy", href: "#privacy", icon: "bx bx-shield", description: "How I handle your personal information" },
    { title: "Terms of Use", href: "#terms", icon: "bx bx-file", description: "Terms and conditions of using this website" },
    { title: "Sitemap", href: "#sitemap", icon: "bx bx-map", description: "Complete map of all website pages" },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-800 pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A complete map of all pages and sections on this website
          </p>
        </header>

        <div className="space-y-12">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pages.map((page, index) => (
                <a
                  key={index}
                  href={page.href}
                  className="group flex gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 dark:bg-white text-white dark:text-gray-800 group-hover:shadow-lg transition-all">
                      <i className={`${page.icon} text-xl`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {page.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Legal Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Legal & Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalPages.map((page, index) => (
                <a
                  key={index}
                  href={page.href}
                  className="group flex gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 dark:bg-white text-white dark:text-gray-800 group-hover:shadow-lg transition-all">
                      <i className={`${page.icon} text-xl`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {page.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Website Statistics */}
          <section className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Website Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-800 dark:text-white">
                  {pages.length + legalPages.length}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Total Pages
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-800 dark:text-white">
                  {pages.length}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Main Sections
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-800 dark:text-white">
                  {legalPages.length}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Legal Pages
                </p>
              </div>
            </div>
          </section>

          {/* SEO Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              SEO Information
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                This website is designed to be search engine friendly. All pages are properly structured with semantic HTML, meta tags, and descriptive content. The sitemap helps search engines discover and index all available content efficiently.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            <i className="bx bx-arrow-back"></i>
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
