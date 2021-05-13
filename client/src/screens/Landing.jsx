import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import {useState} from "react"
import "./Landing.css"
import BackGroundVideo from '../components/BackGroundVideo'


export default function Landing(props) {
  const [newGame, setNewGame] = useState(false)
  const [continueGame, setContinueGame] = useState(false)
  const handleNew = () => {
    setNewGame(!newGame)
  }
  const handleContinue = () => {
    setContinueGame(!continueGame)
  }
  return (
    <div className="landing-page-container">
    
      <BackGroundVideo />
      <SignIn verify={props.verify} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} continueGame={continueGame} handleContinue={handleContinue} />
      <SignUp verify={props.verify} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} newGame={newGame} handleNew={handleNew} />
      
      </div>
  )
}
