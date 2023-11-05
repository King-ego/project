import api from "../api";
import {IUsers, ICreateUser, IResponseSession} from "../../interface/IUsers";

export const ListUsers = async (): Promise<IUsers[]> => {
        await new Promise((resolve) => setTimeout(resolve, 3000))

        const users = await api.get("users");
        return users.data;
}

export const CreateUser = async (payload:ICreateUser): Promise<IResponseSession> => {
        const users = await api.post("session", payload);
        return users.data;
}