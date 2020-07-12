import React from 'react'
import styled from 'styled-components'
import image from "../../images/ImagesResources/Algeo.webp"
import screen from "../../images/screenshots/Algeo_screenshot.webp"


const ResourcePageStyles = styled.div`
.Resource__detail {
  max-width: var(--max-width);
  padding: var(--padding__container);
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 0 auto;
}
.Resource__detail__Container {
  overflow: hidden;
  border-radius: 30px;
  cursor: pointer;
  margin-right: 2em;
  height: 10em;
  width: 10em;
}
.Resource__detail__logo {
  width: 15em;
  height: 15em;
}
.Resource__detail__title {
  font-size: var(--font-size-titles);
  color: var(--color__dark);
  margin-bottom: 0.3em;
}
.Resource__detail__subtitle {
  font-size: var(--font-size-subtitles);
  color: var(--colorBlue);
  margin-bottom: 0.3em;
}
.screenshot-section {
  margin: 1em 1em;
}
.screenshot-section-container {
  max-width: var(--max-width);
  padding: var(--padding__container);
  margin: 0 auto;
  border-top: 1px solid var(--dark__grey);
  border-bottom: 1px solid var(--dark__grey);
}
.screenshot-section-container figure > img {
  border-radius: var(--border-radius);
  margin-right: 0.5em;
  height: 31em;
  width: auto;
}
.screenshot-container-imgs {
  display: flex;
  flex-direction: row;
  overflow: scroll;
}
.info-detail-container {
  max-width: var(--max-width);
  padding: var(--padding__container);
  margin: 0 auto;
}
.info-detail-container h1 {
  color: var(--color__dark);
  margin-bottom: 0.5em;
}
.info-detail-container p {
  color: var(--colorBlue);
}
.list_container li {
  color: var(--colorBlue);
  padding: 0.5em;
}
.container__rating {
  margin-bottom: 5em;
}
@media screen and (max-width: 425px) {
  .Resource__detail__logo {
    width: auto;
    height: 100%;
  }
  .Resource__detail__Container {
    width: 12em;
    height: 10em;
    border-radius: 25px;
  }
  .screenshot-section-container figure > img {
    margin-right: 0.5em;
    height: 20em;
    width: auto;
  }
}
@media screen and (max-width: 320px) {
  .Resource__detail__Container {
    width: 12em;
    height: 7em;
  }
  .screenshot-section-container figure > img {
    margin-right: 0.5em;
    height: 20em;
    width: auto;
  }
}
.info-detail-container p {
  margin-left: 0.5em;
}

`

function ResourcePage() {
    return (
        <ResourcePageStyles>
            <section className="Resource__detail">
         <figure className="Resource__detail__Container">
             <img src={image} alt="" className="Resource__detail__logo"/>
         </figure>
         <div className="Resource__detail__info">
             <h1 className="Resource__detail__title">Algeo:Cal. Gráfica</h1>
             <p className="Resource__detail__subtitle">Matemática</p>
             <div className="container__rating">
               <div className="rating">
                     
                </div>
                <div className="rating__count">
                  
                </div>
             </div>
              <a href="/images/Algeo.webp" download="Algeo.apk" className="btn btn-blue">Descargar</a>
         </div>
     </section>
     <section className="screenshot-section">
       <div className="screenshot-section-container">
         <div className="screenshot-container-imgs">
           <figure>
              <img src={screen} alt="Algeo"/>
           </figure>
           <figure>
              <img src={screen} alt="Algeo"/>
           </figure>
           <figure>
              <img src={screen} alt="Algeo"/>
           </figure>
           <figure>
              <img src={screen} alt="Algeo"/>
           </figure>
           <figure>
              <img src={screen} alt="Algeo"/>
           </figure>
        </div>
       </div>
     </section>
     <section className="info-detail-section">
       <div className="info-detail-container">
          <h1 className="Titles__sections"><strong>Descripción</strong></h1>
          <p>Calculadora semi cientifica, con gráficos en el plano cartesiano.<br></br>
            Usa las siguientes funciones únicas para ayudarte con tu clase de cálculo y álgebra:  
            </p>
            <ul className="list_container">
                <li>* Diferenciación simbólica</li>
                <li>* Integrales definidas</li>
                <li>* Cálculo de series de Taylor</li>
                <li>* Resolución de ecuaciones</li>
            </ul>
        </div>
     </section>
        </ResourcePageStyles>
    )
}

export default ResourcePage