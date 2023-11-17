import {AxiosResponse} from "axios"
import {toast} from "react-toastify";
import Icon from "../../utils/Icons";

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

  toast.error(
      <div>
        <p style={{display: "flex"}}><Icon.BI.BiError style={{color: "red"}} /> {statusError}</p>
        <p>{messageError}</p>
      </div>
  );
  console.log({messageError, statusError});
  console.log(err);
}

export const DefaultError = () => {
  const messageError = "intern server error";
  const statusError = 500;

  toast.error(
      <div>
        <p style={{display: "flex"}}><Icon.BI.BiError style={{color: "red"}} /> {statusError}</p>
        <p>{messageError}</p>
      </div>
  );
}

export default GenerateErrorToast;