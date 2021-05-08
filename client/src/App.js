import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './services/screens/Landing';
import { verifyUser } from './services';
import {useState, useEffect} from 'react'
import BacklogGallery from './screens/BacklogGallery';
import GameDetails from './screens/GameDetails';
import EditGame from './screens/EditGame';
import AddGame from './screens/AddGame';
import AddConsole from './screens/AddConsole';



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
        <BacklogGallery />
        <GameDetails />
        <EditGame />
        <AddGame />
        <AddConsole />
     </Switch>
    </div>
  );
}

export default App;
