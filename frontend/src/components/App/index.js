
import './App.css';
import HomePage from '../HomePage';
import Reggae from '../GenrePage/Reggae';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pop from '../GenrePage/Pop';
import HipHop from '../GenrePage/HipHop';
import ClassicRock from '../GenrePage/ClassicRock/index';


function App() {




  return (
    <div className="App">

       <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">HomePage</Link>
              </li>
              <li>
                <Link to="Reggae">Reggae</Link>
              </li>
              <li>
                <Link to="ClassicRock">Classic Rock</Link>
              </li>
              <li>
                <Link to="Pop">Pop</Link>
              </li>
              <li>
                <Link to="HipHop">HipHop</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/Reggae">
              <Reggae />
            </Route>
            <Route path="/ClassicRock">
              <ClassicRock />
            </Route>
            <Route path="/Pop">
              <Pop />
            </Route>
            <Route path="/HipHop">
              <HipHop />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
