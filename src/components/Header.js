import React, { Fragment } from 'react';
import HeaderCSS from '../components/Header.module.css';
const Header = () => {

    return (
        <Fragment>
            <div className={HeaderCSS.bg}>
                <h1 className={HeaderCSS.h1}><i className={"far fa-calendar-alt " + HeaderCSS.espaco}></i>Agenda de Contatos</h1>
            </div>
        </Fragment>
    )
}

export default Header;