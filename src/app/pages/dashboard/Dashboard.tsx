import { Link } from "react-router-dom"
export const Dashboard = () => {
    return (<div>
        <Link to="/entrar">Login</Link><br/>
        <Link to="/pagina-inicial">Pagina inicial</Link>
    </div>)
}