import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ContentPage} from "./styled";
import {useQuery} from "@tanstack/react-query"

import Button from "../../components/Button";
import Header from "../../components/Header";
import {fetchJsonPlaceholder} from "../../services/testReactQuery";
import Loading from "../../components/Loading";


const Home: FC = () => {
    const {t} = useTranslation();
    const [id, setId] = useState<number>(0);
    const {data, isLoading} = useQuery({
        queryKey: ['respoData', id],
        queryFn: ()=>fetchJsonPlaceholder(id),

    })

    return (
        <ContentPage>
            <Header/>
            <p>{0} - <Link to={"/project/2"}>1</Link></p>
            <Button onClick={()=>setId(20)}>{t("begin")}</Button>
            <Button onClick={()=>setId(0)}>{t("begin")}</Button>
            <Loading loading={isLoading} type="blink">
                {data?.map((ano: { id: number, title: string }) => <div
                    key={ano.id}>{ano.title}</div>)}
            </Loading>
        </ContentPage>
    )
}

export default Home;