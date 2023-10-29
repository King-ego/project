import api from "../../api.ts";
import IUsers from "../../../interface/IUsers.ts";

export const requestUsers = async (): Promise<IUsers[]> => {
    /*await new Promise((resolve) => setTimeout(resolve, 3000))*/
    const users = await api.get("users");

    return users.data;
}