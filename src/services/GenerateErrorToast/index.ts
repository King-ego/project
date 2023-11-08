import {AxiosResponse} from "axios"

interface IGenerateErrorToast {
  err: AxiosResponse;
  config?: {status: number; message: string}[];
}
const GenerateErrorToast = ({err, config=[]}:IGenerateErrorToast) => {
  let messageError = "intern server error";
  let statusError = 500;
  config?.forEach(({status, message})=> {
    if(err.status === status) {
      messageError = message
      statusError = status
    }
  } )
  console.log({messageError, statusError});
  console.log(err);
}

export default GenerateErrorToast;