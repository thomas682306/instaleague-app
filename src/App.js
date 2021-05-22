import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";
import Real from "./components/pages/SignUp/real"

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/sign_up" exact component={Real} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
