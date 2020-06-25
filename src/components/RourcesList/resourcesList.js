import React from "react"
import styled from "styled-components"

import Resource from "./resource"

const ResourcesListStyled = styled.div`
.Section__App_and_resources,
.Section__Resources__List {
  padding: var(--padding__container);
  background-color: #fff;
  margin-top: 4em;
}
.Container__App_and_resources {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "Titles__sections Titles__sections Titles__sections Buttons__directions__App" "Container__Resources  Container__Resources  Container__Resources Container__Resources";
  max-width: var(--max-width);
  margin: 0 auto;
}
.Container__Resources__List {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "Titles__sections Titles__sections Titles__sections Buttons__directions__App" "Container__List__Resources Container__List__Resources  Container__List__Resources Container__List__Resources";
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
.Container__Menu__category {
  grid-area: Container__Menu__category;
}
.Menu__category_items li {
  display: block;
  font-size: var(--font-size-subtitles);
  font-weight: bold;
  padding: 0.8em;
  border-radius: 0 border-radius border-radius 0;
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
.Container__List__Resources {
  grid-area: Container__List__Resources;
}
.Container__scroll {
  white-space: nowrap;
  margin-top: 3em;
  text-align: center;
}

.Container__List__resource:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }

`

function ResourcesList () {
    return (
        <ResourcesListStyled>
            <section className="Section__App_and_resources">
      <div className="Container__App_and_resources">
        <h1 className="Titles__sections">
          Apps más buscados
        </h1>
        <div className="Buttons__directions__App">
          
        </div>
        <div className="Container__Resources">
          <div id="appMasBuscadas" className="Container__scroll">
                <Resource/>
          </div>
        </div>
      </div>
    </section>
        </ResourcesListStyled>
    )
}

export default ResourcesList