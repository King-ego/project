import {FC} from 'react';
import Provider from "./provider";
import Container from "./components/Container";
import RoutersApplication from "./routes";

const App: FC = () => <Container><Provider><RoutersApplication/></Provider></Container>
export default App
