import './App.css';
import Home from './page/home/Home';
import Profile from './page/profile/Profile';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/profile/:name" component={Profile}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
