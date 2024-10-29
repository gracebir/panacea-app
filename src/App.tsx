/** @format */

import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Actions from "./pages/Actions";
import NotFound from "./pages/NotFound";
import PageTitle from "./components/PageTitle";
import { useTranslation } from "react-i18next";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./sections/Footer"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));

function App() {
    const { pathname } = useLocation();
    const [t] = useTranslation("global");

    return (
        <Suspense>
            <Header
                isBgwhite={
                    pathname.includes("download-app") ||
                    pathname.includes("term-condition") ||
                    pathname.includes("privacy-policy")
                }
            />
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <PageTitle title={t("title.home")} />
                            <Home />
                        </>
                    }
                />
                <Route
                    path='/download-app'
                    element={
                        <>
                            <PageTitle title={t("title.download")} />
                            <Actions />
                        </>
                    }
                />
                <Route
                    path='/term-condition'
                    element={
                        <>
                            <PageTitle title={t("title.terms")} />
                            <Terms />
                        </>
                    }
                />
                <Route
                    path='/privacy-policy'
                    element={
                        <>
                            <PageTitle title={t("title.privacy")} />
                            <Privacy />
                        </>
                    }
                />
                <Route
                    path='*'
                    element={
                        <>
                            <PageTitle title={t("title.notFound")} />
                            <NotFound />
                        </>
                    }
                />
            </Routes>
            <Footer />
        </Suspense>
    );
}

export default App;
