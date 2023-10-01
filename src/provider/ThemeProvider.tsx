import { ThemeProvider as Provider } from "styled-components"
import Theme from "../themes/GlobalTheme.ts";
import {FC, useEffect} from "react";
import IChildren from "../interface/IChildren.ts";
import GlobalStyle from "../themes/style/GlobalStyle.ts";
import {useDispatch} from "react-redux";

const ThemeProvider: FC<IChildren> = ({children}) => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch({type: "theme/getTheme"})
    }, [dispatch])
    return (
        <Provider theme={Theme}>
            {children}
            <GlobalStyle />
        </Provider>
    )
}

export default ThemeProvider;