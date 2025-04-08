import Link from "next/link";

export default function Services() {
  return (
    <div>
      <h1>All Services page</h1>
      <p>
        {" "}
        <Link href="/">app development</Link>
      </p>
      <p>
        {" "}
        <Link href="/services/web-dev">web development</Link>
      </p>
      <p>
        {" "}
        <Link href="/services/seo">seo development</Link>
      </p>
      <p>
        {" "}
        <Link href="/">Home development</Link>
      </p>
      <p></p>
      <Link href="/">Home</Link>
    </div>
  );
}
