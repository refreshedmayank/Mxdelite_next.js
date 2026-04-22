import Link from "next/link";

function SecondHero() {
  return (
    <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl  text-center">
        We do not do average.
      </h1>
      
      <p className="text-center text-gray-300 max-w-2xl leading-relaxed">
        Every project is built from scratch. No templates. No shortcuts. No
        compromises. We obsess over the details most agencies ignore because
        those are exactly the details your audience notices.
      </p>
      
      <Link 
        href="/contact" 
        className="  px-8 py-3 rounded-lg text-center hover:underline transition"
      >
        Work With Us
      </Link>
    </div>
  );
}

export default SecondHero;