const contactData = {
    title: "Contact Me",
    subtitle: "Reach out via form, social media, or support platforms.",

    tabs: [
        {
            label: "Form",
            value: "form",
            icon: "bx bx-envelope",
        },
        {
            label: "Social",
            value: "social",
            icon: "bx bx-link",
        },
        {
            label: "Support Me",
            value: "support",
            icon: "bx bx-heart",
        },
    ],

    contactInfo: {
        description: "I'm always open to discuss exciting projects and new opportunities. Let's collaborate!",
        details: [
            {
                label: "Email",
                value: "hungnq.august.work@gmail.com",
                link: "mailto:hungnq.august.work@gmail.com",
                icon: "bx bx-envelope",
            },
            {
                label: "Phone",
                value: "+84 388 205 003",
                link: "tel:+84388205003",
                icon: "bx bx-phone",
            },
            {
                label: "Location",
                value: "Ho Chi Minh City, Vietnam",
                link: "https://google.com/maps/place/Ho+Chi+Minh+City,+Vietnam",
                icon: "bx bx-map",
            },
        ],
        socialLinks: [
            {
                label: "GitHub",
                href: "https://github.com/nughnguyen",
                icon: "bx bxl-github",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/hungnq-august/",
                icon: "bx bxl-linkedin-square",
            },
            {
                label: "WhatsApp",
                href: "https://wa.me/0388205003",
                icon: "bx bxl-whatsapp",
            },
        ],
    },

    socials: [
        {
            label: "GitHub",
            href: "https://github.com/nughnguyen",
            icon: "bx bxl-github",
            description: "Explore my code & projects",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/hungnq-august/",
            icon: "bx bxl-linkedin-square",
            description: "Let's connect professionally",
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/nq.hnug",
            icon: "bx bxl-instagram",
            description: "My visual journal & life updates",
        },
        {
            label: "Discord",
            href: "https://dsc.gg/thenoicez",
            icon: "bx bxl-discord",
            description: "Join my community",
        },
    ],

    supportPlatforms: [
        {
            label: "VietQR",
            type: "image",
            imageSrc: "/assets/VietQR.jpg",
            alt: "Scan to support via VietQR",
        }
    ],

    formspreeEndpoint: "https://formspree.io/f/mqawdgro",

};

export default contactData;
