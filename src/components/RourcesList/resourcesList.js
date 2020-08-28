import React from "react"
import styled from "styled-components"

import Resource from "./resource"
import iconRight from '../../images/right-arrow.svg'
import iconleft from '../../images/left-arrow.svg'

const ResourcesListStyled = styled.section`

  padding: var(--padding__container);
  background-color: #fff;
  margin-top: 4em;

.Container__App_and_resources {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: ". Titles__sections Titles__sections Buttons__directions__App Buttons__directions__App" "Container__Menu__category Container__Resources  Container__Resources  Container__Resources Container__Resources";
  max-width: var(--max-width);
  margin: 0 auto;
}
.Container__Resources__List {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: ". Titles__sections Titles__sections Titles__sections Buttons__directions__App" ". Container__List__Resources  Container__List__Resources Container__List__Resources Container__List__Resources";
  max-width: var(--max-width);
  margin: 0 auto;
}
.Titles__sections {
  grid-area: Titles__sections;
  color: var(--color__dark);
  font-size: var(--font-size-titles);
}
.Buttons__directions__App {
  grid-area: Buttons__directions__App;
  text-align: right;
}
.Buttons__directions__App button {
  margin-right: 1em;
}
.Buttons__directions__App button img{
  width: 2em;
  height: auto;
}
.Container__Menu__category {
  grid-area: Container__Menu__category;
}
aside.Container__Menu__category{
  position: -webkit-sticky;
  position: sticky;
  top: 0;

}
.Menu__category_items li {
  display: block;
  font-size: var(--font-size-subtitles);
  font-weight: bold;
  padding: 0.8em;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}
.Menu__category_items li:hover {
  background-color: var(--colorBlue);
  color: #fff;
}
.Container__Resources {
  grid-area: Container__Resources;
  overflow: scroll;
  position: relative;
}
.Container__scroll {
  white-space: nowrap;
  margin-top: 3em;
  text-align: center;
}
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

function ResourcesList () {
    return (
        <ResourcesListStyled className="Section__App_and_resources">
          
            <div className="Container__App_and_resources">
              <h1 className="Titles__sections">
                Recursos más buscados
              </h1>
              <div className="Buttons__directions__App">
                  <button class="btn btn-white btn-corto"><img src={iconleft}></img></button>
                  <button class="btn btn-blue btn-corto"><img src={iconRight}></img></button>
              </div>
              <div className="Container__Resources">
                <div id="appMasBuscadas" className="Container__scroll">
                      <Resource/>
                      <Resource/>
                      <Resource/>
                      <Resource/>
                      <Resource/>
                </div>
              </div>
            </div>
        </ResourcesListStyled>
    )
}

export default ResourcesList