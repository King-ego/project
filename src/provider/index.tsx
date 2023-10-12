import {FC} from "react";
import ThemeProvider from "./ThemeProvider";
import ReduxProvider from "./ReduxProvider";
import TranslationProvider from "./TranslationProvider";
import AuthProvider from "./AuthProvider.tsx";
import IChildren from "../interface/IChildren.ts";

const Provider: FC<IChildren> = ({children}) => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <TranslationProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </TranslationProvider>
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default Provider;