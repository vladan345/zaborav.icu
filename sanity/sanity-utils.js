import { createClient, groq } from "next-sanity";

export async function getBlogs() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-11-05",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "blog"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    content
  }`
  );
}
