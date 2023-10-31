import * as Yup from "yup";

export default {
    email: Yup.string().email("Email Inválido").required("Email é Obrigatório"),
    password: Yup.string().required("Senha é Obrigatória")
}
