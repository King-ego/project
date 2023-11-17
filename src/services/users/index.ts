import api from "../api";
import {isAxiosError, AxiosError, AxiosResponse} from "axios";
import {IUsers, ICreateLogin, IResponseSession, ICreateUser} from "../../interface/IUsers";
import GenerateErrorToast from "../GenerateErrorToast";
import {configCreateLogin, configCreateUser, configListUser} from "./config";


export const ListUsers = async (): Promise<IUsers[] | void> => {
    /*await new Promise((resolve) => setTimeout(resolve, 3000))*/
    try {
        const users = await api.get("users");
        if(isAxiosError(users)){
            const err = (users as AxiosError).response as AxiosResponse;
            GenerateErrorToast({err, config: configListUser});
        }
        return users.data as IUsers[];
    } catch {
        return;
    }


}

export const CreateLogin = async (payload: ICreateLogin): Promise<IResponseSession | void> => {
    try {
        const users = await api.post("session", payload);
        if(isAxiosError(users)){
            const err = (users as AxiosError).response as AxiosResponse;
            GenerateErrorToast({err, config: configCreateLogin});
        }
        return users.data as IResponseSession;
    } catch {
        return;
    }
}

export const CreateUser = async (payload: ICreateUser): Promise<IUsers | void> => {
    try {
        const users = await api.post("users", payload);
        if(isAxiosError(users)){
            const err = (users as AxiosError).response as AxiosResponse;

            GenerateErrorToast({err, config: configCreateUser});
        }
        return users.data as IUsers;
    } catch (err){
        return;
    }

}