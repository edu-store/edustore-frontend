import React from 'react'
import styled from 'styled-components'
import logo from './../images/logo-negative.svg'

import {

    Link,

  } from 'react-router-dom';

const FooterStyled = styled.footer`
.container__footer {
	text-align: center;
	margin: 0 auto;
	width: 100%;
	max-width: var(--max-width);
	padding: var(--padding__container);
}

.footer__name,
.footer {
	color: var(--color__dark);
    font-weight:bold
}

.container__logo {
	margin-bottom: 0.8em;
    align-items: center;
    justify-content: center;
    display: flex;
}

.container__logo img {
    width: auto;
    height: 2.5em;
    cursor: pointer;
    margin-right: 1em;
}
`
function Footer (){
    return (
        <FooterStyled className="footer">
            <div className="container__footer">
                <Link to="/" className="container__logo">
                <img
                    src={logo}
                    alt="Logo E-Learn Logo-Edu-Store"
                    className="footer__logo"
                />
                <span className="footer__name">Edu Store</span>
                </Link>
                <p>Copyright © 2020. All rights reserved.</p>

            </div>
        </FooterStyled>
    )
}

export default Footer;