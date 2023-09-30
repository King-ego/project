import {FC, useEffect} from 'react'
import './App.css'
import api from "./services/api.ts";

const App: FC = () => {
    useEffect(() => {
        api.get("/").then((res) => console.log(res)).catch((err) => console.error(err))
    }, [])
    return <div>Ola 1</div>
}
export default App
