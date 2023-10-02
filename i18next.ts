import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
/*const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next"
        }
    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next"
        }
    }
};*/

await i18n
    .use(Backend) // Adicione o backend para carregar traduções a partir de arquivos JSON
    .use(initReactI18next)
    .init({
        backend: {
            // Define o caminho para os arquivos de tradução
            loadPath: '/locales/{{lng}}.json',
        },
        lng: 'pt-BR',
        fallbackLng: 'pt-BR',
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;