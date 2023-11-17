export const configCreateUser = [{
    status: 422, message: "Já existe um usário com esse email"
}]

export const configListUser = [
    {status: 403, message: "Token Inválido"}
]

export const configCreateLogin = [
    {status: 401, message: "Credenciais incorretas"}
]
