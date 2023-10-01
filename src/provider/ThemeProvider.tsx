import { ThemeProvider as Provider } from "styled-components"
import Theme from "../themes/GlobalTheme.ts";
import {FC} from "react";
import IChildren from "../interface/IChildren.ts";
import GlobalStyle from "../themes/style/GlobalStyle.ts";

const ThemeProvider: FC<IChildren> = ({children}) => {
    return (
        <Provider theme={Theme}>
            {children}
            <GlobalStyle />
        </Provider>
    )
}

export default ThemeProvider;