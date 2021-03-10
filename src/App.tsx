import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/pages/Index';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>

    </Router>
  );
}

export default App;
