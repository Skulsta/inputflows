import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import CompanySearch from "./views/CompanySearch/CompanySearch";
import HeroSection from "./views/Home/HeroSection";
import ScrollToTop from "./utilities/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationBar />
      <Switch>
        <Route component={HeroSection} path="/" exact />
        <Route component={AllPosts} path="/posts" exact />
        <Route component={OnePost} path="/posts/:slug" />
        <Route component={CompanySearch} path="/brreg" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
