import React from "react";
import Home from "./Home";
import Academic from "./Academic";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Projects from "./Projects";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import YearGroups from "./YearGroups";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/academic" component={Academic} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/projects" component={Projects} />
        <Route path="/yeargroups" component={YearGroups} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
