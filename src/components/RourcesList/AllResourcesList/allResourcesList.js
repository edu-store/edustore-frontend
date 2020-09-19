import React,{ useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Resources from '../resource'

const AllResourcesListStyled = styled.div`
.Section__Resources__List {
  padding: var(--padding__container);
  background-color: #fff;
  margin-top: 4em;
}
.Container__Resources__List {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "Titles__sections Titles__sections Titles__sections Buttons__directions__App" "Container__List__Resources Container__List__Resources  Container__List__Resources Container__List__Resources";
  max-width: var(--max-width);
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .Container__Resources__List {
    margin: 0.5em;
  }
}
@media screen and (max-width: 426px) {
  .Container__Resources__List {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "Titles__sections Titles__sections" "Container__List__Resources Container__List__Resources";
  }
}
.Titles__sections {
  grid-area: Titles__sections;
  color: var(--color__dark);
  font-size: var(--font-size-titles);
}
.Container__List__Resources {
  grid-area: Container__List__Resources;
}
.Container__List {
  margin-top: 3em;
  text-align: center;
}
.Container__List .Container__List__resource:hover {
  transform: scale(1.1);
  transition: 0.5s;
  
}

/* aqui inicia el recurso*/

.Container__List__resource{
  display: inline-block;
  width: 17em;
  height: auto;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 9px 0px rgb(194 194 194 / 0.3);
  margin: 1.5em;
  cursor: pointer;
  transition: 450ms all;
  /*overflow:hidden*/
}
.Container__List__resource:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.Resource_Img{

  padding: 1em;
  /*width:100%;
  max-height:14em*/
}

.Container__texts_resource {
  text-align: left;
  padding: 1.25em 1.5em;
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
function AllResourcesList () {
  const dispatch = useDispatch()
  const AppList = useSelector( (state) => state.AppList)
  

  useEffect(() => {
    fetch('https://edustore-web-platform.firebaseio.com/Apps.json')
    .then(( response ) => {
      return response.json()
    })
    .then(( data ) =>{
      console.log(data)
      let apps = Object.keys(data).map(key => data[key]);
      console.log(apps)
      dispatch({
        type:'SET_APP_LIST',
        payload: apps
      })
      
    })
    .catch((error)=>{
      console.log('se obtuvo el error: '+ error)
    })
  }, [dispatch])
    return(
        <AllResourcesListStyled>
            <section className="Section__Resources__List">
                <div className="Container__Resources__List">
                <h1 className="Titles__sections">
                    Todas las Apps
                </h1>
                <div className="Buttons__directions__App">                   
                </div>
                <div className="Container__List__Resources">
                    <div id="apps" className="Container__List">
                      {
                        AppList.map(({id,imagen,nombre,nombre_corto_app, asignatura}) =>{
                          return (
                            <Resources
                            id = {id}
                            key = {nombre_corto_app}
                            imagen = {imagen}
                            nombre = {nombre}
                            nombre_corto_app = {nombre_corto_app}
                            asignatura = {asignatura}
                            

                            />
                          )
                        })
                      }
                    </div>
                </div>
                </div>
            </section>

        </AllResourcesListStyled>
    )
}

export default AllResourcesList