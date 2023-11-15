// "use client" 

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Barra from '../../components/HeaderSegundario/index.js'

import imgCliente from '../../assets/cliente.png'

import './estilo.css'
import Image from 'next/image'
// import { useState } from 'react'
import Link from 'next/link.js'
// import data from './../../api/pegarClientes'

async function pegarClientes() {
    const res = await fetch("http://localhost:3000/api/pegarClientes")

    return res.json()
}


export default async function PrestadorPage() {
    // const [openModal, setOpenModal] = useState(false)
     const dados = await pegarClientes();
    
    console.log(dados)
//   dados = fetch("localhost:3000/api/pegarClientes")
console.log("teste")
    return (
        <>
            <Header />
            <Barra />
            <article className='topo-clientes'>
                <section >
                    <h2>Clientes</h2>
                </section>
                <section >
                    <p>10 resultados</p>

                </section>

            </article>

            <article className='pesquisa-clientes'>
                <form action="#">
                    <input type="text" placeholder='Busque o que deseja' />
                    <button >Adicionar +</button>
                </form>
            </article>

            <article className='lista-clientes'>
                {dados.data.map((cliente) =>(
                <section key={cliente.idCliente}>
                    <Image src={imgCliente} alt="" />
                    <h3>ID do cliente: {cliente.idCliente}</h3>                       

                    <p>Estado civil: {cliente.estadoCivil}</p>                    
                    <button><Link href="clientes/pagina-cliente">Expandir</Link></button>
                </section>
                ))}


            </article>
            <Footer />

        </>
    )
}