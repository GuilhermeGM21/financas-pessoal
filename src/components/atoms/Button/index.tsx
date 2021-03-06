import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({ children, ...props }: Props) => {
    return (
        <button {...props} 
            className="bg-purple-500 h-10 text-white font-bold hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-400"   
        >{children}</button>
    )
}
