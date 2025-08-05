function Hero() {
  return (
    <section className="p-8">
      <img
        src="/assets/palm.jpg"
        alt="Palm Tree"
        className="w-full h-auto rounded-lg shadow-md"
      />{" "}
      <div className="relative z-10 text-black p-10 bg-white rounded-t-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 font-serif">
          Find your perfect
          <br /> Travel destination
        </h2>
      </div>
    </section>
  );
}

export default Hero;
