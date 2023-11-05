import {InputField, MessageError} from "./styled"
import {FC, InputHTMLAttributes} from "react";

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement>{
    error?: string;
    touched?: boolean
}

const Input: FC<IPropsInput> = ({ error, touched, ...rest }) => {
    return (
        <>
            <InputField error={!!error && touched} {...rest} />
            {error && touched ? <MessageError>{error}</MessageError>: null}
        </>
    )
}

export default Input;

