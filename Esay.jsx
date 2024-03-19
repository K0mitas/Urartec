import React, { useState, useContext } from 'react'
import dokazi from "./../img/armyanin.png"
import { QuizContext } from '../components/Context'
import {quizesay} from '../components/Questions'
import { NavLink } from 'react-router-dom';

export default function Esay() {
  const {score, setScore} = useContext(QuizContext)

  const [chose, setChose] = useState("")
  const [curr, setCurr] = useState(0)


  const nextquset = () => {
    if (quizesay[curr].correct == chose) {
      setScore?.(score + 1)
    }
    setCurr(curr + 1)
  } 

  const finish = () => {
    if (quizesay[curr].correct == chose) {
      setScore?.(score + 1)
    }
  }


  console.log(score)


  return (
    <>
    <div className='esay_hajime'>

        <div className='esay_block'>

            <div className='esay_img_block'>
                <img className='esay_imges' src={dokazi} alt="quizimg" />
                <span className='esay_questions_number'>{quizesay[curr].number}/22</span>
            </div>

            <p className='esay_coueistion'>{quizesay[curr].question}</p>

            <ul className='esay_ul_button'>
                    <li className='esay_li'><button onClick={() => setChose("answerone")} className='esay_button'>{quizesay[curr].answerone}</button></li>
                    <li className='esay_li'><button onClick={() => setChose("answertwo")} className='esay_button'>{quizesay[curr].answertwo}</button></li>
                    <li className='esay_li'><button onClick={() => setChose("answerfre")} className='esay_button'>{quizesay[curr].answerfre}</button></li>
                    <li className='esay_li'><button onClick={() => setChose("answerfour")} className='esay_button'>{quizesay[curr].answerfour}</button></li>
            </ul>

            {curr == quizesay.length - 1 ? (
              <NavLink to="/result">
              <button className='next_questions' onClick={finish}>Итог</button>
              </NavLink>
            ) : (
              <button onClick={nextquset} className='next_questions'>Следующий вопрос</button>
            ) }

        </div>
    </div>

    </>

  )
}