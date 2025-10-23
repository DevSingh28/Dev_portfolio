// Between sections
const Portfolio = () => {
  return (
    <div>
      <HeroSection />

      {/* Connector between Hero and Skills */}
      <div className="py-10 bg-gray-900">
        <ScrollRevealDivider
          color="cyan"
          direction="center"
          thickness={3}
          withGlow={true}
        />
      </div>

      <SkillsSection />

      {/* Connector between Skills and Projects */}
      <div className="py-10 bg-gray-900">
        <ScrollRevealDivider
          color="blue"
          direction="left"
          thickness={2}
          withGlow={true}
        />
      </div>

      <ProjectsSection />
    </div>
  );
};

// In your hero section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Your Name</h1>
        <p className="text-xl text-gray-400 mt-4">Full Stack Developer</p>

        {/* Animated line under title */}
        <ScrollRevealDivider
          color="cyan"
          direction="center"
          thickness={2}
          className="mt-8 max-w-md mx-auto"
        />
      </div>
    </section>
  );
};
