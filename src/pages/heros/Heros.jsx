import React from 'react'


//component import
import Header from '../../Components/Header/Header'

//style import
import './Heros.css'

//assets import

import Image35 from '../../Assets/Illustration/img35.png'

const Heros = () => {
  return (
    <div className='heros'>
    <Header/>

    <div className="hero__landing flex ">
      <div className="hero__landing__content flex flex-column ">
        <h1>UN HERO</h1>
        <p> coming Soon...</p>
      </div>

      <div></div>
    </div>

    </div>
  )
}

export default Heros