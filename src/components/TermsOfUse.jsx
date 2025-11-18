const TermsOfUse = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-800 pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Terms of Use
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
                1. Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                2. Use License
              </h2>
              <p className="leading-relaxed mb-3">
                Permission is granted to temporarily download one copy of the materials (information or software) on my website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                3. Disclaimer of Warranties
              </h2>
              <p className="leading-relaxed">
                The materials on my website are provided "as is." I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                4. Limitations of Liability
              </h2>
              <p className="leading-relaxed">
                In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on my website, even if I have been notified of the possibility of such damages.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="leading-relaxed">
                The materials appearing on my website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on my website are accurate, complete, or current. I may make changes to the materials contained on my website at any time without notice.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                6. Links
              </h2>
              <p className="leading-relaxed">
                I have not reviewed all of the sites linked to my website and am not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by me of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                7. Modifications
              </h2>
              <p className="leading-relaxed">
                I may revise these terms of use for my website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of use.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                8. Governing Law
              </h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Vietnam, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                9. User Conduct
              </h2>
              <p className="leading-relaxed mb-3">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Harass, abuse, or harm others</li>
                <li>Post illegal or infringing content</li>
                <li>Attempt to gain unauthorized access to any system or network</li>
                <li>Use automated tools or scripts to access or modify website content</li>
                <li>Spam or send unsolicited communications</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                10. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Use, please contact me through the contact form on my website.
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

export default TermsOfUse;
