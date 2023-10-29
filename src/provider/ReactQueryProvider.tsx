import {FC} from "react";
import {QueryClient, QueryClientProvider as Provider} from "@tanstack/react-query";

import IChildren from "../interface/IChildren";
const ReactQueryProvider:FC<IChildren> = ({children}) => {
    const queryClient = new QueryClient();
    return <Provider client={queryClient}>{children}</Provider>
}

export default ReactQueryProvider;