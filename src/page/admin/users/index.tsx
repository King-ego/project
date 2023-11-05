import { FC } from "react";
import { useQuery } from "@tanstack/react-query";

import { ListUsers } from "../../../services/users";
import { ListImage } from "../../../services/images";

import Loading from "../../../components/Loading";
import Sidebar from "../../../template/Sidebar";
import ImageFromApiComponent from "../../../components/ImageFromApiComponent";
import Flex from "../../../components/Flex";

const Users: FC = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['responseUsers'],
        queryFn: ListUsers,
    })
    const {data: dataImage, isLoading: isLoadingImage, isError: isErrorImage} = useQuery({
        queryKey: ['ListImages'],
        queryFn: ListImage,
    })
    return (
        <Sidebar>
            <Loading loading={isLoading} type="dot" isError={isError}>
                {data?.map(({id, name, email}) => <div key={id}>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>)}
            </Loading>
            <Loading loading={isLoadingImage} type={"spinner"} isError={isErrorImage}>
                <Flex flexDirection="column" gap={12}>
                    {dataImage?.map(({url, id, })=>
                        <div style={{background: "black", width: "100%", maxWidth: "300px"}} key={id}>
                            <ImageFromApiComponent fileName={url} />
                        </div>)}
                </Flex>
            </Loading>
        </Sidebar>)
}

export default Users