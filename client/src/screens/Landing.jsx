import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import {useState} from "react"
import "./Landing.css"


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
    <div className ="landing-page-container">
      <SignIn verify={props.verify} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} continueGame={continueGame} handleContinue={handleContinue} />
      <SignUp setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} newGame={newGame} handleNew={handleNew}/>
    </div>
  )
}
