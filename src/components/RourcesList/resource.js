import React from "react"
import styled from "styled-components"

const ResourceStyled = styled.article`
.Container__List__resource{
  display: inline-block;
  width: 17em;
  height: auto;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 20px 1px #c2c2c2;
  margin: 1.5em;
  cursor: pointer;
  transition: 450ms all;
}
.Container__List__resource:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.Container__Resource_Img img{
  width: 100%;
  height: auto;
  max-height: 9em;
}

.Container__texts_resource {
  text-align: left;
  padding: 2.5em 1.5em;
}

.Container__texts_resource h1 {
  color: var(--color__dark);
  margin-bottom: 0.5em;
}
.Container__texts_resource p {
  font-size: var(--font-size-paragrah);
  margin-bottom: 0.5em;
}
span {
  font-weight: bold;
}
`

function Resource () {
    return (
        <ResourceStyled className="Container__List__resource">
                <figure className="Container__Resource_Img">
                <img
                    className="Resource_Img"
                    src=""
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