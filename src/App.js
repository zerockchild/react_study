import {useState, useEffect} from "react";
import Movie from "./components/Movie.js";
import Home from "./routes/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return <Router>
    <Routes>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  </Router>
}

export default App;
