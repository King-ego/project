import api from "../api";
import {isAxiosError, AxiosError, AxiosResponse} from "axios";
import {IUsers, ICreateLogin, IResponseSession, ICreateUser} from "../../interface/IUsers";
import GenerateErrorToast from "../GenerateErrorToast";
import {configCreateLogin, configCreateUser, configListUser} from "./config";
import IUsersGateway from "../../interface/infra/http/IUsersGateway";

class UsersGatewayClass implements IUsersGateway{
    public async ListUsers(): Promise<IUsers[] | void> {
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

    public async CreateLogin(payload: ICreateLogin): Promise<IResponseSession | void> {
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

    public async CreateUser(payload: ICreateUser): Promise<IUsers | void> {
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

}

const UsersGateway = () => {
    return new UsersGatewayClass();
}

export default UsersGateway;
