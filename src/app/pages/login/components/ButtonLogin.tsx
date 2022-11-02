interface IButtonLogin {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLogin> = ({ type, onClick, children }) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}