import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
import { PageNotFound } from "./components/pages/PageNotFound";
import Navbar from "./components/navbar/Navbar";
import "./sass/main.scss";

function App() {
  return (
    <>
      <Router>
        <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
