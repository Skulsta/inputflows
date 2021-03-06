import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Posts from "./views/Posts/Posts";
import OnePost from "./views/Posts/OnePost";
import CompanySearch from "./views/CompanySearch/CompanySearch";
import Home from "./views/Home/Home";
import ScrollToTop from "./utilities/ScrollToTop";

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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
