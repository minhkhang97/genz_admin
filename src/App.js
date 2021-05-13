import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { DashBroad } from "./guards/DashBroad";
import { PrivateRouter } from "./guards/PrivateRouter";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRouter path="/admin" component={DashBroad} />
      </Switch>
    </Router>
  );
};

export default App;
