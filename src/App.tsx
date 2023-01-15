import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Experience } from "./components/Experience";

import "./App.css";
import { useEffect, useRef, useState } from "react";
import { SkillSlider } from "./components/SkillSlider";

export const App = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const skills = [
    { skill: "React", skillLevel: 60 },
    { skill: "Typescript", skillLevel: 70 },
    { skill: "CSS/Less", skillLevel: 60 },
    { skill: "HTML", skillLevel: 60 },
    { skill: "Git", skillLevel: 50 },
    { skill: "Azure", skillLevel: 40 },
    { skill: "Jira", skillLevel: 60 },
    { skill: "Java", skillLevel: 20 },
    { skill: "SQL", skillLevel: 30 },
    { skill: "Axure", skillLevel: 40 },
    { skill: "Adobe XD", skillLevel: 30 },
    { skill: "Svenska", skillLevel: 100 },
    { skill: "Engelska", skillLevel: 100 },
  ];

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
          <section className={""}>
            <div className={"app-skillslider-container"}>
              {skills.map((item) => (
                <SkillSlider skill={item.skill} skillLevel={item.skillLevel} />
              ))}
            </div>
          </section>
          <Experience />
        </section>
      </div>
    </div>
  );
};
