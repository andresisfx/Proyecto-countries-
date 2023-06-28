import React from 'react'
import Card from '../Card/Card'

function ContainerCard() {
  return (
    <div className="container-cont">
      <div> <Card name={"colombia"} id={"Col"} continent={"america"}></Card></div>
      <div><Card name={"vennexuela"} id={"ven"} continent={"america"}></Card></div>
      <div><Card name={"EEUU"} id={"EU"} continent={"america"}></Card></div>
      <div><Card name={"China"} id={"CHN"} continent={"Asia"}></Card></div>
    </div>
  )
}

export default ContainerCard