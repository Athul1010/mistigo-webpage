import React from 'react'
import { useState,useEffect } from 'react'
import { FiArrowUp } from "react-icons/fi";
import '../Styles/BackToTopButton.css'

const BackToTopButton = () => {

    const [backToTopButton,setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
      {
        backToTopButton && (
            <button className='back-to-top-btn' style={{
                fontSize:"30px"
            }}
            onClick={scrollUp}
            >
                <FiArrowUp />
            </button>
        )
      }
    </div>
  )
}

export default BackToTopButton
