function Services() {
  return (
    <div className="min-h-[calc(100vh-40px)] py-16 px-6">
      <div className="text-center mb-12">
        <span className="text-sm text-white/70">02 — Services</span>
        <h2 className="text-4xl  mt-2">What We Build</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        
        <div className="border border-white/20 rounded-2xl p-6 bg-black hover:bg-white/10 transition">
          <span className="text-3xl font-bold text-white/30">01</span>
          <h3 className="text-xl font-bold mt-4 mb-2">Websites</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            A website that makes people stop. Built from scratch, designed
            around your brand, and built to convert visitors into clients.
          </p>
          <p className="text-white/70 text-sm italic">The result — presence that sells</p>
        </div>

       
        <div className="border border-white/20 rounded-2xl p-6 bg-black hover:bg-white/10 transition">
          <span className="text-3xl font-bold text-white/30">02</span>
          <h3 className="text-xl font-bold mt-4 mb-2">Brand Identity</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Logo, colour, typography, guidelines. Everything that makes your
            brand instantly recognisable and impossible to ignore.
          </p>
          <p className="text-white/70 text-sm italic">The result — a brand that owns the room</p>
        </div>

        
        <div className="border border-white/20 rounded-2xl p-6 bg-black hover:bg-white/10 transition">
          <span className="text-3xl font-bold text-white/30">03</span>
          <h3 className="text-xl font-bold mt-4 mb-2">Social Media</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            A consistent, considered presence across every platform. Visuals and
            voice built around your brand — not a template.
          </p>
          <p className="text-white/70 text-sm italic">The result — credibility at every touchpoint</p>
        </div>
        
      </div>
    </div>
  );
}

export default Services;