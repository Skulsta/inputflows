import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const notPublishedCategory = "8ee6c63d-e8ff-407a-ba9c-92e011bf950a";

  const renderPosts = (category = null) => {
    if (allPosts) {
      setActiveFilter(category);
      let posts = [...allPosts].filter(
        (post) => !post.categories?.some((c) => c._ref === notPublishedCategory)
      );
      if (category) {
        posts = posts.filter((post) =>
          post.categories?.some((c) => c._ref === category)
        );
      }

      setFilteredPosts(posts);
    }
  };

  useEffect(() => {
    renderPosts();
    console.log("hey");
  }, [allPosts]);

  return (
    <div className="bg-opacity-25">
      <div className="flex max-w-screen-xl mx-auto justify-center p-4">
        <div>
          <div className="flex pt-8 pb-4 justify-between items-end">
            <h2 className="text-gray-800 text-3xl">Recent Posts</h2>
            <div className="flex space-x-4 sm:space-x-4 text-gray-800 font-light">
              <div
                onClick={() => renderPosts("")}
                className={`text-xl cursor-pointer ${
                  !activeFilter && "text-green-900"
                }`}
              >
                <span className="text-gray-800 font-thin">#</span>
                nofilter
              </div>
              <div
                className={`text-xl cursor-pointer ${
                  activeFilter === codeCategory && "text-green-800"
                }`}
                onClick={() => renderPosts(codeCategory)}
              >
                Code
              </div>
              <h2 className="text-xl cursor-pointer">All Posts</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!filteredPosts ? (
              <div>Loading...</div>
            ) : (
              filteredPosts.map((post, index) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
