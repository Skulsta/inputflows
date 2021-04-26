import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader.js";
import sanityClient from "../../client.js";

export default function AllPosts() {
  const [allPosts, setAllPosts] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(null);
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        categories,
        publishedAt,
        mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  const codeCategory = "c2fd0b63-d739-44c3-85b9-623a04a05947";
  const toolsCategory = "9cd2c7a9-fc7d-4428-8589-16828f55a446";
  const notPublishedCategory = "8ee6c63d-e8ff-407a-ba9c-92e011bf950a";
  const postsHeader =
    window.location.pathname === "/posts" ? "All Posts" : "Recent Posts";
  let filterText =
    activeFilter === toolsCategory
      ? "So you're interested in my potions and ingredients?"
      : activeFilter === codeCategory
      ? "Oh, so you're an alchemist, then?"
      : "";

  const loading = true;

  const renderPosts = (category = null) => {
    if (allPosts) {
      setActiveFilter(category);
      let posts = [...allPosts].filter(
        (post) => !post.categories?.some((c) => c._ref === notPublishedCategory)
      );
      console.log(posts[0].title);
      posts.sort((a, b) => {
        if (b.publishedAt < a.publishedAt) {
          return -1;
        }
        if (b.publishedAt > a.published) {
          return 1;
        }
        return 0;
      });
      console.log(posts.length);
      if (category) {
        posts = posts.filter((post) =>
          post.categories?.some((c) => c._ref === category)
        );
      }
      if (window.location.pathname === "/") posts = posts.slice(0, 6);

      setFilteredPosts(posts);
    }
  };

  useEffect(() => {
    renderPosts();
  }, [allPosts]);

  return (
    <div className="bg-opacity-25">
      <div className="flex max-w-screen-xl mx-auto justify-center p-4">
        <div>
          {!filteredPosts && <Loader />}
          {filteredPosts && (
            <div className="flex pt-8 pb-2 justify-between items-end text-gray-800">
              <h2 className="text-xl sm:text-3xl">{postsHeader}</h2>
              <div className="flex space-x-2 text-gray-800 font-light text-lg">
                <div
                  onClick={() => renderPosts("")}
                  className={`cursor-pointer hover:text-green-900 ${
                    !activeFilter && "text-green-900"
                  }`}
                >
                  <span className="text-gray-800 font-thin">#</span>
                  nofilter
                </div>
                <div
                  className={`cursor-pointer hover:text-green-900 ${
                    activeFilter === toolsCategory && "text-green-900"
                  }`}
                  onClick={() => renderPosts(toolsCategory)}
                >
                  Tools
                </div>
                <div
                  className={`cursor-pointer hover:text-green-900 ${
                    activeFilter === codeCategory && "text-green-900"
                  }`}
                  onClick={() => renderPosts(codeCategory)}
                >
                  Code
                </div>
                {window.location.pathname !== "/posts" && (
                  <Link
                    to={"/posts"}
                    className="cursor-pointer hover:text-green-900"
                  >
                    All Posts
                  </Link>
                )}
              </div>
            </div>
          )}
          <div className="h-8 text-gray-700 cursive tracking-wider">
            {filterText}
          </div>
          {(filteredPosts || !loading) && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  to={"/posts/" + post.slug.current}
                  key={post.slug.current}
                >
                  <span
                    className="block h-64 relative rounded leading-snug bg-white transition duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                    key={index}
                  >
                    <img
                      className="w-full h-full rounded object-cover absolute"
                      src={post.mainImage.asset.url}
                      alt=""
                    />
                    <span className="relative h-full flex justify-end items-end pb-4">
                      <h2 className="text-gray-800 text-2xl px-3 py-4 bg-white bg-opacity-75">
                        {post.title}
                      </h2>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
