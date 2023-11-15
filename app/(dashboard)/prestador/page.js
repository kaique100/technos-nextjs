// "use client"

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Barra from '../../components/HeaderSegundario/index.js'

import imgPrestador from '../../assets/prestador.png'

import './estilo.css'
import Image from 'next/image'
// import { useState } from 'react'


async function pegarClientes() {
    const res = await fetch("http://localhost:8080/ChallengePorto/rest/prestadorServico")

    return res.json()
}

export default async function PrestadorPage() {
    // const [openModal, setOpenModal] = useState(false)
    const dados = await pegarClientes();

    console.log(dados)

    return (
        <>
            <Header />
            <Barra />
            <article className='topo-prestador'>
                <section >
                    <h2>Prestadores de serviço</h2>
                </section>
                <section >
                    <p>6 resultados</p>

                </section>

            </article>

            <article className='pesquisa-prestador'>
                <form action="#">
                    <input type="text" placeholder='Busque o que deseja' />
                    <button >Adicionar +</button>
                </form>
            </article>

            <article className='lista-prestador'>


                {dados.map((prestador) => (
                    <section key={prestador.idPrestadorServico}>

                        <Image
                            src={imgPrestador}
                        />


                        <h3>{prestador.nomePrestadorServico}</h3>
                        <p>{prestador.descricaoTipoServico}</p>
                        
                        <button href="clienteDetalhes">Expandir</button>
                    </section>
                ))
                }

            </article>
            <Footer />

        </>
    )
}