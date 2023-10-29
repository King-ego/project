import {FC} from "react";

import ThemeProvider from "./ThemeProvider";
import ReduxProvider from "./ReduxProvider";
import TranslationProvider from "./TranslationProvider";
import AuthProvider from "./AuthProvider";
import ReactQueryProvider from "./ReactQueryProvider";

import IChildren from "../interface/IChildren";

const Provider: FC<IChildren> = ({children}) => {
    return (
        <ReduxProvider>
            <ReactQueryProvider>
                <ThemeProvider>
                    <TranslationProvider>
                        <AuthProvider>
                            {children}
                        </AuthProvider>
                    </TranslationProvider>
                </ThemeProvider>
            </ReactQueryProvider>
        </ReduxProvider>
    )
}

export default Provider;