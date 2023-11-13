import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Barra from '../../components/HeaderSegundario/index.js'
import './estilo.css'
export default function OcorrenciasPage() {
    return (
        <>
            <Header />
            <Barra />
            <article className='topo-servico'>
                <section >
                    <h2>Ordens de serviço</h2>
                </section>
                <section >
                    <p>6 resultados</p>

                </section>

            </article>

            <article className='pesquisa-servico'>
                <form action="#">
                    <input type="text" placeholder='Busque o que deseja' />
                    <button>Adicionar +</button>
                </form>
            </article>

            <article className='lista-servico'>
                <ul>
                    <li>
                        <div className='Card'>
                            <div className='iconCard'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#FFC700" />
                                </svg>
                            </div>
                            <div className='tituloCard'>
                                <h3>Em andamento</h3>

                            </div>
                        </div>
                        <p>Código: 496970e4-0505-435e-b4e4-0ede3c6e0e4b</p>
                        <p>Data de abertura: 16/05/2023 às 19:15 </p>
                        <p>Previsão para conclusão: 18/05/2023 às 19:15 </p>
                        <p>Descrição:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et eleifend elit. Etiam vel est faucibus, egestas mi non, imperdiet nulla. Praesent pretium est vel turpis commodo placerat.</p>
                    </li>
                    <li>
                        <div className='Card'>
                            <div className='iconCard'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#FFC700" />
                                </svg>
                            </div>
                            <div className='tituloCard'>
                                <h3>Em andamento</h3>

                            </div>
                        </div>
                        <p>Código: 496970e4-0505-435e-b4e4-0ede3c6e0e4b</p>
                        <p>Data de abertura: 16/05/2023 às 19:15 </p>
                        <p>Previsão para conclusão: 18/05/2023 às 19:15 </p>
                        <p>Descrição:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et eleifend elit. Etiam vel est faucibus, egestas mi non, imperdiet nulla. Praesent pretium est vel turpis commodo placerat.</p>
                    </li>
                    <li>
                        <div className='Card'>
                            <div className='iconCard'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#FFC700" />
                                </svg>
                            </div>
                            <div className='tituloCard'>
                                <h3>Em andamento</h3>

                            </div>
                        </div>
                        <p>Código: 496970e4-0505-435e-b4e4-0ede3c6e0e4b</p>
                        <p>Data de abertura: 16/05/2023 às 19:15 </p>
                        <p>Previsão para conclusão: 18/05/2023 às 19:15 </p>
                        <p>Descrição:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et eleifend elit. Etiam vel est faucibus, egestas mi non, imperdiet nulla. Praesent pretium est vel turpis commodo placerat.</p>
                    </li>
                    <li>
                        <div className='Card'>
                            <div className='iconCard'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#4DB12A" />
                                </svg>
                            </div>
                            <div className='tituloCard'>
                                <h3>Concluído</h3>

                            </div>
                        </div>
                        <p>Código: 496970e4-0505-435e-b4e4-0ede3c6e0e4b</p>
                        <p>Data de abertura: 16/05/2023 às 19:15 </p>
                        <p>Previsão para conclusão: 18/05/2023 às 19:15 </p>
                        <p>Descrição:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et eleifend elit. Etiam vel est faucibus, egestas mi non, imperdiet nulla. Praesent pretium est vel turpis commodo placerat.</p>
                    </li>
                    <li>
                        <div className='Card'>
                            <div className='iconCard'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#4DB12A" />
                                </svg>
                            </div>
                            <div className='tituloCard'>
                                <h3>Concluído</h3>

                            </div>
                        </div>
                        <p>Código: 496970e4-0505-435e-b4e4-0ede3c6e0e4b</p>
                        <p>Data de abertura: 16/05/2023 às 19:15 </p>
                        <p>Previsão para conclusão: 18/05/2023 às 19:15 </p>
                        <p>Descrição:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et eleifend elit. Etiam vel est faucibus, egestas mi non, imperdiet nulla. Praesent pretium est vel turpis commodo placerat.</p>
                    </li>
                    <li>
                        <div className='Card'>
                            <div className='iconCard'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#4DB12A" />
                                </svg>
                            </div>
                            <div className='tituloCard'>
                                <h3>Concluído</h3>

                            </div>
                        </div>
                        <p>Código: 496970e4-0505-435e-b4e4-0ede3c6e0e4b</p>
                        <p>Data de abertura: 16/05/2023 às 19:15 </p>
                        <p>Previsão para conclusão: 18/05/2023 às 19:15 </p>
                        <p>Descrição:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et eleifend elit. Etiam vel est faucibus, egestas mi non, imperdiet nulla. Praesent pretium est vel turpis commodo placerat.</p>
                    </li>
                </ul>
            </article>
            <Footer />
        </>
    )
}