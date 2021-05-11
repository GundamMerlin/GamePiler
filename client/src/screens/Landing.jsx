import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import "./Landing.css"


export default function Landing(props) {
  return (
    <div className ="landing-page-container">
      <SignIn verify={props.verify} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} />
      <SignUp setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} />
    </div>
  )
}
