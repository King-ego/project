import {FC, useCallback, useEffect, useState} from "react";

import UsersGateway from "../../../services/users";
import ImagesGateway from "../../../services/images";

import Loading from "../../../components/Loading";
import Sidebar from "../../../template/Sidebar";
import ImageFromApiComponent from "../../../components/ImageFromApiComponent";
import Flex from "../../../components/Flex";
import Button from "../../../components/Button";
import CreateUserModal from "./CreateUserModal";
import statusRole from "../../../utils/statusRole.ts";
import {IUsers} from "../../../interface/IUsers.ts";
import {IImage} from "../../../interface/IImage.ts";
import GenerateSuccessToast from "../../../services/GenerateSuccessToast";
import {DefaultError} from "../../../services/GenerateErrorToast";

const Users: FC = () => {
    const [statusUser, setStatusUser] = useState(statusRole.INITIAL);
    const [statusImage, setStatusImage] = useState(statusRole.INITIAL);
    const [visible, setVisible] = useState(false);
    const [users, setUsers] = useState<IUsers[]>([]);
    const [images, setImages] = useState<IImage[]>([]);

    const listUser = useCallback(async () => {
        setStatusUser(statusRole.LOADING)
        const users = await UsersGateway().ListUsers();
        if (users) {
            setUsers(users)
            setStatusUser(statusRole.SUCCESS);
            const message = "Usuários encontrados com sucesso";
            GenerateSuccessToast({message})
            return;
        }

        setStatusUser(statusRole.ERROR);
        DefaultError()
    },[])

    const listImage = useCallback(async () => {
        setStatusImage(statusRole.LOADING)
        const images = await ImagesGateway().ListImage();
        if (images) {
            setImages(images)
            setStatusImage(statusRole.SUCCESS);
            const message = "Images encontradas com sucesso";
            GenerateSuccessToast({message})
            return;
        }

        setStatusImage(statusRole.ERROR);
        DefaultError()
    },[])

    useEffect(() => {
        listUser().then(() => console.log("ok"))
    }, []);
    useEffect(() => {
        listImage().then(() => console.log("ok"))
    }, []);


    const closeModal = useCallback((user?: IUsers) => {
        setVisible(false);
        if (user) {
            setUsers(usr => [...usr, user])
        }
    },[])

    return (
        <Sidebar>
            <Loading loading={statusUser === statusRole.LOADING} type="dot" isError={statusUser === statusRole.ERROR}>
                {users?.map(({id, name, email}) => <div key={id}>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>)}
            </Loading>
            <Loading loading={statusImage === statusRole.LOADING} type="dot" isError={statusImage === statusRole.ERROR}>
                <Flex flexDirection="column" gap={12}>
                    {images?.map(({url, id,}) =>
                        <div style={{background: "black", width: "100%", maxWidth: "300px"}} key={id}>
                            <ImageFromApiComponent fileName={url}/>
                        </div>)}
                </Flex>
            </Loading>
            <Button onClick={() => setVisible(true)}>Open Modal</Button>
            <CreateUserModal closeModal={closeModal} visibleModal={visible}/>
        </Sidebar>)
}

export default Users