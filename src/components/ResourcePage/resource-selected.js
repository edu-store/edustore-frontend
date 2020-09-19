import React from 'react'
import styled from 'styled-components'

const ResourceSelectedStyled = styled.div`

`

function ResourceSelected(
    {   id,
        img_logo,
        nombre,
        asignatura,
        urlDescarga,
        imagesScreenshotLink =[],
        descripciones = []
    }
) {
    return (
        <ResourceSelectedStyled>
          <section className="Resource__detail">
         <figure className="Resource__detail__Container">
             <img src={img_logo} alt="" className="Resource__detail__logo"/>
         </figure>
         <div className="Resource__detail__info">
             <h1 className="Resource__detail__title">{nombre}</h1>
             <p className="Resource__detail__subtitle">{asignatura}</p>
             <div className="container__rating">
               <div className="rating">
                     
                </div>
                <div className="rating__count">
                  
                </div>
             </div>
              <a href={urlDescarga} download className="btn btn-blue">Descargar</a>
         </div>
     </section>
     <section className="screenshot-section">
       <div className="screenshot-section-container">
         <div className="screenshot-container-imgs">
             {imagesScreenshotLink.map((item) => 
             <figure>
              <img src={item} loading="lazy" alt="Algeo"/>
            </figure>
           )}
        </div>
       </div>
     </section>
     <section className="info-detail-section">
       <div className="info-detail-container">
          <h1 className="Titles__sections"><strong>Descripción</strong></h1>
          {descripciones.map((item) => 
            <div>
              <p>{item}</p>
              <br/>
            </div>
           )}
        </div>
     </section>
        </ResourceSelectedStyled>
    )
}

export default ResourceSelected

