import React from 'react'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import imgProelec from '../images/Proelec-width.png'

export const Home = ()=> {
const img = imgProelec


  return (
    <div className='text-center font-extrabold relative flex justify-center flex-col'>
        <img src={img} alt="proelec" />
        <h1 className='text-4xl mt-4'>Bienvenido/as</h1>
        <ItemListContainer/>
    </div>
  )
}
