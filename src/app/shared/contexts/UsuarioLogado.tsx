import React, { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}
interface IUsuarioLoginContext {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLoginContext> = ({ children }) => {
    const handleLogout = useCallback(() => {
        console.log("logout executou");
    }, [])
    return (

        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: "Kayky", logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}