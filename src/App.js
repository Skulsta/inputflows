import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import HeroSection from "./views/Home/HeroSection.js";
import ScrollToTop from "./utilities/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="bg-white py-4 text-gray-700 sticky top-0 z-20 shadow">
          <Link to="/" className="flex max-w-screen-xl px-4 mx-auto">
            <h3 className="text-3xl cursive">Inputflows</h3>
          </Link>
        </nav>
        <ScrollToTop />
        <Switch>
          <Route component={HeroSection} path="/" exact />
          <Route component={AllPosts} path="/posts" exact />
          <Route component={OnePost} path="/posts/:slug" />
        </Switch>
        <footer className="bg-gray-800 py-12">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col mx-4 text-white font-thin leading-loose">
              <h5 className="text-xl font-normal mb-2">Links</h5>
              <div>
                <Link to="/" className="hover:text-green-200">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/posts" className="hover:text-green-200">
                  Posts
                </Link>
              </div>
              <div>
                <a
                  className="hover:text-green-200"
                  href="https://github.com/Skulsta/inputflows"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
