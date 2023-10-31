import { FC } from "react";
import {useQuery} from "@tanstack/react-query";

import Loading from "../../../components/Loading";
import {requestUsers} from "../../../services/users";
import Sidebar from "../../../template/Sidebar";

const Users: FC = () => {
    const {data, isLoading, isError,} = useQuery({
        queryKey: ['responseUsers'],
        queryFn: requestUsers,
    })
    return (
        <Sidebar>
            <Loading loading={isLoading} type="dot" isError={isError}>
                {data?.map(({id, name, email}) => <div key={id}>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>)}
            </Loading>
        </Sidebar>)
}

export default Users