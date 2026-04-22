function Problems() {
  return (
    <div className="min-h-[calc(100vh-40px)] py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-sm text-white/70">01 — The Problem</span>
        <h2 className="text-3xl md:text-4xl  max-w-2xl mx-auto mt-2">
          Your product is good. Your brand is why people aren&apos;t buying.
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Most businesses lose customers before they even get a chance to sell.
          The product is not the problem. The first impression is. We fix that.
        </p>
      </div>

      {/* Problems Cards */}
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        
        {/* Card 1 */}
        <div className="border border-white/20 rounded-2xl p-6 bg-black hover:bg-white/10 transition">
          <span className="text-sm text-white/50 uppercase tracking-wider">Startup</span>
          <h3 className="text-xl  mt-2">
            Have the idea. Don&apos;t have the presentation. That&apos;s the gap we fill.
          </h3>
        </div>

        {/* Card 2 */}
        <div className="border border-white/20 rounded-2xl p-6 bg-black hover:bg-white/10 transition">
          <span className="text-sm text-white/50 uppercase tracking-wider">Ecommerce</span>
          <h3 className="text-xl  mt-2">
            Spending on ads but losing sales at first impression. Branding is
            the fix they are not pulling.
          </h3>
        </div>

        {/* Card 3 */}
        <div className="border border-white/20 rounded-2xl p-6 bg-black hover:bg-white/10 transition">
          <span className="text-sm text-white/50 uppercase tracking-wider">Business</span>
          <h3 className="text-xl mt-2">
            Your online presence is your first impression. We make sure it is
            the right one.
          </h3>
        </div>

      </div>
    </div>
  );
}

export default Problems;