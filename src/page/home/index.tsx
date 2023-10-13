import {FC} from "react";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ContentPage, Header, Img, ActionAnchor, Anchor, Translation, Theme} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {FaGlobe, FaMoon, FaSun} from "react-icons/fa"
import Flex from "../../components/Flex";

const Index: FC = () => {
    const {t} = useTranslation();
    const {translation: {lang}, theme: {type}} = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    function switchTheme() {
        dispatch({type: "theme/switchTheme"})
    }

    const translationSwicth = (): void => {
        const idioma = lang as unknown as "pt-BR" | "en" | "es" | "fr"
        const newIdioma = {
            "pt-BR": "en",
            "en": "es",
            "es": "fr",
            "fr": "pt-BR",
        }

        dispatch({type: "translation/switchLang", payload: newIdioma[idioma]})
    }
    return (
        <ContentPage>
            <Header>
                <Img src="/project/images/logo.svg" alt="sfdsdfc"/>
                <ActionAnchor>
                    <Anchor to="/project/admin/login">{t("home.header.link_login")}</Anchor>
                    <Flex>
                        <Translation onClick={() => translationSwicth()}>{t("language")} <FaGlobe
                            className="icon-style"/></Translation>
                        <Theme onClick={() => switchTheme()}>{type === "dark" ? <FaMoon className="icon-style"/> :
                            <FaSun className="icon-style"/>}</Theme>
                    </Flex>
                </ActionAnchor>
            </Header>
            <p>{0} - <Link to={"/project/2"}>1</Link></p>
            <Button>{t("begin")}</Button>
        </ContentPage>
    )
}

export default Index;