import React from "react"
import styled from "styled-components"


import {
    useHistory,
} from 'react-router-dom'

const ResourceStyled = styled.article`
`

function Resource (
    {
        nombre,
        asignatura,
        imagen,
    }
) {

    const history = useHistory()
    function handleClick(){
        history.push('/recurso/nombre-del-recurso')
    }
    return (
        <ResourceStyled className="Container__List__resource" onClick={handleClick}>
                <figure className="Container__Resource_Img">
                <img

                    loading="lazy"
                    className="Resource_Img"
                    src={imagen}
                    alt="Imagen del recurso 1"
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