import {memo, FC, useCallback} from "react";
import Modal from "../../../../components/Modal";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import validate from "./validate";
import Input from "../../../../components/Input";
import Flex from "../../../../components/Flex";

interface ICreateUserModal {
    closeModal: () => void
    visibleModal: boolean
}

interface IPropsSubmit {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
}

const CreateUserModal: FC<ICreateUserModal> = memo(({visibleModal, closeModal}) => {
    const submit = useCallback(async (data: IPropsSubmit) => {
        const userSchema = Yup.object(validate)

        await userSchema.validate(data)

        console.log(data)
    }, [])
    return (
        <Modal.Container visible={visibleModal}>
            <Modal.Content>
                <Modal.Header title="Create User" close={closeModal}/>

                <Formik initialValues={{
                    name: "",
                    password: "",
                    email: "",
                    confirm_password: ""
                }} onSubmit={submit} validationSchema={Yup.object().shape(validate)}>
                    {({touched, errors,}) => <Form>
                        <Modal.Context>
                            <Flex flexDirection="column" gap={8}>
                                <Input error={errors.email} touched={touched.email} id="email" name="email"
                                       placeholder="digite seu email" type="email"/>
                                <Input error={errors.name} touched={touched.name} id="name" name="name"
                                       placeholder="digite seu nome"/>
                                <Input error={errors.password} touched={touched.password} id="password" name="password"
                                       placeholder="digite sua senha" type="password"/>
                                <Input error={errors.confirm_password} touched={touched.confirm_password}
                                       id="confirm_password" name="confirm_password"
                                       placeholder="digite novamente sua senha" type="password"/>
                            </Flex>
                        </Modal.Context>
                        <Modal.Actions>
                            <Modal.Action onClick={closeModal}>Cancelar</Modal.Action>
                            <Modal.Action type="submit">Salvar</Modal.Action>
                        </Modal.Actions>
                    </Form>
                    }
                </Formik>
            </Modal.Content>
        </Modal.Container>)
})

export default CreateUserModal;