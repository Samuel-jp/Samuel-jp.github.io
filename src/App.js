import { 
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout } from 'components';

import Home from './pages/home';
import Cooperation from 'pages/cooperation';
import Jobs from 'pages/jobs';
import About from 'pages/about';

import './App.css';

function App() {
  return (
    <Layout className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cooperation">
          <Cooperation />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </Layout>
  );
}

export default App;
