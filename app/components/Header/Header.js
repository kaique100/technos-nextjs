import Link from 'next/link';
import logo from './../../assets/logotipo.svg'
// import login from '../../pages/Login/'
import './estilo.css'

import Image from 'next/image';


export default function Header() {


    return (
        <>
            <header>

                <input type="checkbox" name="" id="toggler" />
                <label className="fas fa-bars"></label>

                <a href="#">
                    <Image
                        className="logo"
                        src={logo}
                       width={185}
                    />
                </a>

                <nav
                    className="navbar"
                >
                    <a><Link href="/">home</Link></a>
                    <a href='#servico'>serviços</a>
                    <a href='#processo'>processo</a>
                    <a href='#contato'>contato</a>

                </nav>

                <div className="navbar teste">
                    <Link href="/login" >Entrar</Link>
                </div>

                <input type="checkbox" name="" id="toggler" />
                <label className="fas fa-bars"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <path d="M31 14.8098C31 15.1464 30.8958 15.4693 30.7102 15.7074C30.5247 15.9454 30.273 16.0792 30.0106 16.0792H0.989362C0.726967 16.0792 0.475318 15.9454 0.289777 15.7074C0.104236 15.4693 0 15.1464 0 14.8098C0 14.4731 0.104236 14.1502 0.289777 13.9122C0.475318 13.6741 0.726967 13.5404 0.989362 13.5404H30.0106C30.273 13.5404 30.5247 13.6741 30.7102 13.9122C30.8958 14.1502 31 14.4731 31 14.8098ZM0.989362 2.53882H30.0106C30.273 2.53882 30.5247 2.40508 30.7102 2.16702C30.8958 1.92896 31 1.60608 31 1.26941C31 0.932741 30.8958 0.609862 30.7102 0.371801C30.5247 0.133741 30.273 0 30.0106 0H0.989362C0.726967 0 0.475318 0.133741 0.289777 0.371801C0.104236 0.609862 0 0.932741 0 1.26941C0 1.60608 0.104236 1.92896 0.289777 2.16702C0.475318 2.40508 0.726967 2.53882 0.989362 2.53882ZM30.0106 27.0807H0.989362C0.726967 27.0807 0.475318 27.2145 0.289777 27.4525C0.104236 27.6906 0 28.0135 0 28.3501C0 28.6868 0.104236 29.0097 0.289777 29.2477C0.475318 29.4858 0.726967 29.6195 0.989362 29.6195H30.0106C30.273 29.6195 30.5247 29.4858 30.7102 29.2477C30.8958 29.0097 31 28.6868 31 28.3501C31 28.0135 30.8958 27.6906 30.7102 27.4525C30.5247 27.2145 30.273 27.0807 30.0106 27.0807Z" fill="white" />
                </svg></label>
            </header>
        </>
    )

}

