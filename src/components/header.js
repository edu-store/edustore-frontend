import React from 'react'
import styled from 'styled-components'
import logo from './../images/logo.svg'
const HeaderStyled = styled.div`
.header{
    background: var(--color__dark);
}
.container__menu{
    position: relative;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-areas: 'Container__Logo . Container__menu Container__menu';
    align-items: center;
    justify-content: space-between;
    padding: var(--padding__container);
    max-width : var(--max-width);
    margin: 0 auto;
}
.Container__Logo{
    grid-area:Container__Logo;
}
.container__logo{
    display: inline-flex;
    align-items: center;
    color: white;

    img{
        width: auto;
        height: 2.5em;
        cursor: pointer;
        margin-right: 1em;
    }
    span{
        font-size: var(--font-size-paragrah);
        font-weight: bold;
    }
}
.Container__menu{
    grid-area: Container__menu;
    text-align: right;

    a {
        color: white;
    }
}
.btns__menu{
    z-index: 2;
    .btn{
        margin-left: 4em;
    }
}

.darkMode {
  background-color: var(--color__dark);
}
.McButton {
  position: relative;
  width: 45px;
  height: 25px;
  display: none;
}
b {
  position: absolute;
  left: 0;
  width: 44px;
  height: 4px;
  background-color: #fff;
  border-radius: 5px;
  transition: 0.2s ease-in;
}
b:nth-child(1) {
  top: 0;
}
b:nth-child(2) {
  top: 50%;
}
b:nth-child(3) {
  top: 100%;
}
b:nth-child(1).active {
  animation: 0.3s forwards menu-positivo;
  animation-delay: 0.3s;
  top: 50%;
}
b:nth-child(2).active,
b:nth-child(3).active {
  top: 50%;
  animation: 0.3s forwards menu-negativo;
  animation-delay: 0.3s;
}

@keyframes menu-positivo {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(135deg);
  }
}
@keyframes menu-negativo {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(-135deg);
  }
}

@keyframes rotate {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(90deg);
  }
}
@media screen and (max-width:768px){
    .container__menu{

    grid-template-areas: 'Container__Logo . Container__menu Container__menu';
    
}
}
@media screen and (max-width: 425px) {
  .Container__menu {
    text-align: center;
  }
  .container__menu {
    grid-template-columns: repeat(2, 1fr);
  }
  .btns__menu {
    display: none;
    background-color: #fff;
    border-radius: var(--border-radius);
    position: absolute;
    right: 10px;
    top: 63%;
    padding: var(--padding__container);
    transition: 1s ease-in;
  }
  .btns__menu li:nth-child(2) button {
    margin: 0 auto;
  }
  .btns__menu ul,
  .btns__menu li {
    display: block;
    margin: 1em 1em;
  }
  .btns__menu.active {
    display: block;
  }
  .btns__menu a {
    color: var(--colorBlue);
    font-weight: bold;
  }
  .McButton {
    display: block;
  }
}


`
function Header () {
    
     function handleClick () {
        document.getElementById("McButton").classList.toggle("active");
        document.getElementById("btns__menu").classList.toggle("active");
        document.getElementById("McBar1").classList.toggle("active");
        document.getElementById("McBar2").classList.toggle("active");
        document.getElementById("McBar3").classList.toggle("active");
        
      }
      
    return (
    <HeaderStyled>
        <header className="header">
        <div className="container__menu">
            <div className="Container__Logo">
            <a href="/" className="container__logo">
                <img src={logo} alt="Logo-Edu-Store" />
                <span >Edu Store</span>
            </a>
            </div>
            <nav className="Container__menu">
            <a className="McButton" id="McButton" onClick={handleClick}>
                <b className="" id="McBar1"></b>
                <b id="McBar2"></b>
                <b className="" id="McBar3"></b>
            </a>
            <ul className="btns__menu" id="btns__menu">
                <li>
                <a id="btn__login" href="#">Iniciar sesion</a>
                </li>
                <li>
                <button className="btn btn-white" id="btn__Sign__up">Registrarte</button>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    </HeaderStyled>
    )
}

export default Header;