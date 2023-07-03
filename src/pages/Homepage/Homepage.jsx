import Hero_Section from "./Hero_Section";
import About_Section from "./About_Section";

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <section>
        <Hero_Section />
      </section>

      {/* About Section */}
      <section>
        <About_Section />
      </section>
    </>
  );
};

export default Homepage;
