import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import Moment from "moment";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import mixpanel from "mixpanel-browser";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const OnePost = () => {
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
      .then((data) => {
        setPostData(data[0]);
        mixpanel.track("Post view", { Post: slug });
      })
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen max-w-screen-2xl bg-gray-10 mx-auto">
      <div className="flex flex-col shadow-xl mx-auto 2xl:mb-8 bg-green-800 bg-opacity-25 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-4">
            <div className="bg-white bg-opacity-75 rounded p-8 w-full text-center">
              <h2 className="text-3xl md:text-4xl mb-8">{postData.title}</h2>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Kap"
                />
                <h4 className="flex items-center pl-2 text-xl">
                  {postData.name}
                </h4>
              </div>
              <div className="text-center pt-2 text-gray-800">
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
        <div className="px-4 sm:px-16 xl:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
};

export default OnePost;
