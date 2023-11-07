import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/sanity/sanity-utils";

import Hero from "./(Home)/Hero";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main>
      <Hero />
    </main>
  );
}
