import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const InputText = ({label, ...props}) => {
    return (
        <label className="flex flex-col w-full">
            <span>{label}</span>
            <input 
                type="email" 
                {...props} 
                className="border border-gray-300 h-10 px-4" />
        </label>
    );
}