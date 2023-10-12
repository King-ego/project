import { ThemeProvider as Provider } from "styled-components"
import Theme from "../themes/GlobalTheme";
import {FC, useEffect} from "react";
import IChildren from "../interface/IChildren";
import GlobalStyle from "../themes/style/GlobalStyle";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store"

const ThemeProvider: FC<IChildren> = ({children}) => {
    const {theme: {type}} = useSelector((state:RootState)=> state)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch({type: "theme/getTheme"})
    }, [dispatch])
    return (
        <Provider theme={Theme[type]}>
            {children}
            <GlobalStyle />
        </Provider>
    )
}

export default ThemeProvider;