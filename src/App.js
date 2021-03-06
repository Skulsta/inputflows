import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Posts from "./views/Posts/Posts";
import OnePost from "./views/Posts/OnePost";
import CompanySearch from "./views/CompanySearch/CompanySearch";
import Home from "./views/Home/Home";
import ScrollToTop from "./utilities/ScrollToTop";
import MemoryGame from "./views/MemoryGame/MemoryGame";
import Playground from "./views/Playground/Playground";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Posts} path="/posts" exact />
        <Route component={OnePost} path="/posts/:slug" />
        <Route component={CompanySearch} path="/brreg" />
        <Route component={MemoryGame} path="/memory" />
        <Route component={Playground} path="/playground" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
