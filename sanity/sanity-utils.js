import { createClient, groq } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: "2021-08-31",
});

export async function getLatestPosts() {
  const res = await client.fetch(
    groq`*[_type == "post"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "category": [category->id,category->title],
    content
  }[0...3]`
  );

  return res;
}

export async function getCategories() {
  const res = await client.fetch(
    groq`*[_type == "category"]{
    _id,
    title,
    id,
  }[0...5]`
  );

  return res;
}
