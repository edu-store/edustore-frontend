import React from 'react';
import styled from 'styled-components'

import Searcher from '../searcher'

import backgroundImage from '../../images/hero-background.svg'


const HeroStyled = styled.div`
  
  
.Container__Hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em 0;
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  
}

.Hero {
  text-align: center;
  padding: var(--padding__container);
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

`

function Hero () {


    return (
        <HeroStyled className="section_hero">
            <section className="Container__Hero">
                <div className="Hero">
                    <div className="Hero__texts">
                    <h1>Busca Apps y recursos educativos</h1>
                    <p>La mejor plataforma de recursos educativos online</p>
                    </div>
                    <Searcher/>
                </div>
            </section>
        </HeroStyled>
    )
}

export default Hero