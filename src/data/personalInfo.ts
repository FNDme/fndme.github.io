export interface PersonalInfo {
  name: string;
  title: string;
  githubUrl: string;
  email?: string;
  linkedinUrl?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Gabriel Luis",
  title: "Software Developer",
  githubUrl: "https://github.com/FNDme",
  email: "gabiluisfreitas@gmail.com",
  linkedinUrl: "https://linkedin.com/in/gabriel-luis-freitas/",
};
