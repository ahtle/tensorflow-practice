import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from './components/headers/MainHeader';
import MainFooter from './components/footer/MainFooter';
import Home from '../src/pages/Index';
import ObjectDetectionPage from './pages/object-detection/Index';
import './styles/index.css';

function App() {
  return (
    <>
      <Router basename="/">  
        <MainHeader />

        <div className="min-h-screen">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/object-detection" exact component={ObjectDetectionPage} />
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>

      <MainFooter />
    </>
  );
}

export default App;
