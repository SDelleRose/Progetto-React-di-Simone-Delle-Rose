import React from 'react';

import Logo from './../img/logo-personale.svg';

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={Logo} alt='logo' />
                <div>
                    <div className="sdr">
                        <p>simone</p>
                        <p>DelleRose</p>
                    </div>
                    <p className="wgd">Web/GraphicDesigner</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="footerlinks">
                <a href='mailto:simone.dellerose@hotmail.it'><em>simone.dellerose@hotmail.it</em></a>
                <br/>
                <a href='https://books.google.it/'>Raccolta libri di Google</a>
            </div>
        </footer>
    )
}

export default Footer;