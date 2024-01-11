import { getLatestPosts, getCategories } from "@/sanity/sanity-utils";

import Hero from "./ui/Hero";
import Latest from "./ui/Latest";
import Techs from "./ui/Techs";

export const revalidate = 60;

export default async function Home() {
  const posts = await getLatestPosts();
  const techs = await getCategories();
  return (
    <main>
      <Hero />
      <Latest posts={posts} />
      <Techs techs={techs} />
    </main>
  );
}
