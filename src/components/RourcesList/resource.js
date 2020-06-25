import React from "react"
import styled from "styled-components"
import image from "../../images/ImagesResources/SpreakerStudio.png"

const ResourceStyled = styled.div`
.Container__List {
    margin-top: 3em;
    text-align: center;
  }
  .Container__Resource,
  .Container__List__resource {
      display: inline-block;
      width: 17em;
      height: auto;
      overflow: hidden;
      border-radius: border-radius;
      box-shadow: 0 5px 20px 1px #c2c2c2;
      margin: 1.5em;
      cursor: pointer;
      transition: 450ms all;
    }
    .Container__List__resource:hover {
        transform: scale(1.1);
        transition: 0.5s;
    }
  .Container__Resource_Img img {
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
  .rating {
    unicode-bidi: bidi-override;
    direction: rtl;
    display: inline-block;
    margin-right: 0.5em;
    color: var(--color__yellow);
  }
  .rating > span {
    display: inline-block;
    position: relative;
    width: 1.5em;
    height: 1em;
  }
  .rating > span:hover:before,
  .rating > span:hover ~ span:before {
    content: "\2605";
    position: absolute;
  }
  .rating__count {
    display: inline-block;
  }
  .rating__count span:nth-child(1) {
    color: var(--color__dark);
  }
  span {
    font-weight: bold;
  }
`

function Resource () {
    return (
        <ResourceStyled>
             <article data-id="${id}" className="Container__List__resource">
                <figure className="Container__Resource_Img">
                <img
                    className="Resource_Img"
                    src={image}
                    alt="Imagen del recurso 1"
                />
                </figure>
                <div className="Container__texts_resource">
                <h1>Mi Expresion Cuenta</h1>
                <p>App que ayuda a las personas con deficiencia auditiva a aprender</p>
                <div className="rating ">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span
                    ><span>☆</span>
                </div>
                <div className="rating__count">
                    <span>5</span>
                    <span>(15, 012)</span>
                </div>
                </div>
            </article>
        </ResourceStyled>
    )
}

export default Resource