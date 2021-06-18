import React, { useState, Fragment } from 'react';
import AgendaCSS from '../Form/Agenda.module.css';
import Consultar from '../Form/Consultar';
import Adicionar from '../Form/Adicionar';
import Modificar from '../Form/Modificar';
import Eliminar from '../Form/Eliminar';
import Mulher from '../Form/mulher.png';
const Agenda = () => {
    const imgMulher = Mulher;
    const [consulta, setConsulta] = useState('');
    const [adicionar, setAdicionar] = useState('');
    const [modificar, setModificar] = useState('');
    const [eliminar, setEliminar] = useState('');
    const [voltar, setVoltar] = useState('');
    const [quadro, setQuadro] = useState(AgendaCSS.opcoes);
    const [mulher, setMulher] = useState(<div className={AgendaCSS.mulher}><img src={imgMulher} alt="mulher" /></div>)
    const Resultado = () => {
        setVoltar(<Agenda />);
        setConsulta('');
        setAdicionar('');
        setModificar('');
        setEliminar('');
        setBoton('');
    }
    const [boton, setBoton] = useState('');


    const resultadoConsulta = () => {
        setConsulta(<Consultar />);
        tirarBotoes();
    }
    const resultadoAdicionar = () => {
        setAdicionar(<Adicionar />);
        tirarBotoes();
    }
    const resultadoModificar = () => {
        setModificar(<Modificar />);
        tirarBotoes();
    }
    const resultadoEliminar = () => {
        setEliminar(<Eliminar />);
        tirarBotoes();
    }

    const tirarBotoes = () => {
        setBotonConsulta('');
        setBotonAdicionar('');
        setBotonModificar('');
        setBotonEliminar('');
        setQuadro('');
        setMenuOpcoes('');
        setMulher('');
        setBoton(<div className={AgendaCSS.centerBotao}><button className={AgendaCSS.botao} onClick={Resultado}>Voltar</button></div>);
    }
    const [menuOpcoes, setMenuOpcoes] = useState(
        <div>Menu de Opções</div>
    )
    const [botonConsulta, setBotonConsulta] = useState(
        <button onClick={resultadoConsulta} className={AgendaCSS.botao}>Consultar</button>
    )

    const [botonAdicionar, setBotonAdicionar] = useState(
        <button onClick={resultadoAdicionar} className={AgendaCSS.botao}>Adicionar</button>
    )

    const [botonModificar, setBotonModificar] = useState(
        <button onClick={resultadoModificar} className={AgendaCSS.botao}>Modificar</button>
    )

    const [botonEliminar, setBotonEliminar] = useState(
        <button onClick={resultadoEliminar} className={AgendaCSS.botao}> Eliminar</button>
    )
    return (
        <Fragment>

            <div class={AgendaCSS.all}>
                {mulher}
                <div class={quadro}>
                    <div className={AgendaCSS.titulo}>{menuOpcoes}</div>
                    <div className={AgendaCSS.novasOpcoes}>
                        {botonConsulta}
                        {botonModificar}
                        {botonAdicionar}
                        {botonEliminar}
                    </div>
                </div>
            </div>
            {consulta}
            {adicionar}
            {modificar}
            {eliminar}
            {voltar}
            {boton}
        </Fragment>
    )
}


export default Agenda;