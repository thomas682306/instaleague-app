import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
