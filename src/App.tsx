import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from './components/headers/MainHeader';
import MainFooter from './components/footer/MainFooter';
import Home from '../src/pages/Index';
import './styles/index.css';

function App() {
  return (
    <>
      <Router>  
        <MainHeader />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Router>

      <MainFooter />
    </>
  );
}

export default App;
