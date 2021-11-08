import React from "react";
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import About from "./pages/About";
import AboutApp from "./pages/AboutApp";
import AboutAuthor from "./pages/AboutAuthor";
import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={TodoPage}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/about/app' component={AboutApp}></Route>
          <Route exact path='/about/author' component={AboutAuthor}></Route>
          <Route path='*' component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;

