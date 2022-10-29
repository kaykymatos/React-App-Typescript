import PageRoutes from "./routes/PageRoutes";
import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    <div>
      <UsuarioLogadoProvider>
        <PageRoutes />
      </UsuarioLogadoProvider>
    </div>
  );
}
