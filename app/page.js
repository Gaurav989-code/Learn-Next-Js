"use client";

import Image from "next/image";
import Link from "next/link";

export default  function Home({ searchParams, params }) {
  console.log( searchParams);
  console.log( params);
  return (
    <div>
      <h1
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Technical Agency
      </h1>
      <Link href={"/about"}>About</Link>
      <br />
      <Link href={"/blogs"}>Blogs</Link>
      <br />
      <Link href={"/services"}>Services</Link>
    </div>
  );
}
