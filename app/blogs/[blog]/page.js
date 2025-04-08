import Link from "next/link";

export default async function dynamicBlogs({ params }) {
  console.log(await params);
  const { blog } = await params;
  return (
    <div>
      <h1>Dynamic Blogs</h1>

      <h2>Blogs 1 {blog}</h2>

      <br />
      <Link href={"/"}>home</Link>
    </div>
  );
}
