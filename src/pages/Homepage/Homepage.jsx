import Hero_Section from "./Hero_Section";
import About_Section from "./About_Section";
import Project_Section from "./Project_Section";

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

      {/* Project Section */}
      <section>
        <Project_Section />
      </section>
    </>
  );
};

export default Homepage;
