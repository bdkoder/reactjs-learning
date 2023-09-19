import { Component } from "react";
import Header from './Header'
import MovieList from './MovieList';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/movies" component={MovieList} />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App
