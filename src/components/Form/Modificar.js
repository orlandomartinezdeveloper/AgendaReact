import React, { useEffect, Fragment, useState } from 'react';
import ConsultarCSS from '../Form/Consultar.module.css';
const Modificar = () => {
    //Listar Contatos
    const [contatos, setContatos] = useState([]);
    useEffect(() => {
        getContatos()
    }, [contatos.length])
    const getContatos = () => {
        fetch('http://localhost:3000/contatos',
            {
                method: 'GET'
            })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setContatos(data)
            })
    }
    //Modificar Contatos
    const [formA, setFormA] = useState('')
    const modificarContact = (id) => {
        fetch(`http://localhost:3000/contatos/${id}`, {
            method: 'GET'
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                //Formulario de Modificação
                setFormA(
                    <div><input type="text" value={data.nome} onChange={(event) => event.target.value} />
                        <input type="text" value={data.telefone} onChange={(event) => event.target.value} />
                        <input type="email" value={data.email} onChange={(event) => event.target.value} />
                        <button type="submit">Atualizar</button>
                    </div >);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //Resposta na Tela dos Contatos na Base de Dados
    return (
        <Fragment>
            <div className={ConsultarCSS.main}>
                <div className={ConsultarCSS.upcard}>
                    {contatos.map((item) => {
                        return <div key={item.id} className={ConsultarCSS.card}>
                            <div className={ConsultarCSS.imgUser}><i class={"fas fa-user " + ConsultarCSS.user}></i></div>
                            <p>{item.nome}</p>
                            <p><i class={"fas fa-phone-square-alt " + ConsultarCSS.phone}></i>{item.telefone}</p>
                            <p><i class={"fas fa-envelope " + ConsultarCSS.email}></i>{item.email}</p>
                            <button className={ConsultarCSS.botao} onClick={() => modificarContact(item.id)}>Modificar</button>
                        </div>
                    })}
                </div>
                {formA}
            </div>
        </Fragment>
    )
}
export default Modificar;