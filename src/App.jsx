import React, { useState } from 'react'
import bg from '../assets/images/background-pattern-desktop.svg'
import logo from '../assets/images/icon-star.svg'
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'


const FAQs = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer: "Frontend Mentor offers realistic coding challanges to help developers imrove their frontend skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    id: 2,
    question: "  Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."

  },
  {
    id: 3,
    question: "  Can I use Frontend Mentor projects in my portfolio?",
    answer: " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge? ",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
]
  

const App = () => {

  const [ActiveID, setActiveID] = useState(null)
const action =(id) =>{
   setActiveID(ActiveID=== id? null: id);
}
  return (
    <div className='card'>
      <div className='img-area'>
        <img src={bg} alt="#" />
      </div>
      <div>

      </div>
      <div className='faqs-card'>
        <div className='header'>
          <img src={logo} alt="" />
          <h1>FAQs</h1>
        </div>
        <div>
          {
            FAQs.map(oyecomova => (
              <div onClick={()=> action(oyecomova.id)} className='quest-answer' key={oyecomova.id}>
                <div className='quest-faq'>
                <p>{oyecomova.question}</p>
                <button  >
                  {ActiveID === oyecomova.id ? <img src={iconMinus} alt="minus" /> :  <img src={iconPlus} alt="plus" />}
                  
                 

                </button>
                </div>
                { ActiveID === oyecomova.id &&(
                <div className='answer'>
                  <p>{oyecomova.answer}</p>
                </div>
)}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App