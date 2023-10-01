import {FC} from "react";
import IChildren from "../interface/IChildren.ts";
import ThemeProvider from "./ThemeProvider.tsx";

const Provider:FC<IChildren> = ({children}) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Provider;