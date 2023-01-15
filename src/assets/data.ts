import { IExperience } from "../interfaces/interfaces";

export const experienceData: IExperience = {
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
    ],};

export const skills = [
      { skill: "React", skillLevel: 60 },
      { skill: "Typescript", skillLevel: 70 },
      { skill: "CSS/Less", skillLevel: 60 },
      { skill: "HTML", skillLevel: 60 },
      { skill: "Git", skillLevel: 50 },
      { skill: "Java", skillLevel: 40 },
];
