import "./WorkExperience.css";
import { Experience } from "../DisplayExperience/DisplayExperience";
import { experienceData } from "../../assets/data";

export const WorkExperiences = () => {
  return (
    <>
      <div className={"work-container"}>
        <h3>{"Arbetserfarenhet"}</h3>
        {experienceData.work.map((work) => (
          <Experience {...work} />
        ))}
      </div>
    </>
  );
};
