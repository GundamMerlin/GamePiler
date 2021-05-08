import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export default function Landing(props) {
  return (
    <div>
      <SignUp />
      <SignIn verify={props.verify}/>
    </div>
  )
}
