import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Serias from "./Pages/Serias/Serias";
import Search from "./Pages/Search/Search";


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path='/' component={Trending} exact/>
              <Route path='/movies' component={Movies}/>
              <Route path='/serias' component={Serias}/>
              <Route path='/search' component={Search}/>
            </Switch>
          </Container>
        </div>

        <SimpleBottomNavigation />
      </BrowserRouter>
    );
  }
}
