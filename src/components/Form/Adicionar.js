import React, { Fragment, useState } from 'react';
import AdicionarCSS from '../Form/Adicionar.module.css';
const Adicionar = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const create = () => {
        if (!nome && !email & !telefone) return alert('Campos Obrigatórios');

        const data = {
            nome,
            email,
            telefone
        }

        fetch('http://localhost:3000/contatos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <Fragment>
            <div className={AdicionarCSS.estrutura}>
                <form className={AdicionarCSS.form} onSubmit={() => create()}>
                    <label>
                        Nome:
                    <input
                            type="text"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)} />
                    </label>
                    <label>
                        E-mail:
                    <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </label>
                    <label>
                        Telefone:
                    <input
                            type="text"
                            value={telefone}
                            onChange={(event) => setTelefone(event.target.value)} />
                    </label>
                    <button type="submit" className={AdicionarCSS.botao}>Enviar</button>
                </form>
            </div>
        </Fragment>
    )
}
export default Adicionar;