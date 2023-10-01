import {FC} from "react";
import {RootState} from "../store"
import {useSelector} from "react-redux";
import Button from "../components/Button";
import {Link} from "react-router-dom";

const Home: FC = ()=> {
    const {test: {value}} = useSelector((state: RootState)=> state)
    return (
        <div>
            <p>{value} - <Link to={"/project/2"}>1</Link></p>
            <Button>Ola</Button>
        </div>
    )
}

export default Home;