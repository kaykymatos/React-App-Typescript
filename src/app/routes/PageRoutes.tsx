import { Navigate } from "react-router-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {Dashboard, Login} from "../pages";
export default function PageRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="*" element={<Navigate to="/pagina-inicial" replace />} />
            </Routes>
        </Router >
    );
}