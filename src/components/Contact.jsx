import { useState } from "react";
import contactData from "../data/contactData.jsx";
import Tippy from '@tippyjs/react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <section id="contact" className="min-h-screen pb-20 bg-white dark:bg-gray-800 pt-20" data-aos-duration="1000" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <div className="text-center mb-12 text-gray-800" data-aos-delay="600" data-aos="fade-down">
          <h2 className="text-5xl font-bold dark:text-white mb-2">{contactData.title}</h2>
          <p className="text-lg dark:text-gray-400">{contactData.subtitle}</p>
        </div>

        {/* Tabs Menu */}
        <div className="flex justify-center mb-8 gap-4 flex-wrap" data-aos-delay="600" data-aos="fade-down">
          {[
            { value: "contact", label: "Contact Me", icon: "bx bx-envelope" },
            { value: "support", label: "Support Me", icon: "bx bx-heart" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${
                activeTab === tab.value
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
          {activeTab === "contact" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto" data-aos-delay="600" data-aos="fade-down">
              {/* Left Side: Contact Info (like index.html) */}
              <div className="flex flex-col justify-start">
                <p className="text-gray-800 dark:text-white mb-6 leading-relaxed">
                  {contactData.contactInfo.description}
                </p>
                
                {/* Contact Details */}
                <div className="space-y-4 mb-8">
                  {contactData.contactInfo.details.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 dark:bg-white text-white dark:text-gray-800 shadow-lg group-hover:shadow-xl transition-all">
                        <i className={`${item.icon} text-lg`} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm">{item.label}</span>
                        <span className="text-xs text-gray-700 dark:text-gray-400 break-all">{item.value}</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {contactData.contactInfo.socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all shadow-lg transform hover:-translate-y-1"
                      aria-label={item.label}
                    >
                      <i className={`${item.icon} text-xl`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="rounded-lg py-12 px-7 shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <i className="bx bx-envelope text-lg" />
                  Send Me a Message
                </h3>
                <form action={contactData.formspreeEndpoint} method="POST" className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="_replyto"
                    required
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white"
                  />
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    required
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white"
                    rows="5"
                  />
                  <Tippy content="Send your message" placement="top">
                    <button
                      type="submit"
                      className="px-4 py-3 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      Send
                      <i className="bx bx-send text-[1.2rem] translate-y-[1px]" />
                    </button>
                  </Tippy>
                </form>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div className="grid gap-4 max-w-xl mx-auto" data-aos-delay="600" data-aos="fade-down">
              {contactData.supportPlatforms.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform max-w-xl mx-auto"
                >
                  {item.type === "image" ? (
                    <div className="flex flex-col items-center text-center">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                        {item.label}
                      </h4>
                      <p className="text-sm text-gray-800 dark:text-white mb-4 leading-relaxed">
                        If my work has helped or inspired you, consider supporting me by scanning the QR code below. Every little bit means a lot 🙌
                      </p>
                      <img
                        src={item.imageSrc}
                        alt={item.alt}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
