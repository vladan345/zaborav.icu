import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/sanity/sanity-utils";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="p-20">
      <h1 className="text-[64px] mb-20 mt-20">Blogs</h1>
      <div className="grid-cols-3 grid gap-10">
        {blogs.map((blog) => (
          <div
            className="bg-slate-800 p-4 rounded-md min-h-[400px]"
            key={blog._id}
          >
            <Image src={blog.image} alt="" width={800} height={500} />
            <h2 className="text-[24px] my-4">{blog.title}</h2>
            <span>{blog._createdAt.split("T").join(" ").split("Z")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
