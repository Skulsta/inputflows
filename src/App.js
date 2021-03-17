import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import mixpanel from "mixpanel-browser";
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
  process.env.NODE_ENV === "production"
    ? mixpanel.init(process.env.REACT_APP_MIXPANEL_PROD)
    : mixpanel.init("3efa8020cfd68b36a8a850b6ff26fc95");
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
