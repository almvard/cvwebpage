import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { WorkExperiences } from "./components/WorkExperience/WorkExperience";

import "./App.css";
import { useEffect, useRef, useState } from "react";
import { SkillSlider } from "./components/Skillslider/SkillSlider";
import { skills } from "./assets/data";

export const App = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const [y, setY] = useState<number | undefined>();

  const getPosition = () => {
    const y = boxRef.current?.offsetTop;
    setY(y);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  function handleClick() {
    window.scrollTo({ top: y && y - 40, left: 0, behavior: "smooth" });
  }

  return (
    <div className={"app-container"}>
      <div
        style={{ backgroundColor: "#316ebc", width: "100%", height: "40px" }}
      />
      <div className={"col-lg-10 col-md-12 app-content-wrapper"}>
        <section className={"app-first-content"}>
          <Header />
          <Profile onClick={handleClick} />
        </section>
        <section className={"app-second-content"} ref={boxRef}>
          <div className={"app-skillslider-container"}>
            {skills.map((item) => (
              <SkillSlider skill={item.skill} skillLevel={item.skillLevel} />
            ))}
          </div>
          <WorkExperiences />
        </section>
      </div>
    </div>
  );
};
