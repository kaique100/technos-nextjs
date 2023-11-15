import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Barra from '../../components/HeaderSegundario/index.js'
import './estilo.css'

async function pegarClientes() {
    const res = await fetch("http://localhost:8080/ChallengePorto/rest/guincho")

    return res.json()
}

export default async function GuinchosPage(){

    const dados = await pegarClientes()

    console.log(dados)


    return(
        <>
        <Header/>
        <Barra/>
        <article className='topo-guincho'>
                <section >
                    <h2>Guinchos</h2>
                </section>
                <section >
                    <p>6 resultados</p>

                </section>

            </article>
            <article className='pesquisa-guincho'>
            <form action="#">
                        <input type="text" placeholder='Busque o que deseja' />
                        <button>Adicionar +</button>
                    </form>
            </article>
        <article className='guincho'>
           { (dados.map((guincho) => 
            <section key={guincho.idGuincho}>
                <div className='imgGuincho'>
                    
                </div>
                <div className='conteudoGuincho'>
                    <h3>{guincho.descricaoGuincho}</h3>                    
                    <p>Placa: {guincho.placa}</p>
                    
                    
                </div>
            </section>
           ))}
           
        </article>
        <Footer/>
        </>
    )
}