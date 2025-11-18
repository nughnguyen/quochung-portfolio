const uniqueLetterSVGs = {
  N: ["M10 20 L10 80 L30 20 L30 80"], // ← Thay bằng d thật từ N.svg
  g: [
    "M50 30 C50 10 70 10 70 30 C70 50 50 50 50 30",
    "M60 40 C62 42 68 42 70 40"
  ], // ← Thay bằng d thật từ g.svg
  u: ["M80 20 L80 70 C80 80 90 80 90 70 L90 20"], // ← từ u.svg
  y: ["M100 20 L110 40 L110 70 M110 40 L120 20"], // ← từ y.svg
  e: ["M130 50 L140 50 C140 40 150 40 150 50 C150 60 140 60 140 50"], // ← từ e.svg
  Q: ["M160 30 C170 20 180 20 190 30 C190 50 170 60 160 50 L175 65"], // ← từ Q.svg
  o: ["M200 30 C210 20 220 20 230 30 C230 50 220 60 210 50 C200 60 190 50 190 30"], // ← từ o.svg
  c: ["M0 9.184C0 7.328 0.373344 5.70667 1.12001 4.32C1.88801 2.93333 2.94401 1.86667 4.28801 1.12C5.65334 0.373334 7.21067 0 8.96001 0C11.2 0 13.0667 0.586667 14.56 1.76C16.0747 2.93333 17.0667 4.58667 17.536 6.72H11.712C11.2213 5.35467 10.272 4.672 8.864 4.672C7.86133 4.672 7.06134 5.06667 6.464 5.856C5.86667 6.624 5.56801 7.73333 5.56801 9.184C5.56801 10.6347 5.86667 11.7547 6.464 12.544C7.06134 13.312 7.86133 13.696 8.864 13.696C10.272 13.696 11.2213 13.0133 11.712 11.648H17.536C17.0667 13.7387 16.0747 15.3813 14.56 16.576C13.0453 17.7707 11.1787 18.368 8.96001 18.368C7.21067 18.368 5.65334 17.9947 4.28801 17.248C2.94401 16.5013 1.88801 15.4347 1.12001 14.048C0.373344 12.6613 0 11.04 0 9.184Z"], // ← từ c.svg
  H: ["M280 20 L280 80 M280 50 L300 50 M300 20 L300 80"], // ← từ H.svg
};

// Chuỗi hiển thị đầy đủ (kể cả khoảng trắng)
const brandText = "Nguyen Quoc Hung";

// Tạo mảng letters với dữ liệu SVG (tái sử dụng)
const brandLetters = brandText.split("").map(char => {
  if (char === " ") {
    return { char: " ", paths: [] };
  }
  return {
    char,
    paths: uniqueLetterSVGs[char] || [],
  };
});

const footerData = {
  brand: {
    name: "Developed & Maintained by",
    icon: "bx bx-code-alt",
    description: brandText,
    letters: brandLetters, // ← Dùng cho SVG animation
  },

  navigationIcon: "bx bx-navigation",
  socialsIcon: "bx bx-share-alt",

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  legalLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Use", href: "#terms" },
    { label: "Sitemap", href: "#sitemap" },
  ],

  socials: [
    {
      label: "WhatsApp",
      icon: "bx bxl-whatsapp",
      href: "https://wa.me/0388205003",
    },
    {
      label: "Instagram",
      icon: "bx bxl-instagram",
      href: "https://www.instagram.com/nq.hnug",
    },
    {
      label: "GitHub",
      icon: "bx bxl-github",
      href: "https://github.com/nughnguyen",
    },
  ],

  formSubscription: {
    title: "Subscribe to Newsletter",
    description: "Stay updated with my latest projects and articles.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },

  copyright: "© 2025 Nguyen Quoc Hung. All rights reserved.",
};

export default footerData;