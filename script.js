/* =========================================
   MOHAMMED MAJDI PORTFOLIO
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS
    ========================================= */

    const languageButton = document.getElementById("language-btn");
    const themeButton = document.getElementById("theme-btn");

    const body = document.body;


    /* =========================================
       LANGUAGE SYSTEM
    ========================================= */

    const translations = {

        en: {

            "Home": "Home",
            "About": "About",
            "Skills": "Skills",
            "Projects": "Projects",
            "Education": "Education",
            "Contact": "Contact",

            "Hello, I'm": "Hello, I'm",

            "Computer Science & Information Security Student":
                "Computer Science & Information Security Student",

            "View My Projects": "View My Projects",
            "Contact Me": "Contact Me",

            "About Me": "About Me",
            "Who I Am": "Who I Am",

            "My Skills": "My Skills",
            "Technologies I Work With":
                "Technologies I Work With",

            "My Work": "My Work",
            "Featured Projects": "Featured Projects",

            "My Journey": "My Journey",
            "Education & Certificates":
                "Education & Certificates",

            "Get In Touch": "Get In Touch",

            "Projects": "Projects",

            "University:": "University:",
            "Major:": "Major:",
            "Current Year:": "Current Year:",
            "Location:": "Location:",

            "2nd Year Student": "2nd Year Student",

            "Certifications":
                "Certifications",

            "Email": "Email",
            "GitHub": "GitHub",
            "LinkedIn": "LinkedIn",
            "YouTube": "YouTube",

            "Python": "Python",
            "Networking": "Networking",
            "Cybersecurity": "Cybersecurity",
            "Web Development": "Web Development",
            "Linux": "Linux",
            "Databases": "Databases",
            "Godot": "Godot",
            "Git & GitHub": "Git & GitHub",

            "Programming & Automation":
                "Programming & Automation",

            "Security Fundamentals & Ethical Hacking":
                "Security Fundamentals & Ethical Hacking",

            "2D & 3D Game Development":
                "2D & 3D Game Development",

            "Version Control & Projects":
                "Version Control & Projects",

            "View Project": "View Project",
            "Details": "Details",
            "Demo": "Demo",
            "Play Game": "Play Game",

            "DES Audio Encryption":
                "DES Audio Encryption",

            "Network Mini Lab":
                "Network Mini Lab",

            "Horror Game":
                "Horror Game",

            "Linear Search":
                "Linear Search",

            "Database Project":
                "Database Project",

            "Prolog Family Tree":
                "Prolog Family Tree",

            "Code • Learn • Build • Grow":
                "Code • Learn • Build • Grow"

        },


        ar: {

            "Home": "الرئيسية",
            "About": "من أنا",
            "Skills": "المهارات",
            "Projects": "المشاريع",
            "Education": "التعليم",
            "Contact": "تواصل معي",

            "Hello, I'm": "مرحباً، أنا",

            "Computer Science & Information Security Student":
                "طالب علوم الحاسوب وأمن المعلومات",

            "View My Projects": "مشاهدة مشاريعي",
            "Contact Me": "تواصل معي",

            "About Me": "نبذة عني",
            "Who I Am": "من أنا",

            "My Skills": "مهاراتي",
            "Technologies I Work With":
                "التقنيات التي أعمل بها",

            "My Work": "أعمالي",
            "Featured Projects":
                "أبرز المشاريع",

            "My Journey": "رحلتي",
            "Education & Certificates":
                "التعليم والشهادات",

            "Get In Touch": "تواصل معي",

            "University:": "الجامعة:",
            "Major:": "التخصص:",
            "Current Year:": "السنة الدراسية:",
            "Location:": "الموقع:",

            "2nd Year Student":
                "طالب في السنة الثانية",

            "Certifications":
                "الشهادات",

            "Email": "البريد الإلكتروني",
            "GitHub": "جيت هب",
            "LinkedIn": "لينكدإن",
            "YouTube": "يوتيوب",

            "Python": "Python",
            "Networking": "الشبكات",
            "Cybersecurity": "الأمن السيبراني",
            "Web Development": "تطوير الويب",
            "Linux": "Linux",
            "Databases": "قواعد البيانات",
            "Godot": "Godot",
            "Git & GitHub": "Git و GitHub",

            "Programming & Automation":
                "البرمجة والأتمتة",

            "Security Fundamentals & Ethical Hacking":
                "أساسيات الأمن والاختبار الأخلاقي",

            "2D & 3D Game Development":
                "تطوير الألعاب ثنائية وثلاثية الأبعاد",

            "Version Control & Projects":
                "إدارة الإصدارات والمشاريع",

            "View Project": "عرض المشروع",
            "Details": "التفاصيل",
            "Demo": "تجربة المشروع",
            "Play Game": "تشغيل اللعبة",

            "DES Audio Encryption":
                "تشفير الملفات الصوتية باستخدام DES",

            "Network Mini Lab":
                "مختبر شبكات مصغر",

            "Horror Game":
                "لعبة رعب",

            "Linear Search":
                "البحث الخطي",

            "Database Project":
                "مشروع قاعدة بيانات",

            "Prolog Family Tree":
                "شجرة العائلة باستخدام Prolog",

            "Code • Learn • Build • Grow":
                "برمج • تعلّم • ابنِ • تطور"

        }

    };


    /* =========================================
       GET SAVED LANGUAGE
    ========================================= */

    let currentLanguage =
        localStorage.getItem("portfolio-language") || "en";


    /* =========================================
       TRANSLATE PAGE
    ========================================= */

    function translatePage(language) {

        const dictionary = translations[language];

        if (!dictionary) {
            return;
        }


        /* -------------------------------------
           Translate text nodes
        ------------------------------------- */

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );


        const textNodes = [];

        let node;

        while (node = walker.nextNode()) {

            if (
                node.parentElement.tagName !== "SCRIPT" &&
                node.parentElement.tagName !== "STYLE"
            ) {
                textNodes.push(node);
            }
        }


        textNodes.forEach(textNode => {

            const originalText =
                textNode.textContent.trim();

            if (dictionary[originalText]) {

                textNode.textContent =
                    dictionary[originalText];

            }

        });


        /* -------------------------------------
           Direction
        ------------------------------------- */

        if (language === "ar") {

            document.documentElement.lang = "ar";

            document.documentElement.dir = "rtl";

            body.style.direction = "rtl";

        } else {

            document.documentElement.lang = "en";

            document.documentElement.dir = "ltr";

            body.style.direction = "ltr";

        }


        /* -------------------------------------
           Button
        ------------------------------------- */

        if (languageButton) {

            languageButton.textContent =
                language === "en" ? "AR" : "EN";

        }


        localStorage.setItem(
            "portfolio-language",
            language
        );

        currentLanguage = language;

    }


    /* =========================================
       LANGUAGE BUTTON
    ========================================= */

    if (languageButton) {

        languageButton.addEventListener(
            "click",
            () => {

                const newLanguage =
                    currentLanguage === "en"
                        ? "ar"
                        : "en";

                /*
                 * Reload the page so the original
                 * English text is restored before
                 * translating again.
                 */

                localStorage.setItem(
                    "portfolio-language",
                    newLanguage
                );

                location.reload();

            }
        );

    }


    /* =========================================
       THEME SYSTEM
    ========================================= */

    let currentTheme =
        localStorage.getItem("portfolio-theme") || "dark";


    function applyTheme(theme) {

        if (theme === "light") {

            body.classList.add("light-mode");

            if (themeButton) {
                themeButton.textContent = "🌙";
            }

        } else {

            body.classList.remove("light-mode");

            if (themeButton) {
                themeButton.textContent = "☀";
            }

        }


        localStorage.setItem(
            "portfolio-theme",
            theme
        );

    }


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            () => {

                const newTheme =
                    currentTheme === "dark"
                        ? "light"
                        : "dark";

                currentTheme = newTheme;

                applyTheme(newTheme);

            }
        );

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            "section, .skill-card, .project-card, .education-card"
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =========================================
       BACK TO TOP BUTTON
    ========================================= */

    const backToTop =
        document.createElement("button");


    backToTop.innerHTML = "↑";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    backToTop.style.position = "fixed";

    backToTop.style.right = "25px";

    backToTop.style.bottom = "25px";

    backToTop.style.width = "45px";

    backToTop.style.height = "45px";

    backToTop.style.borderRadius = "50%";

    backToTop.style.border =
        "1px solid #0d8cff";

    backToTop.style.background =
        "#0d8cff";

    backToTop.style.color =
        "#ffffff";

    backToTop.style.fontSize =
        "22px";

    backToTop.style.cursor =
        "pointer";

    backToTop.style.zIndex =
        "999";

    backToTop.style.opacity =
        "0";

    backToTop.style.visibility =
        "hidden";

    backToTop.style.transition =
        "0.3s";


    document.body.appendChild(
        backToTop
    );


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.style.opacity = "1";

                backToTop.style.visibility =
                    "visible";

            } else {

                backToTop.style.opacity = "0";

                backToTop.style.visibility =
                    "hidden";

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const footerParagraphs =
        document.querySelectorAll("footer p");


    footerParagraphs.forEach(paragraph => {

        if (
            paragraph.textContent.includes("2026")
        ) {

            paragraph.textContent =
                `© ${new Date().getFullYear()} Mohammed Majdi. All Rights Reserved.`;

        }

    });


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const navLinks =
        document.querySelectorAll(".nav-links a");


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.forEach(item => {

                    item.style.color =
                        "#b8c7d8";

                });


                link.style.color =
                    "#0d8cff";

            }
        );

    });


    /* =========================================
       PROJECT CARD HOVER
    ========================================= */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "translateY(-10px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0)";

            }
        );

    });


    /* =========================================
       INITIALIZE
    ========================================= */

    applyTheme(currentTheme);

    if (currentLanguage === "ar") {

        translatePage("ar");

    } else {

        if (languageButton) {
            languageButton.textContent = "AR";
        }

    }

}
);