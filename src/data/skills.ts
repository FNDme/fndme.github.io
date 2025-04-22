import AngularJS from "@/assets/icons/Angularjs";
import React from "@/assets/icons/React";
import Ionic from "@/assets/icons/Ionic";
import TypeScript from "@/assets/icons/Typescript";
import Tailwind from "@/assets/icons/Tailwindcss";
import NextJS from "@/assets/icons/Nextjs";
import GraphQL from "@/assets/icons/Graphql";
import Apollo from "@/assets/icons/Apollo";
import Electron from "@/assets/icons/Electron";

type ImageComponent = (props: { className?: string }) => React.ReactNode;

export interface Skill {
  name: string;
  color: string;
  description: string;
  ImageComponent?: ImageComponent;
  imageComponentsArray?: ImageComponent[];
}

export const skills: Skill[] = [
  {
    name: "React",
    color: "from-blue-400 to-cyan-400",
    description: "Modern UI Development",
    ImageComponent: React,
  },
  {
    name: "Angular",
    color: "from-red-500 to-pink-500",
    description: "Enterprise Applications",
    ImageComponent: AngularJS,
  },
  {
    name: "Ionic",
    color: "from-indigo-200 to-indigo-500 dark:from-blue-500 dark:to-blue-600",
    description: "Mobile Applications",
    ImageComponent: Ionic,
  },
  {
    name: "TypeScript",
    color: "from-blue-200 to-blue-500 dark:from-blue-500 dark:to-blue-600",
    description: "Type-Safe Development",
    ImageComponent: TypeScript,
  },
  {
    name: "Tailwind CSS",
    color: "from-cyan-400 to-teal-400",
    description: "Rapid Styling",
    ImageComponent: Tailwind,
  },
  {
    name: "Next.js",
    color: "from-gray-600 to-gray-900/50 dark:from-gray-600 dark:to-gray-900",
    description: "Server-Side Rendering",
    ImageComponent: NextJS,
  },
  {
    name: "GraphQL + Apollo",
    color: "from-purple-500 to-pink-500",
    description: "Data Fetching",
    imageComponentsArray: [GraphQL, Apollo],
  },
  {
    name: "Electron",
    color: "from-slate-500 to-slate-200 dark:from-gray-600 dark:to-gray-900",
    description: "Desktop Applications",
    ImageComponent: Electron,
  },
];
