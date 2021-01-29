import Link from "next/link";

export default function ErrorPage404() {
  return (
    <div>
      <h1>Sorry bro, we don't have any page which you want!</h1>
      <Link href="/">
        <a> Go home brother.</a>
      </Link>
    </div>
  );
}
