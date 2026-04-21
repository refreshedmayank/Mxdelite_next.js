function Services() {
  return (
    <div className="section">
    <div className=" mt-14 p-3 text-lg ">
      <span>02 — Services</span>
      <h2>What We Build</h2>

      <div className="  flex flex-col gap-6 p-">
        <div className="card" >
          <span>01</span>
          <h3>Websites</h3>
          <p>
            A website that makes people stop. Built from scratch, designed
            around your brand, and built to convert visitors into clients.
          </p>
          <p>The result — presence that sells</p>
        </div>

        <div className="card">
          <span>02</span>
          <h3>Brand Identity</h3>
          <p>
            Logo, colour, typography, guidelines. Everything that makes your
            brand instantly recognisable and impossible to ignore.
          </p>
          <p>The result — a brand that owns the room</p>
        </div>

        <div className="card">
          <span>03</span>
          <h3>Social Media</h3>
          <p>
            A consistent, considered presence across every platform. Visuals and
            voice built around your brand — not a template.
          </p>
          <p>The result — credibility at every touchpoint</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;