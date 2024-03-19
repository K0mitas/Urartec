import React from 'react'
import feil from './../img/reukalizo.png'
import { NavLink } from 'react-router-dom'


export default function Complexity() {
  return (
    <div className='complexity_block'>

        <div className='complexity_hajime'>

          <NavLink className="navlink" to="/esay">
            <button className='esay'>
              <img className='esay_img' src={feil} alt="urartec" />
                  <p className='esay_name'>Давайте начнем !</p>
                  <p className='esay_text'>Стоит прежде добавить для Вас что не нужно воспринимать резултаты теста близко к сердцу. С каждым разом вопросы будут всё сложнее и сложнее</p>
              </button>
          </NavLink>

        </div>

    </div>
  )
}