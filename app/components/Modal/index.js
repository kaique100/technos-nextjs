import './estilo.css'

function index({isOpen, handleModal}) {
    if (isOpen) {
        return (
            <>
                <article className='modal-container'>
                    <div className='modal'>
                        <section className='buttonFechar'>
                            <a  onClick={handleModal}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.2613 18.2013C19.335 18.27 19.3941 18.3528 19.4351 18.4448C19.4761 18.5368 19.4981 18.6361 19.4999 18.7368C19.5017 18.8375 19.4831 18.9375 19.4454 19.0309C19.4077 19.1243 19.3515 19.2091 19.2803 19.2803C19.2091 19.3515 19.1243 19.4077 19.0309 19.4454C18.9375 19.4831 18.8375 19.5017 18.7368 19.4999C18.6361 19.4981 18.5368 19.4761 18.4448 19.4351C18.3528 19.3941 18.27 19.335 18.2013 19.2613L9.73129 10.7925L1.26129 19.2613C1.11912 19.3938 0.93107 19.4659 0.736769 19.4625C0.542468 19.459 0.357083 19.3803 0.21967 19.2429C0.0822568 19.1055 0.00354506 18.9201 0.000116847 18.7258C-0.00331137 18.5315 0.0688116 18.3435 0.201292 18.2013L8.67004 9.73129L0.201292 1.26129C0.0688116 1.11912 -0.00331137 0.93107 0.000116847 0.736769C0.00354506 0.542468 0.0822568 0.357083 0.21967 0.21967C0.357083 0.0822568 0.542468 0.00354506 0.736769 0.000116847C0.93107 -0.00331137 1.11912 0.0688116 1.26129 0.201292L9.73129 8.67004L18.2013 0.201292C18.3435 0.0688116 18.5315 -0.00331137 18.7258 0.000116847C18.9201 0.00354506 19.1055 0.0822568 19.2429 0.21967C19.3803 0.357083 19.459 0.542468 19.4625 0.736769C19.4659 0.93107 19.3938 1.11912 19.2613 1.26129L10.7925 9.73129L19.2613 18.2013Z" fill="white" />
                            </svg></span></a>
                        </section>
                        <section className='formulario'>
                            <form className='formModal' >
                                <h2>Cadastrar novo cliente</h2>
                                <input type="text" placeholder='Nome' />
                                <input type="email" placeholder='E-mail' />
                                <input type="number" placeholder='CPF' />
                                <input type="date" placeholder='Data de nascimento' />
                                <input type="tel" placeholder='Telefone celular' />
                                <input type="text" placeholder='Estado civil' />
                                <input type="text" placeholder='Sexo' />
                                <button>Cadastrar</button>
                            </form>
                        </section>
                    </div>
                </article>
    
    
            </>
        )
    }
    return null;
}

export default index;