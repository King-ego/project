import {Provider} from "react-redux";
import {FC} from "react";
import IChildren from "../interface/IChildren";
import store from "../store";

const ReduxProvider: FC<IChildren> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider;