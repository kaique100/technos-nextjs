"use client"

import { useRouter } from "next/navigation"



import './estilo.css'
import './../../globals.css'
import login from './../../../public/logo2.svg'
import Link from 'next/link'
import Image from 'next/image'


export default function LoginPage() {
    return (
        <>
            
            <section className="login">

                <Image
                    src={login}
                    width={100}
                />
                <h2>Seja bem-vindo(a)!</h2>
                <form
                    onSubmit={(e) => {
                        router.push('/');
                        e.preventDefault();
                    }}

                >
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button><Link href="/clientes" type="submit" className='butaoChato'>Entrar</Link></button>


                    <p>Ainda não tem uma conta? <a href="#">Solicite uma agora mesmo</a></p>
                </form>
            </section>
        </>
    )
}