import {FC} from "react";
import IChildren from "../interface/IChildren.ts";
import ThemeProvider from "./ThemeProvider.tsx";
import ReduxProvider from "./ReduxProvider.tsx";

const Provider: FC<IChildren> = ({children}) => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default Provider;