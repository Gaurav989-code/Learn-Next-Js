"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log('runninng nextjs')
  return (
   <div>
    <h1 onClick={()=>{
      console.log('Clicked')
    }}>Hello world</h1>
    <Link href={'/about'}>About</Link>
    <br />
    <Link href={'/services'}>Services</Link>
   </div>
  );
}
