import { Link } from "react-router-dom"
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {

    const { nomeDoUsuario, logout } = useUsuarioLogado();
    return (
        <div>
            <p>{nomeDoUsuario}</p>
            <Link to="/entrar">Login</Link><br />
            <Link to="/pagina-inicial">Pagina inicial</Link>
            <button onClick={logout}>Logout</button>
        </div>)
}