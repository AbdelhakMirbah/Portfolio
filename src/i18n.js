import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        education: "Education",
        experience: "Experience",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact"
      },
      hero: {
        hi: "Hi, I am Abdelhak",
        title: "Software Engineer",
        subtitle: "Building IT Solutions.",
        description: "A versatile software engineer passionate about designing end-to-end solutions, from web applications to data engineering pipelines and AI integrations.",
        viewWork: "View My Work",
        downloadCV: "Download CV"
      },
      about: {
        title: "About Me & Skills",
        bio: "I am a versatile Software Engineer passionate about building end-to-end IT solutions. With a solid foundation in both web application development and data engineering, I love tackling complex technical challenges and contributing to innovative projects.",
        webDev: "Web Development",
        dataAnalytics: "Data & Analytics",
        languagesTools: "Languages & Tools"
      },
      education: {
        title: "Education",
        edu1: {
          degree: "State Engineering Degree in Computer & Network Engineering",
          school: "École Marocaine des Sciences de l'Ingénieur",
          date: "2023 - 2026"
        },
        edu2: {
          degree: "Specialized Technician Diploma in IT Development",
          school: "ISTA NTIC SIDI MAAROUF",
          date: "2019 - 2021"
        },
        edu3: {
          degree: "Baccalaureate in Physical Sciences",
          school: "Lycée Jamal Eddine Al Mahiaoui",
          date: "2018 - 2019"
        }
      },
      experience: {
        title: "Experience",
        exp1: {
          title: "Intern Engineer (Data Pipeline & Dashboard)",
          company: "LEONI WS",
          date: "Mar 2026 - Sep 2026",
          desc: "Designed and developed an automated financial reporting application. Built the software architecture, database models, and optimized KPIs on dashboards."
        },
        exp2: {
          title: "Business Intelligence Intern",
          company: "Daman Cash (Groupe BMCE)",
          date: "Jul 2025 - Aug 2025",
          desc: "Developed ETL flows (Pentaho) to populate a Data Warehouse. Integrated multi-source data (MySQL, Oracle) and automated financial reporting (Power BI)."
        },
        exp3: {
          title: "Web Developer Intern",
          company: "Kazinov",
          date: "Aug 2024 - Sep 2024",
          desc: "Designed and developed a task management web application for project tracking using PHP, Bootstrap, and MySQL."
        },
        exp4: {
          title: "Freelance",
          company: "Innolia",
          date: "2023 - Present",
          desc: "Provided technical consulting and developed scalable digital solutions."
        }
      },
      projects: {
        title: "Key Projects",
        viewRepo: "View Repository",
        proj1: {
          title: "AI-Powered Fraud Detection",
          tech: "Spring Boot, Apache Kafka, ONNX",
          desc: "Developed a real-time fraud detection pipeline integrating an AI model (ONNX) for inference and anomaly analysis with ultra-low latency."
        },
        proj2: {
          title: "Smart Irrigation",
          tech: "Android, AI, IoT Data",
          desc: "Developed an Android app providing real-time irrigation recommendations based on weather data and an adaptive AI model considering soil and plant types."
        },
        proj3: {
          title: "Flutter Deep Learning App",
          tech: "Flutter, Dart, TensorFlow Lite",
          desc: "Built a cross-platform mobile application integrating a Deep Learning model for real-time on-device inference, showcasing advanced UI design and AI integration."
        }
      },
      certifications: {
        title: "Certifications"
      },
      contact: {
        title: "Get In Touch",
        desc: "Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!",
        sayHello: "Say Hello",
        email: "Email",
        location: "Location",
        morocco: "Morocco",
        phone: "Phone"
      },
      footer: {
        builtWith: "Built with React & Vite."
      }
    }
  },
  fr: {
    translation: {
      nav: {
        about: "À propos",
        education: "Académique",
        experience: "Expérience",
        projects: "Projets",
        certifications: "Certifications",
        contact: "Contact"
      },
      hero: {
        hi: "Bonjour, je suis Abdelhak",
        title: "Ingénieur Logiciel",
        subtitle: "Créateur de Solutions IT.",
        description: "Un ingénieur logiciel polyvalent passionné par la conception de solutions de bout en bout, des applications web à l'ingénierie des données et aux intégrations d'IA.",
        viewWork: "Voir Mon Travail",
        downloadCV: "Télécharger le CV"
      },
      about: {
        title: "À propos & Compétences",
        bio: "Ingénieur logiciel polyvalent, passionné par la conception de solutions IT de bout en bout. Fort d'une solide base technique allant du développement d'applications à l'ingénierie de données, j'aime relever des défis techniques complexes et participer au développement de projets innovants.",
        webDev: "Développement Web",
        dataAnalytics: "Données & Analytique",
        languagesTools: "Langages & Outils"
      },
      education: {
        title: "Parcours Académique",
        edu1: {
          degree: "Diplôme d'Ingénieur d'État en Ingénierie Informatique et Réseaux (Génie Logiciel)",
          school: "École Marocaine des Sciences de l'Ingénieur",
          date: "2023 - 2026"
        },
        edu2: {
          degree: "Diplôme Technicien Spécialisé Développement Informatique",
          school: "ISTA NTIC SIDI MAAROUF",
          date: "2019 - 2021"
        },
        edu3: {
          degree: "Baccalauréat Sciences Physiques",
          school: "Lycée Jamal Eddine Al Mahiaoui",
          date: "2018 - 2019"
        }
      },
      experience: {
        title: "Expérience",
        exp1: {
          title: "Ingénieur Stagiaire (Data Pipeline & Dashboard)",
          company: "LEONI WS",
          date: "Mars 2026 - Sept. 2026",
          desc: "Conçu et développé de bout en bout une application automatisée de consolidation financière et de reporting. Modélisation de base de données et optimisation des KPIs."
        },
        exp2: {
          title: "Stagiaire Business Intelligence",
          company: "Daman Cash (Groupe BMCE)",
          date: "Juil. 2025 - Août 2025",
          desc: "Développement de flux ETL (Pentaho) pour alimenter un Data Warehouse. Intégration de données multi-sources et automatisation du reporting (Power BI)."
        },
        exp3: {
          title: "Stagiaire Développeur Web",
          company: "Kazinov",
          date: "Août 2024 - Sept. 2024",
          desc: "Conception et développement d'une application web de suivi des tâches pour la gestion de projets avec PHP, Bootstrap et MySQL."
        },
        exp4: {
          title: "Freelance",
          company: "Innolia",
          date: "2023 - Présent",
          desc: "Consulting technique et développement de solutions numériques évolutives."
        }
      },
      projects: {
        title: "Projets Clés",
        viewRepo: "Voir le Dépôt",
        proj1: {
          title: "Détection de Fraude par IA",
          tech: "Spring Boot, Apache Kafka, ONNX",
          desc: "Développement d'un pipeline temps réel de détection de fraude intégrant un modèle d'IA (ONNX) pour l'inférence et l'analyse d'anomalies à très faible latence."
        },
        proj2: {
          title: "Irrigation Intelligente",
          tech: "Android, IA, Données IoT",
          desc: "Développement d'une application Android proposant des recommandations d'irrigation en temps réel basées sur les données météo et un modèle d'IA adaptatif."
        },
        proj3: {
          title: "Application Mobile IA (Flutter)",
          tech: "Flutter, Dart, TensorFlow Lite",
          desc: "Création d'une application mobile intégrant un modèle de Deep Learning pour l'inférence en temps réel sur l'appareil, alliant design UI avancé et intégration IA."
        }
      },
      certifications: {
        title: "Certifications"
      },
      contact: {
        title: "Contactez-moi",
        desc: "Que vous ayez une question, une idée de projet, ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
        sayHello: "Dire Bonjour",
        email: "Email",
        location: "Localisation",
        morocco: "Maroc",
        phone: "Téléphone"
      },
      footer: {
        builtWith: "Fait avec React & Vite."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
