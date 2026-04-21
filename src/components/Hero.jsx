import SecondHero from "./secondhero";

function Hero() {
  return (
    <>
      <div className="hero">
        <section className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            We turn invisible businesses into brands that own the room.
          </h1>

          <div className="flex justify-center gap-4 text-sm text-white/70">
            <span>Websites</span>
            <span>Brand Identity</span>
            <span>Social Media</span>
          </div>
        </section>
      </div>

      <SecondHero />
    </>
  );
}

export default Hero;