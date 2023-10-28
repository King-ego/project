import {FC} from "react";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ContentPage} from "./styled";
import Header from "../../components/Header";

const Index: FC = () => {
    const {t} = useTranslation();
    return (
        <ContentPage>
            <Header />
            <p>{0} - <Link to={"/project/2"}>1</Link></p>
            <Button>{t("begin")}</Button>
        </ContentPage>
    )
}

export default Index;