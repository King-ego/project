import {FC} from "react";

import ThemeProvider from "./ThemeProvider";
import ReduxProvider from "./ReduxProvider";
import TranslationProvider from "./TranslationProvider";
import AuthProvider from "./AuthProvider";

import IChildren from "../interface/IChildren";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Provider: FC<IChildren> = ({children}) => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <TranslationProvider>
                    <AuthProvider>
                        {children}
                        <ToastContainer />
                    </AuthProvider>
                </TranslationProvider>
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default Provider;