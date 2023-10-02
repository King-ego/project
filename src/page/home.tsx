import {FC} from "react";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Home: FC = ()=> {
    const {t} =useTranslation();
    return (
        <div>
            <p>{0} - <Link to={"/project/2"}>1</Link></p>
            <Button>{t("begin")}</Button>
        </div>
    )
}

export default Home;