import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";
import Tournaments from "./components/pages/Tournaments";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tournaments" exact component={Tournaments} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
