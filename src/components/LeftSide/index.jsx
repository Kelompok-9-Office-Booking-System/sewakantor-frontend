import React from 'react'
import { Image } from 'react-bootstrap'

const LeftSide = () => {
  return (
    <div>
        <Image src={require('../../images/Logo_Sewakantor.png')} thumbnail style={{border:"none"}} />
    </div>
  )
}

export default LeftSide