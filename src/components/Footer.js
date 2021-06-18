import React, { Fragment } from 'react';
import FooterCSS from '../components/Footer.module.css';
const Footer = () => {

    return (
        <Fragment>
            <div className={FooterCSS.bgf}>
                <p className={FooterCSS.text}><i class={"fas fa-laptop-code " + FooterCSS.espaco}></i>APP Desenvolvido por:<br /><b>Orlando Martínez</b> para  <b>Toti Diversidade!</b></p>
            </div>
        </Fragment>
    )
}

export default Footer;