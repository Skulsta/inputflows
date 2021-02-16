import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "0mmj4zq3",
  dataset: "production",
  useCdn: true,
});
