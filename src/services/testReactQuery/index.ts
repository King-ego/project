import axios from "axios";

export const fetchJsonPlaceholder = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    console.log(id);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id || ""}`)
    return  id ? [response.data] : response.data
}