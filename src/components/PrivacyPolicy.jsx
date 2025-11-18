const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-800 pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Content */}
        <article className="prose dark:prose-invert max-w-none">
          <div className="space-y-8 text-gray-800 dark:text-gray-300">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                Welcome to my portfolio website. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website. Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our site.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                2. Information I Collect
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Contact Form Information:
                  </h3>
                  <p className="leading-relaxed">
                    When you submit the contact form, I collect your name, email address, and message content to respond to your inquiries.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Testimonial Information:
                  </h3>
                  <p className="leading-relaxed">
                    If you leave a testimonial, I collect your name, position, email, rating, and testimonial content, which may be publicly displayed on my website.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Automatic Information:
                  </h3>
                  <p className="leading-relaxed">
                    Like most websites, I may automatically collect certain information about your device and browsing activity, such as IP address, browser type, and pages visited.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                3. How I Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>To respond to your contact form submissions</li>
                <li>To display and manage testimonials</li>
                <li>To improve website performance and user experience</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraudulent activity</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                4. Data Storage & Security
              </h2>
              <p className="leading-relaxed">
                Your information is stored securely using Supabase, a trusted cloud database service. I implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                5. Third-Party Services
              </h2>
              <p className="leading-relaxed mb-3">
                This website uses third-party services including:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>Formspree</strong> - for processing contact form submissions</li>
                <li><strong>Supabase</strong> - for storing testimonials and data</li>
                <li><strong>Vercel/GitHub Pages</strong> - for website hosting</li>
              </ul>
              <p className="leading-relaxed mt-3">
                These services have their own privacy policies, and I encourage you to review them.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                6. Cookies
              </h2>
              <p className="leading-relaxed">
                This website may use cookies to enhance your browsing experience, such as storing your theme preference (light/dark mode). You can control cookie settings through your browser, but disabling cookies may affect site functionality.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                7. Your Rights
              </h2>
              <p className="leading-relaxed mb-3">
                Depending on your location, you may have rights including:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Objection to processing</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise these rights, please contact me through the contact form with your request.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                8. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or my privacy practices, please contact me through the contact form on my website.
              </p>
            </section>
          </div>
        </article>

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

export default PrivacyPolicy;
