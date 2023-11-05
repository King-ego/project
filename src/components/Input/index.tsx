import {InputField} from "./styled"
import {FC, InputHTMLAttributes} from "react";

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement>{
    error?: string;
    blur?: boolean
}

const Input: FC<IPropsInput> = ({ error, blur, ...rest }) => {
    return (<><InputField error={!!error && blur} {...rest} />
        {error && blur ? <>{error}</>: null}</>)
}

export default Input;

