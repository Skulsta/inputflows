import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

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

  const notPublished = "8ee6c63d-e8ff-407a-ba9c-92e011bf950a";

  return (
    <div className="bg-opacity-25">
      <div className="flex max-w-screen-xl mx-auto justify-center p-4">
        <div>
          <h2 className="text-gray-800 text-3xl flex pt-8 pb-4">Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData &&
              allPostsData.map(
                (post, index) =>
                  !post.categories?.some((c) => c._ref === notPublished) && (
                    <Link
                      to={"/posts/" + post.slug.current}
                      key={post.slug.current}
                    >
                      {console.log(post.categories)}
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
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
