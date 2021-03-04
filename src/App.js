import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import HeroSection from "./views/Home/HeroSection.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="bg-white py-4 text-gray-700 sticky top-0 z-20">
          <Link to="/" className="flex max-w-screen-xl px-4 mx-auto">
            <h3 className="text-2xl cursive">Inputflows</h3>
          </Link>
        </nav>
        <Switch>
          <Route component={HeroSection} path="/" exact />
          <Route component={AllPosts} path="/posts" exact />
          <Route component={OnePost} path="/posts/:slug" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
