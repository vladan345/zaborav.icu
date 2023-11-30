import { getBlogs } from "@/sanity/sanity-utils";

import Hero from "./ui/Hero";
import Latest from "./ui/Latest";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main>
      <Hero />
      <Latest />
    </main>
  );
}
