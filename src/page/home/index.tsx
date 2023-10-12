import {FC} from "react";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { ContentPage, Header, Img, ActionAnchor, Anchor, Translation } from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";

const Index: FC = ()=> {
    const {t} =useTranslation();
    const {translation: {lang}} =useSelector((state: RootState)=> state);
    const dispatch = useDispatch();
    const translationSwicth = () :void => {
        const idioma = lang as unknown as "pt-BR" | "en" | "es" | "fr"
        const newIdioma = {
            "pt-BR": "en",
            "en": "es",
            "es": "fr",
            "fr": "pt-BR",
        }

        dispatch({type:"translation/switchLang", payload: newIdioma[idioma]})
    }
    return (
        <ContentPage>
            <Header>
                <Img src="/project/images/logo.svg" alt="sfdsdfc"/>
                <ActionAnchor>
                    <Anchor to="/project/admin/login">{t("home.header.link_login")}</Anchor>
                    <Translation onClick={()=>translationSwicth()}>{lang}</Translation>
                </ActionAnchor>
            </Header>
            <p>{0} - <Link to={"/project/2"}>1</Link></p>
            <Button>{t("begin")}</Button>
        </ContentPage>
    )
}

export default Index;