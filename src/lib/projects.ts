import project1Before from "@/assets/project-1-before.jpg";
import project1After from "@/assets/project-1-after.jpg";
import project2Before from "@/assets/project-2-before.jpg";
import project2After from "@/assets/project-2-after.jpg";
import project3Before from "@/assets/project-3-before.jpg";
import project3After from "@/assets/project-3-after.jpg";
import project4Before from "@/assets/project-4-before.jpg";
import project4After from "@/assets/project-4-after.jpg";
import project5Before from "@/assets/project-5-before.jpg";
import project5After from "@/assets/project-5-after.jpg";
import project6Before from "@/assets/project-6-before.jpg";
import project6After from "@/assets/project-6-after.jpg";
import project7Before from "@/assets/project-7-before.jpg";
import project7After from "@/assets/project-7-after.jpg";

export type Project = { id: string; before: string; after: string };

export const projects: Project[] = [
  { id: "villa-exterior", before: project1Before, after: project1After },
  { id: "pool-recovery", before: project2Before, after: project2After },
  { id: "bathroom-renovation", before: project3Before, after: project3After },
  { id: "kitchen-renovation", before: project4Before, after: project4After },
  { id: "bedroom-renovation", before: project5Before, after: project5After },
  { id: "living-room-renovation", before: project6Before, after: project6After },
  { id: "garden-restoration", before: project7Before, after: project7After },
];

export const featuredProject = projects[0]!;
