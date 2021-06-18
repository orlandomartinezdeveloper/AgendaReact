import React, { useEffect, Fragment, useState } from 'react';
import ConsultarCSS from '../Form/Consultar.module.css';
const Eliminar = () => {
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        getContatos()
    }, [contatos])

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

    const deleteContact = (id) => {
        fetch(`http://localhost:3000/contatos/${id}`, {
            method: 'DELETE'
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log('Deletado com sucesso', data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
                            <button className={ConsultarCSS.botao} onClick={() => deleteContact(item.id)}>Eliminar</button>
                        </div>
                    })}
                </div>
            </div>

        </Fragment>

    )

}

export default Eliminar;