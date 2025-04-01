"use client";

import Image from "next/image";

export default function Home() {
  console.log('runninng nextjs')
  return (
   <div>
    <h1 onClick={()=>{
      console.log('Clicked')
    }}>Hello world</h1>
   </div>
  );
}
