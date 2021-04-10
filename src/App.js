import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Header } from './components/Header/';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import Home from './containers/home';
import Admin from './containers/admin';
import Error from './containers/error';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/error" component={Error} />
          <Route path="*">
            <Redirect to='/error' />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
