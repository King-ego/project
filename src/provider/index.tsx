import {FC} from "react";
import ThemeProvider from "./ThemeProvider.tsx";
import ReduxProvider from "./ReduxProvider.tsx";
import RouterProvider from "./RouterProvider.tsx";
import TranslationProvider from "./TranslationProvider.tsx";

const Provider: FC = () => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <TranslationProvider>
                    <RouterProvider />
                </TranslationProvider>
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default Provider;