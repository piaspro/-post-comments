import React from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import NotFound from './components/NotFound/NotFound';
import InDetail from './components/InDetail/InDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Posts></Posts>
          </Route>
          <Route path = "/posts">
            <Posts></Posts>
          </Route>
          <Route path="/PostDetails">
              <PostDetails></PostDetails>
          </Route>\
          <Route path = "/InDetail/:Id">
            <InDetail></InDetail>
          </Route>
          <Route path = "*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
