import React from 'react'
import barev from './../img/vohcuin.png'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home_block'>
        <img className='urartbarevimg' src={barev} alt="barev" />
        <p className='home_text'>Барев ехпайр, готов доказать что ты настоящий знаток армянской истории?</p>

      <NavLink to="/complexity">
        <button className='home_button'>Готов</button>
      </NavLink>

    </div>
  )
}