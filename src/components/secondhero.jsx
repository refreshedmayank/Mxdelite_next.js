import Link from "next/link";

function SecondHero() {
  return (
    <div className=" p-10  text-lg">
      <h1>We do not do average.</h1>
      <p>
        Every project is built from scratch. No templates. No shortcuts. No
        compromises. We obsess over the details most agencies ignore — because
        those are exactly the details your audience notices.
      </p>
      <Link href="/contact">Work With Us</Link>
    </div>
  );
}

export default SecondHero;