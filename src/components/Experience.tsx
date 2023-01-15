import "./Experience.css";
import { Timeline } from "./Timeline";

export const Experience = () => {
  interface IExperienceObj {
    label: string;
    place: string;
    years: string;
    description?: string;
  }
  interface IExperience {
    work: IExperienceObj[];
    education: IExperienceObj[];
    other: IExperienceObj[];
  }
  const tmp: IExperience = {
    work: [
      {
        label: "Fullstack developer",
        place: "Handelsbanken AB",
        years: "2020-2022",
        description:
          "Arbetar i ett agilt team med både frontend och backendutvecklare, UX, testare, scrum master och produktägare. Huvudfokus är att utveckla ny funktionalitet för området Pension och försäkring ut mot kund. Frontend är byggd i React/typescript med LESS för styling. Backend är byggd i Java. Här har jag utvecklats till att kunna ta en mer ledande roll för vår frontend.",
      },
      {
        label: "Fullstack developer",
        place: "Nexer Tech Talent AB",
        years: "2020-2022",
        description:
          "Genomfört ett Traineeprogram på Handelsbanken via Nexer Tech Talent. Genom traineeprogrammet har jag ett par dagar i månaden gått kurser för att fördjupa mina tekniska kunskaper i exempelvis react, java och testautomation. ",
      },
    ],
    education: [
      {
        label: "Kandidatexamen, Systemvetenskap inriktning Systemutveckling",
        place: "Linköpings universitet",
        years: "2018-2021",
      },
    ],
    other: [
      {
        label: "Aktivitetansvarig",
        place: "Handelsbanken AB",
        years: "2019-2020",
        description:
          "Aktivitetsansvarig för programmets förening som arbetar för ökad jämlikhet inom IT. Arbetet innebar planerande och ansvar för genomförandet av alla aktiviteter och event som anordnades.",
      },
    ],
  };

  const DisplayExperience = ({
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
        <div className={"Timeline-dot"}></div>
        <div className={"experience-one"}>
          <h4>{label}</h4>
          <span>{`${place} | ${years}`}</span>
          <span>{description}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={"row experience-container"}>
      <div className="col-2"></div>
      <div className="col-10">
        <div className={"experience-group-container"}>
          <div className={"experience-timeline timeline-first"} />
          <h3>{"Arbetserfarenhet"}</h3>
          {tmp.work.map((work) => (
            <DisplayExperience {...work} />
          ))}
        </div>
        <div className={"experience-group-container"}>
          <div className={"experience-timeline"} />
          <h3>{"Utbildning"}</h3>
          {tmp.education.map((education) => (
            <DisplayExperience {...education} />
          ))}
        </div>
        <div className={"experience-group-container"}>
          <div className={"experience-timeline timeline-bottom"} />
          <h3>{"Övrig erfarenhet"}</h3>
          {tmp.other.map((other) => (
            <DisplayExperience {...other} />
          ))}
        </div>
      </div>
    </div>
  );
};
