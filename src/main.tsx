/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";

i18next.init({
    interpolation: {
        escapeValue: false,
    },
    lng: "en",
    resources: {
        en: {
            global: global_en,
        },
        fr: {
            global: global_fr,
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <I18nextProvider i18n={i18next}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
    </StrictMode>
);
