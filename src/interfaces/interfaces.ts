
export interface IExperienceObj {
    label: string;
    place: string;
    years: string;
    description?: string;
  }
  export interface IExperience {
    work: IExperienceObj[];
    education: IExperienceObj[];
    other: IExperienceObj[];
  }