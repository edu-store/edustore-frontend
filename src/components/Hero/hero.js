import React from 'react';
import styled from 'styled-components'

import backgroundImage from '../../images/hero-background.svg'
import iconSearch from '../../images/search.svg'

const HeroStyled = styled.div`
.Container__Hero {
  max-width: 100%;
  height: 100vh;
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 1em;
}

.Hero {
  text-align: center;
  padding: var(--padding__container);
}
.Container__Hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.Container__Hero .Hero__texts {
  margin: auto auto;
}
.Container__Hero .Hero__texts h1 {
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.3em;
}
.Container__Hero .Hero__texts p {
  font-size: var(--font-size-paragrah);
  margin-bottom: 1em;
  color: var(--colorBlue);
}
.Container__Hero .hero__form {
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: 1em;
}
.Container__Hero .Hero__search {
  width: 85%;
  height: 2.5em;
}
.Container__Hero .Hero__search::placeholder {
  text-align: left;
  padding: 1em;
  font-family: 'Roboto';
  font-size: font-size-paragrah;
  color: var(--dark__grey);
}
.Hero__icon__search {
  height: 35px;
  width: 35px;
  background-image: url(${iconSearch});
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  vertical-align: middle;
}
.Hero__icon__search:focus {
  outline: none;
}

`

function Hero () {
    return (
        <HeroStyled>
            <section className="Container__Hero">
                <div className="Hero">
                    <div className="Hero__texts">
                    <h1>Busca Apps y recursos educativos</h1>
                    <p>La mejor plataforma de recursos educativos online</p>
                    </div>
                    <form className="hero__form">
                    <input
                        className="Hero__search border-none"
                        type="text"
                        placeholder="Escribe el nombre de una app o un recurso"
                        />
                        <button id="Search-hero" className="Hero__icon__search"></button>
                    </form>
                </div>
            </section>
        </HeroStyled>
    )
}

export default Hero