import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";

export default function Posts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
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

  return (
    <div className="bg-green-800 bg-opacity-25 min-h-screen p-4">
      <div className="flex max-w-screen-xl mx-auto justify-center">
        <div>
          <h2 className="text-5xl flex justify-center cursive p-8">Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData &&
              allPostsData.map((post, index) => (
                <Link
                  to={"/posts/" + post.slug.current}
                  key={post.slug.current}
                >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                    key={index}
                  >
                    <img
                      className="w-full h-full rounded object-cover absolute"
                      src={post.mainImage.asset.url}
                      alt=""
                    />
                    <span className="block relative h-full flex justify-end items-end pb-4">
                      <h2 className="text-gray-900 text-2xl font-bold px-3 py-4 bg-white bg-opacity-75">
                        {post.title}
                      </h2>
                    </span>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
