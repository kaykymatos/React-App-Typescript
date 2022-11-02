import React, { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}
interface IUsuarioLoginContext {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLoginContext> = ({ children }) => {

    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome("Kayky");
        }, 1000)

    }, [])
    const handleLogout = useCallback(() => {
    }, [])
    return (

        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}