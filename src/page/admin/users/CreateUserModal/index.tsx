import {memo, FC, useCallback, useState} from "react";
import Modal from "../../../../components/Modal";
import {Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import validate from "./validate";
import Input from "../../../../components/Input";
import Flex from "../../../../components/Flex";
import UsersGateway from "../../../../services/users";
import {IUsers} from "../../../../interface/IUsers.ts";
import statusRole from "../../../../utils/statusRole.ts";
import Loading from "../../../../components/Loading";
import {useTranslation} from "react-i18next";

interface ICreateUserModal {
    closeModal: (user?:IUsers) => void
    visibleModal: boolean
}

interface IPropsSubmit {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
}

interface IDataSubmit {
    formik: FormikHelpers<IPropsSubmit>
    data: IPropsSubmit
}

const CreateUserModal: FC<ICreateUserModal> = memo(({visibleModal, closeModal}) => {
    const [status, setStatus] = useState(statusRole.INITIAL);

    const {t} = useTranslation();
    async function createUser(data: IPropsSubmit) {
        setStatus(statusRole.LOADING)
        const user = await UsersGateway().CreateUser(data);
        if (user) {
            setStatus(statusRole.SUCCESS)
            return user;
        }
        setStatus(statusRole.ERROR)
    }

    const submit = useCallback(async ({data, formik}: IDataSubmit) => {
        const userSchema = Yup.object(validate)

        await userSchema.validate(data)
        const user = await createUser(data)
        if(user) {
            formik.resetForm()
            closeModal(user);
        }
    }, [closeModal])
    return (
        <Modal.Container visible={visibleModal}>
            <Modal.Content>
                <Modal.Header title={t("admin.users.create_user")} close={()=>closeModal()}/>
                <Formik initialValues={{
                    name: "",
                    password: "",
                    email: "",
                    confirm_password: ""
                }}
                        onSubmit={
                            (data, formik) =>
                            submit({data, formik})
                         }
                        validationSchema={Yup.object().shape(validate)}>
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
                            <Modal.Action onClick={()=>closeModal()}>Cancelar</Modal.Action>
                            <Modal.Action type="submit" bg="success">
                                <Loading loading={status === statusRole.LOADING}>Salvar</Loading>
                            </Modal.Action>
                        </Modal.Actions>
                    </Form>
                    }
                </Formik>
            </Modal.Content>
        </Modal.Container>)
})

export default CreateUserModal;