import {FC} from 'react';
import Provider from "./provider";
import Container from "./components/Container";
import Routers from "./routes";

const App: FC = () => <Container><Provider><Routers/></Provider></Container>
export default App
