import React, { useContext } from 'react'
import fail from './../img/reukalizo.png'
import { QuizContext } from '../components/Context'
import { NavLink } from 'react-router-dom'

export default function Result() {
  const {score, setScore} = useContext(QuizContext)

  const restartquiz = () => {
    setScore(0)
  }

  return (
    <div className='result_hajime'>
        <div className='result_block'>
            <img className='result_img' src={fail} alt="urartec" />

        <p className='result_text'>{score}/22 какой бы не был результат никогда не поздно прочитать кингу по истории Армении или подписаться на наш паблик в Telegram !</p>
            

            <NavLink to="/">
              <button className='result_button'>Вернутся</button>
            </NavLink>
                
        </div>
    </div>
  )
}