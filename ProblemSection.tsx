import damagedMonument from "@/assets/damaged-monument.jpg";

const ProblemSection = () => {
  return (
    <section 
      id="problem"
      className="min-h-screen flex items-center relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${damagedMonument})`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto section-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Why Preservation Matters
          </h2>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20">
            <p className="text-lg md:text-xl leading-relaxed">
              Our monuments are fading due to <span className="text-heritage-gold font-semibold">pollution</span>, 
              <span className="text-heritage-gold font-semibold"> climate change</span>, and 
              <span className="text-heritage-gold font-semibold"> neglect</span>. 
              If not preserved digitally, we risk losing our history forever.
            </p>
            <p className="mt-6 text-heritage-gold font-medium text-lg">
              Every day we wait, we lose another piece of our cultural identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;