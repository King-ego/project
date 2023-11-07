import {FC, useEffect, useState} from "react";

import { ListUsers } from "../../../services/users";
import { ListImage } from "../../../services/images";

import Loading from "../../../components/Loading";
import Sidebar from "../../../template/Sidebar";
import ImageFromApiComponent from "../../../components/ImageFromApiComponent";
import Flex from "../../../components/Flex";
import Button from "../../../components/Button";
import CreateUserModal from "./CreateUserModal";
import statusRole from "../../../utils/statusRole.ts";
import {IUsers} from "../../../interface/IUsers.ts";
import {IImage} from "../../../interface/IImage.ts";

const Users: FC = () => {
    const [statusUser, setStatusUser] = useState(statusRole.INITIAL);
    const [statusImage, setStatusImage] = useState(statusRole.INITIAL);
    const [visible, setVisible] = useState(false);
    const [users, setUsers] = useState<IUsers[]>([]);
    const [images, setImages] = useState<IImage[]>([]);
    async function listUser(){
        setStatusUser(statusRole.LOADING)
        const users = await ListUsers();
        if (users) {
            setUsers(users)
            setStatusUser(statusRole.SUCCESS);
            return;
        }

        setStatusUser(statusRole.ERROR);
    }
    async function listImage(){
        setStatusImage(statusRole.LOADING)
        const images = await ListImage();
        if (images) {
            setImages(images)
            setStatusImage(statusRole.SUCCESS);
            return;
        }

        setStatusImage(statusRole.ERROR);
    }

    useEffect(() => {
        listUser().then(()=>console.log("ok"))
    }, []);
    useEffect(() => {
        listImage().then(()=>console.log("ok"))
    }, []);


    function closeModal(user?:IUsers){
        setVisible(false);
        if(user) {
            setUsers(usr => [...usr, user])
        }
    }

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
                    {images?.map(({url, id, })=>
                        <div style={{background: "black", width: "100%", maxWidth: "300px"}} key={id}>
                            <ImageFromApiComponent fileName={url} />
                        </div>)}
                </Flex>
            </Loading>
            <Button onClick={()=>setVisible(true)}>Open Modal</Button>
            <CreateUserModal closeModal={closeModal} visibleModal={visible} />
        </Sidebar>)
}

export default Users