import React from 'react'
import { Link, useHistory } from 'react-router-dom'


export default function NavBar() {
  const history = useHistory();
  
  // const logout = async () => {
  //   await localStorage.clear();
  //   setToggle((prevState) => !prevState);
  //   history.push("/");
  // };

  return (
    <div>
      <Link>Home</Link>
      <Link>Add Game</Link>
      <Link>Add Console</Link>
      <Link>Add Backlog</Link>
      {/* <button onSubmit={logout}>Signout</button> */}
    </div>
  )
}
