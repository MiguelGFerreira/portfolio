import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "fs";
import { Project } from "@/types";
import path from "path";

export default async function Home() {
  const jsonPath = path.join(process.cwd(), 'public', 'projects.json');
  const file = await fs.readFile(jsonPath, "utf-8");
  const projects = JSON.parse(file);
  const reversedProjects = projects.slice().reverse();

  return (
    <div className="container mx-auto text-center mt-8">
      <h2 className="text-3xl font-semibold mb-4">Welcome!</h2>
      <p className="text-gray-700 mb-8">
        Hi! I'm Miguel, passionate about technology, programming, and problem-solving. Below are some of the projects I've been involved in
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reversedProjects.map((project: Project) => (
          <Link
            href={project.link}
            key={project.id}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              <Image
                src={project.mainImage}
                alt={project.title}
                width={300}
                height={200}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
