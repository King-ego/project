import {FC, useMemo} from "react";
import {ActionAnchor, Anchor, Header, Img, Theme, Translation} from "./styled";
import Flex from "../../Flex";
import {FaGlobe, FaMoon, FaSun} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useTranslation} from "react-i18next";

const HeaderPublic: FC = () => {
    const {translation: {lang}, theme: {type}, auth: {token}} = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const {t} = useTranslation();

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
    const swithTextLogin = useMemo(()=> {
        return token ? "link_app" :"link_login";

    }, [token])
    return (
        <Header>
            <Img src="/project/images/logo.svg" alt="sfdsdfc"/>
            <ActionAnchor>
                <Anchor to="/project/admin/login">{t(`home.header.${swithTextLogin}`)}</Anchor>
                <Flex>
                    <Translation onClick={() => translationSwicth()}>{t("language")} <FaGlobe
                        className="icon-style"/></Translation>
                    <Theme onClick={() => switchTheme()}>{type === "dark" ? <FaMoon className="icon-style"/> :
                        <FaSun className="icon-style"/>}</Theme>
                </Flex>
            </ActionAnchor>
        </Header>
    )
}

export default HeaderPublic;