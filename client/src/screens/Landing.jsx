import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export default function Landing(props) {
  

  return (
    <div className ="landing-page-container">
      <SignUp setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
      <SignIn verify={props.verify} verify={props.verify} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
    </div>
  )
}
