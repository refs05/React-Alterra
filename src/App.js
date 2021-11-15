import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Contact from "./pages/ContactUs/Contact";
import Home from "./pages/Home/Home";
import Review from "./pages/Review/Review";
import News from "./pages/News/News";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route>
        <News/>
      </Route>
      <Route exact path='/review'>
        <Review />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
