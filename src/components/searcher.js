import React from 'react'
import styled from 'styled-components'

import iconSearch from '../images/search.svg'



const SearcherStyled = styled.div`

.hero__form {
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: 1em;
  width:100%;
  max-width: 36em;

  position: sticky;
  top:0;
  z-index:10;
  transition: top 0.5s;
}
.Hero__search {
  width: 85%;
  height: 2.5em;
}
.Hero__search::placeholder {
  text-align: left;
  padding: 1em;
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size-paragrah);
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
  cursor:pointer;
}
.Hero__icon__search:focus {
  outline: none;
}


`

function Searcher () {
    return (

        <SearcherStyled>
            <form className="hero__form">
                    <input
                        className="Hero__search border-none"
                        type="text"
                        placeholder="Escribe el nombre de una app o un recurso"
                        />
                    <button id="Search-hero" className="Hero__icon__search"></button>
            </form>
        </SearcherStyled>

    )
}

export default Searcher