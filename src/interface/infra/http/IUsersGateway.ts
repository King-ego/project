import {ICreateLogin, ICreateUser, IResponseSession, IUsers} from "../../IUsers";

export default interface IUsersGateway {
    ListUsers(): Promise<IUsers[] | void>
    CreateLogin(payload: ICreateLogin): Promise<IResponseSession | void>
    CreateUser(payload: ICreateUser): Promise<IUsers | void>
}