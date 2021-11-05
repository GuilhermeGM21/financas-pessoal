import React from "react"
import { Button } from "../../components/atoms/Button"
import { Link } from "../../components/Link"
import { InputText } from "../../components/molecules/InputText"

export const Login = () => {
    return (
        <div className="w-screen h-screen bg-gay-50 flex justify-center">
            <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
                <aside className="flex">
                    <img src="./hero-image.svg" alt="" />
                </aside>
                <main className="flex flex-col justify-center items-center gap-16">
                    <h1 className="font-bold text-3xl">Controle seus gastos</h1>
                    <form className="flex flex-col w-full gap-4">
                        <InputText label="email" type="email" />
                        <InputText label="senha" type="password" />
                        <Button disabled>Login</Button>
                    </form>
                    <Link href="/register">Criar Conta</Link>
                </main>
            </div>
        </div>
    )
}
