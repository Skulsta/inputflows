import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import Moment from "moment";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import GoBack from "../assets/icons/back-arrow.svg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image,
          "publishedAt": publishedAt
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen sm:p-8  max-w-screen-2xl">
      <Link to="/posts" className="flex z-20 sticky top-0">
        <div className="px-4 py-6">
          <img src={GoBack} alt="Go back" />
        </div>
        <div className="text-gray-700 self-center">Go back</div>
      </Link>
      <div className="container shadow-xl mx-auto bg-green-800 bg-opacity-25 rounded-lg sm:mt-8">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4">
                {postData.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Kap"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {postData.name}
                </h4>
              </div>
              <div className="text-sm text-center pt-2">
                {Moment(
                  new Date(postData.publishedAt).toISOString().slice(0, 10)
                ).format("ll")}
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(postData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          />
        </div>
        <div className="px-8 sm:px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}
