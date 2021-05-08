import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './services/screens/Landing';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Landing/>
        </Route>
     </Switch>
    </div>
  );
}

export default App;
