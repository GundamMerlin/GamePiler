import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './services/screens/Landing';
import { verifyUser } from './services/auth';
import {useState, useEffect} from 'react'



function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    verify();
  },[]);

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user)
  }


  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Landing verify={verify}/>
        </Route>
     </Switch>
    </div>
  );
}

export default App;
