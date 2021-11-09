import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import Home from './page/home/Home';
import Profile from './page/profile/Profile';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import { store, persistor } from './store/store';

function App() {
  return (
    // <BrowserRouter>
    //     <Switch>
    //       <Route path="/" exact component={Home}/>
    //       <Route path="/profile/:name" component={Profile}/>
    //     </Switch>
    // </BrowserRouter>
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home/>  
        </PersistGate>
      </Provider> 
    </div>
  );
}

export default App;
