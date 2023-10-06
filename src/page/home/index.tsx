import { FC } from "react";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { ContentPage, Header, Img, ActionAnchor, Anchor } from "./styled.ts";

const Index: FC = ()=> {
    const {t} =useTranslation();
    return (
        <ContentPage>
            <Header>
                <Img src="/images/logo.svg" alt="sfdsdfc"/>
                <ActionAnchor>
                    <Anchor to="/project/admin">Admin</Anchor>
                </ActionAnchor>
            </Header>
            <p>{0} - <Link to={"/project/2"}>1</Link></p>
            <Button>{t("begin")}</Button>
        </ContentPage>
    )
}

export default Index;