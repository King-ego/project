import {FC, useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import validate from "./validete";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {CreateLogin} from "../../../services/users";
import {Container, Content} from "./styled";
import Flex from "../../../components/Flex";
import statusRole from "../../../utils/statusRole.ts";
import Loading from "../../../components/Loading";
import {DefaultError} from "../../../services/GenerateErrorToast";

interface IFormUser {
    email: string;
    password: string;
}

const Login: FC = () => {
    const [statusLogin, setStatusLogin] = useState(statusRole.INITIAL)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const createLogin = useCallback(async (value: IFormUser) => {
        setStatusLogin(statusRole.LOADING)
        const login = await CreateLogin(value);
        if (login) {
            setStatusLogin(statusRole.SUCCESS);
            return login;
        }

        setStatusLogin(statusRole.ERROR);
        DefaultError()
    }, [])
    const submit = async (value: IFormUser): Promise<void> => {
        const userSchema = Yup.object(validate)

        await userSchema.validate(value)
        const login = await createLogin(value);
        if (login) {
            dispatch({type: "auth/setToken", payload: login.token});
            navigate("/project/admin/app");
            return;
        }

    }
    return (
        <Container>
            <Content>
                <Formik initialValues={{
                    password: "",
                    email: ""
                }} validationSchema={Yup.object().shape(validate)} onSubmit={submit}>
                    {(props) => (
                        <Form>
                            <Flex flexDirection="column" gap={5}>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@email.com"
                                    error={props.errors.email}
                                    touched={props.touched.email}
                                />
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Senha"
                                    error={props.errors.password}
                                    touched={props.touched.password}
                                />
                                <Button type="submit">
                                    <Loading loading={statusLogin === statusRole.LOADING}>Entrar</Loading>
                                </Button>
                            </Flex>
                        </Form>)}
                </Formik>
            </Content>
        </Container>
    )
}

export default Login;