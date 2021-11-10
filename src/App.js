import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import AboutApp from "./pages/AboutApp";
import AboutAuthor from "./pages/AboutAuthor";
import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path='/' component={TodoPage}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/about/app' component={AboutApp}></Route>
            <Route exact path='/about/author' component={AboutAuthor}></Route>
            <Route path='*' component={NotFoundPage}></Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

