import {FC} from "react";
import IChildren from "../../interface/IChildren";
import {Pulse, Spinner, Blink, Dot, ProgressClock} from "./styled";

interface ILoadingProps extends IChildren {
    loading: boolean;
    type?: "spinner" | "pulse" | "blink" | "dot" | "progress_clock";
    isError?: boolean;
}

const Loading:FC<ILoadingProps> = ({children, loading, type, isError}) => {
    if (isError) {
        return (<div>{"Ocorreu um error na busca"}</div>)
    }
    if(loading) {
        if (type === "pulse") return <Pulse/>

        if (type === "blink") return <Blink />

        if (type === "dot") return <Dot />

        if (type === "progress_clock") return <ProgressClock />

        return <Spinner />
    }
    return  children
}

export default Loading;