import {useTranslation} from "react-i18next";
import {FC, useEffect} from "react";
import IChildren from "../interface/IChildren";
import {RootState} from "../store";
import {useSelector, useDispatch} from "react-redux";

const TranslationProvider:FC<IChildren> = ({children}) => {
    const {translation: {lang}} = useSelector((state:RootState) => state)
    const {i18n} = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:"translation/getLang"})
    }, [dispatch]);
    useEffect (()=> {
        i18n.changeLanguage(lang).then(()=> console.log("✌"));
    },[lang, i18n])
    return (<>{children}</>)
}

export default TranslationProvider