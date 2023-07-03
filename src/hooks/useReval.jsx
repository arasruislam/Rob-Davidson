import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useReval = (origin, className) => {
  const animateSection = ScrollReveal();

  const animationConfig = {
    reset: true,
    duration: 1200,
    delay: 200,
    distance: "5rem",
    origin: origin,
    easing: "ease",
  };

  useEffect(() => {
    animateSection.reveal(className, animationConfig);
  }, []);
};

export default useReval;
