import * as Yup from "yup"

export default {
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string().required("Senha é obrigatório").min(4, "Senha precisa ter mais que 6 caracteres"),
    confirm_password: Yup.string().required("Este campo é obrigatório").oneOf([Yup.ref("password"), ""], "Senhas não correnpondem")
}