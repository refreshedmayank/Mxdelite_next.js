import SecondHero from "./secondhero";

function Hero() {
  return (
    <>
      <div className=" min-h-[calc(100vh-40px)] flex flex-col justify-center items-center p-6">
          <h1 className="text-center text-3xl mb-8">
            We turn invisible businesses into brands that own the room.
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span>Websites</span>
            <span>Brand Identity</span>
            <span>Social Media</span>
          </div>

      </div>

      <SecondHero />
    </>
  );
}

export default Hero;