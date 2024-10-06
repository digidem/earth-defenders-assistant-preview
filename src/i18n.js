import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // English translations
          "heroTitle": "Empower Indigenous Communities with AI",
          "heroDescription": "Harnessing offline-first technology to preserve languages, protect territories, and ensure data sovereignty for communities on the front lines of climate justice.",
          "listenToPodcast": "Listen to Podcast",
          "aboutTitle": "About the Project",
          "howItWorksTitle": "How It Works",
          "featuresTitle": "Key Features",
          "projectOverviewTitle": "Project Overview",
          "projectObjectives": "Project Objectives",
          "expectedOutcomes": "Expected Outcomes",
          "readyToDefend": "Ready to Defend the Earth?",
          "startUsing": "Start using Earth Defenders Assistant today!",
          "talkToUs": "Talk to us",
          "getInTouch": "Get in Touch",
          // Add more translations here
        }
      },
      es: {
        translation: {
          // Spanish translations
          "heroTitle": "Empoderar a las Comunidades Indígenas con IA",
          "heroDescription": "Aprovechando la tecnología sin conexión para preservar idiomas, proteger territorios y garantizar la soberanía de datos para las comunidades en primera línea de la justicia climática.",
          "listenToPodcast": "Escuchar el Podcast",
          "aboutTitle": "Sobre el Proyecto",
          "howItWorksTitle": "Cómo Funciona",
          "featuresTitle": "Características Principales",
          "projectOverviewTitle": "Resumen del Proyecto",
          "projectObjectives": "Objetivos del Proyecto",
          "expectedOutcomes": "Resultados Esperados",
          "readyToDefend": "¿Listo para Defender la Tierra?",
          "startUsing": "¡Comienza a usar Earth Defenders Assistant hoy!",
          "talkToUs": "Habla con nosotros",
          "getInTouch": "Ponte en Contacto",
          // Add more translations here
        }
      },
      pt: {
        translation: {
          // Portuguese translations
          "heroTitle": "Capacitar Comunidades Indígenas com IA",
          "heroDescription": "Aproveitando a tecnologia offline-first para preservar línguas, proteger territórios e garantir a soberania de dados para comunidades na linha de frente da justiça climática.",
          "listenToPodcast": "Ouvir o Podcast",
          "aboutTitle": "Sobre o Projeto",
          "howItWorksTitle": "Como Funciona",
          "featuresTitle": "Principais Características",
          "projectOverviewTitle": "Visão Geral do Projeto",
          "projectObjectives": "Objetivos do Projeto",
          "expectedOutcomes": "Resultados Esperados",
          "readyToDefend": "Pronto para Defender a Terra?",
          "startUsing": "Comece a usar o Earth Defenders Assistant hoje!",
          "talkToUs": "Fale conosco",
          "getInTouch": "Entre em Contato",
          // Add more translations here
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;