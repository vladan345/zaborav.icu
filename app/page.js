import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/sanity/sanity-utils";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="p-20 max-w-[1400px] mx-auto">
      <h1 className="text-[64px] mb-20 mt-20">Blogs</h1>
      <Link href="/about">About us</Link>
      <div className="grid-cols-3 grid gap-10">
        {blogs.map((blog) => (
          <div
            className="bg-secondary rounded-[12px] min-h-[400px] border-2 border-b-color"
            key={blog._id}
          >
            <Image
              className="rounded-t-[12px]"
              src={blog.image}
              alt=""
              width={800}
              height={500}
            />
            <div className="p-4">
              <h2 className="text-[24px] my-4">{blog.title}</h2>
              <span>{blog._createdAt.split("T").join(" ").split("Z")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
