import "./DisplayExperience.css";
import { IExperienceObj } from "../../interfaces/interfaces";

export const Experience = ({
  label,
  description,
  years,
  place,
}: IExperienceObj) => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div className={"experience-container"}>
        <h4>{label}</h4>
        <span>{`${place} | ${years}`}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};
