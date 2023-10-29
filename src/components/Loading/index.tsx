import {FC} from "react";
import IChildren from "../../interface/IChildren";
import {Pulse, Spinner, Blink, Dot} from "./styled";

interface ILoadingProps extends IChildren {
    loading: boolean;
    type?: "spinner" | "pulse" | "blink";
}

const Loading:FC<ILoadingProps> = ({children, loading, type}) => {
    if(loading) {
        if (type === "pulse") {
            return <Pulse/>
        }
        if (type === "blink") {
            return (
                <Blink>
                    <Dot animate_name="blink"/>
                    <Dot animate_name="mid_blink"/>
                    <Dot animate_name="end_blink"/>
                </Blink>)
        }
        return <Spinner />
    }
    return  children
}

export default Loading;