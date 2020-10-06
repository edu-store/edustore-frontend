import React, { useState,useEffect } from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import ResourceSelected from './resource-selected'
import icon_back from '../../images/icon_back.svg'

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
}
.Resource__detail__logo {
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
  //height: 31em;
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

.back{
  font-size:1.2em;
  margin-left:.5em;
  color:var(--colorBlue)
  
}

.arrowleft{
  width:3em;
  
}
.container_btn_back{
  display:flex;
  align-items:center;
  margin: 1em 0 0 1em;
  position:sticky;
  top: 10px;
  padding:1em;
  border-radius:var(--border-radius);
  background: white;
  max-width:9em


}
`

function ResourcePage({ match, history }) {

  let DBresource = useSelector(state => state.AppList.find(item => item.nombre_corto_app === match.params.id))
  const [resource, setResource] = useState(DBresource)

  useEffect( ()=> {
    console.log(resource)
    if ( !resource ) {
        fetch(`https://edustore-web-platform.firebaseio.com/Apps/${match.params.id}.json`)
            .then((response) => response.json())
            .then((data)=> {
              setResource(data)
              console.log(data)
            })
    }
}, [resource, match.params.id])

function handleClick() {
  history.goBack()
}
    return (
        <ResourcePageStyles>
          <div className="container_btn_back" onClick={handleClick}>
              <img src={icon_back} className="arrowleft" alt="Atras"></img>
              <p className="back" >Atras</p>
          </div>
          <ResourceSelected {...resource}/>
        </ResourcePageStyles>
    )
}

export default ResourcePage