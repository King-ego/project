import {FC, useEffect} from 'react';
import api from "./services/api.ts";
import Provider from "./provider";

const App: FC = () => {
    useEffect(() => {
        api.get("/").then((res) => console.log(res)).catch((err) => console.error(err))
    }, [])
    return <Provider>Ola 56</Provider>
}
export default App
