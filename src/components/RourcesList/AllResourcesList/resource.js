import React from "react"
import styled from "styled-components"
import image from "../../../images/ImagesResources/SpreakerStudio.png"


import {
    useHistory,
} from 'react-router-dom'

const ResourceStyled = styled.article`
`

function Resource () {

    const history = useHistory()
    function handleClick(){
        history.push('/recurso/nombre-del-recurso')
    }
    return (
        <ResourceStyled className="Container__List__resource" onClick={handleClick}>
                <figure className="Container__Resource_Img">
                <img
                    className="Resource_Img"
                    src={image}
                    alt="Imagen del recurso 1"
                />
                </figure>
                <div className="Container__texts_resource">
                <h1>Mi Expresion Cuenta</h1>
                <p>Lengua y literatura</p>
                </div>

        </ResourceStyled>
    )
}

export default Resource