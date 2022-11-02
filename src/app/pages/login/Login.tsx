import { useCallback, useMemo, useRef, useState } from "react";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputFormComponent } from "./components/InputFormComponent";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailLength = useMemo(() => {
        return email.length
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
    }, [email, password])

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
                <InputFormComponent
                    label="Email"
                    type="email"
                    value={email}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                    onChange={(newValue) => setEmail(newValue)}
                />

                <InputFormComponent
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={(newValue) => setPassword(newValue)}
                    ref={inputPasswordRef}
                />
                <ButtonLogin onClick={handleEntrar} children="Entrar" type="button"/>
            </form>
        </div>
    );
};
