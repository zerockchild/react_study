import ToDo from "./ToDo";
import CoinTracker from "./CoinTracker";
import MovieApp from "./MovieApp";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/hello">
                  <h1>Hello</h1>
              </Route>
              <Route path="/movie/:id">
                  <Detail/>
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
    /*<div>
        {/!*<ToDo></ToDo>*!/}
        {/!*<CoinTracker></CoinTracker>*!/}
        <MovieApp></MovieApp>
    </div>*/
  );
}

export default App;
