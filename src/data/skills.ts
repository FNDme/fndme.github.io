import reactIcon from "@/assets/icons/react-colored.svg";
import angularIcon from "@/assets/icons/angularjs-colored.svg";
import ionicIcon from "@/assets/icons/ionic-colored.svg";
import typescriptIcon from "@/assets/icons/typescript-colored.svg";
import tailwindIcon from "@/assets/icons/tailwindcss-colored.svg";
import nextjsIcon from "@/assets/icons/nextjs-colored-dark.svg";
import graphqlIcon from "@/assets/icons/graphql-colored.svg";
import apolloIcon from "@/assets/icons/apollo.svg";
import electronIcon from "@/assets/icons/electron-colored.svg";
export interface Skill {
  name: string;
  color: string;
  description: string;
  imageSrc?: string;
  combinedImageSrc?: { src: string; alt: string }[];
}

export const skills: Skill[] = [
  {
    name: "React",
    color: "from-blue-400 to-cyan-400",
    description: "Modern UI Development",
    imageSrc: reactIcon,
  },
  {
    name: "Angular",
    color: "from-red-500 to-pink-500",
    description: "Enterprise Applications",
    imageSrc: angularIcon,
  },
  {
    name: "Ionic",
    color: "from-blue-500 to-blue-600",
    description: "Mobile Applications",
    imageSrc: ionicIcon,
  },
  {
    name: "TypeScript",
    color: "from-blue-500 to-blue-600",
    description: "Type-Safe Development",
    imageSrc: typescriptIcon,
  },
  {
    name: "Tailwind CSS",
    color: "from-cyan-400 to-teal-400",
    description: "Rapid Styling",
    imageSrc: tailwindIcon,
  },
  {
    name: "Next.js",
    color: "from-gray-600 to-gray-900",
    description: "Server-Side Rendering",
    imageSrc: nextjsIcon,
  },
  {
    name: "GraphQL + Apollo",
    color: "from-purple-500 to-pink-500",
    description: "Data Fetching",
    combinedImageSrc: [
      {
        src: graphqlIcon,
        alt: "GraphQL",
      },
      {
        src: apolloIcon,
        alt: "Apollo",
      },
    ],
  },
  {
    name: "Electron",
    color: "from-gray-600 to-gray-900",
    description: "Desktop Applications",
    imageSrc: electronIcon,
  },
];
