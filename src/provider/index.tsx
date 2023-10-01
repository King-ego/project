import {FC} from "react";
import ThemeProvider from "./ThemeProvider.tsx";
import ReduxProvider from "./ReduxProvider.tsx";
import RouterProvider from "./RouterProvider.tsx";

const Provider: FC = () => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <RouterProvider />
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default Provider;