import { FC } from "react";
import {useQuery} from "@tanstack/react-query";

import Loading from "../../../components/Loading";
import {requestUsers} from "../../../services/users/get";
import Sidebar from "../../../template/Sidebar";

const Users: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['respoUsers'],
        queryFn: requestUsers,

    })
    return (
        <Sidebar>
            <Loading loading={isLoading} type="blink">
                {data?.map(({id, name, email}) => <div key={id}>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>)}
            </Loading>
        </Sidebar>)
}

export default Users