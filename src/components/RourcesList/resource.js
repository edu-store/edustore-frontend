import React from "react"
import styled from "styled-components"


import {
    useHistory,
} from 'react-router-dom'

const ResourceStyled = styled.article`

`

function Resource (
    {   id,
        key,
        nombre,
        nombre_corto_app,
        asignatura,
        imagen,
    }
) {

    const history = useHistory()
    function handleClick(){
        history.push(`/recurso/${nombre_corto_app}`)
    }
    return (
        <ResourceStyled className="Container__List__resource" onClick={handleClick} id={id}>
        <figure className="Container__Resource_Img">
          <img
            loading="lazy"
            className="Resource_Img"
            src={imagen}
            alt={nombre}
            
          />
        </figure>
        <div className="Container__texts_resource">
          <h1>{nombre}</h1>
          <p>{asignatura}</p>
        </div>
        

        </ResourceStyled>
    )
}

export default Resource