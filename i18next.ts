import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/project/locales/{{lng}}.json',
        },
        lng: 'pt-BR',
        fallbackLng: 'pt-BR',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;