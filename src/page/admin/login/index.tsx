import {FC, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import validate from "./validete";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {createUser} from "../../../services/users";
import {Container, Content} from "./styled";
import Flex from "../../../components/Flex";

interface IFormUser {
    email: string;
    password: string;
}

const Login: FC = ()=> {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const requestUser = useCallback(async (value: IFormUser) => {
        return await createUser(value)
    },[])
    const submit = async (value: IFormUser):Promise<void> => {
        const userSchema = Yup.object(validate)

        await userSchema.validate(value)

        console.log({value})
        try {
            const data = await requestUser(value);
            dispatch({type: "auth/setToken", payload: data.token})
            navigate("/project/admin/app");
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <Container>
            <Content>
                <Formik initialValues={{
                    password: "",
                    email: ""
                }}  validationSchema={Yup.object().shape(validate)} onSubmit={submit}>
                    {(props)=>(
                    <Form>
                        <Flex flexDirection="column" gap={5}>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="email@email.com"
                                error={props.errors.email}
                                blur={props.touched.email}
                            />
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Senha"
                                error={props.errors.password}
                                blur={props.touched.password}
                            />
                            <Button type="submit" onClick={() => console.log({props})}>Entrar</Button>
                        </Flex>
                    </Form>)}
                </Formik>
            </Content>
        </Container>
    )
}

export default Login;