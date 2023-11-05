import {FC} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {ContentPage} from "./styled";
import Header from "../../components/Header";


const Home: FC = () => {
    const {t} = useTranslation();


    return (
        <ContentPage>
            <Header/>
            <p>{0} - <Link to={"/project/2"}>1</Link></p>
            <Link to="/project/admin/users">{t("begin")}</Link>
        </ContentPage>
    )
}

export default Home;