import {toast} from "react-toastify";

interface IGenerateSuccessToast {
    message?: string
}
const GenerateSuccessToast = ({message}:IGenerateSuccessToast) => {
    const existMessage = message || "Sucesso na requisição"
    toast.success(existMessage);
}

export default GenerateSuccessToast;