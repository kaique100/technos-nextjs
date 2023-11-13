"use client"

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Barra from '../../components/HeaderSegundario/index.js'

import imgPrestador from '../../assets/prestador.png'

import './estilo.css'
import Image from 'next/image'
import { useState } from 'react'

export default function PrestadorPage() {
    const [openModal, setOpenModal] = useState(false)

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
                    <button onClick={() => setOpenModal(true)}>Adicionar +</button>
                </form>
            </article>

            <article className='lista-prestador'>
                <section>

                    <Image
                        src={imgPrestador}
                    />

                  
                    <h3>José da Silva</h3>
                    <p>Mecanico</p>
                    <p>(11) 99999-9999</p>
                    <button>Expandir</button>
                </section>

            </article>
            <Footer />

        </>
    )
}