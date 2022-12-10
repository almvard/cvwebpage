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
          "Arbetar i ett agilt team med både frontend och backendutvecklare, UX, testare, scrum master och produktägare. Huvudfokus är att utveckla ny funk1onalitet för området Pension och försäkring ut mot kund. Frontend är byggd i React/typescript med LESS för styling. Backend är byggd i Java. Här har jag utvecklats till att kunna ta en mer ledande roll för vår frontend.",
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
        label: "Linköpings universitet",
        place: "Handelsbanken AB",
        years: "2019-2021",
        description: "lorem ipsum",
      },
    ],
    other: [
      {
        label: "Aktivitetansvarig",
        place: "Handelsbanken AB",
        years: "2021-2021",
        description: "loremi ipsum",
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
    <div
      className="row"
      style={{
        width: "100%",
        backgroundColor: "#1987542e",
        borderRadius: "10px",
      }}
    >
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
          {tmp.education.map((edu) => (
            <DisplayExperience {...edu} />
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
