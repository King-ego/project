import {FC} from "react";
import Button from "../components/Button";
import {Link} from "react-router-dom";

const Home: FC = ()=> {
    return (
        <div>
            <p>{0} - <Link to={"/project/2"}>1</Link></p>
            <Button>Ola</Button>
        </div>
    )
}

export default Home;