import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "fs";
import { Project, Section } from "@/types";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;

  const file = await fs.readFile("projects.json", "utf-8");
  const data = JSON.parse(file);

  const item = data.find((item: Project) => item.id === id)

  if (!item) {
    return (
      <div className="text-center">
        <p className="text-2xl font-semibold text-red-500">Project not found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <Image
        src={item.mainImage}
        alt="Dashboard preview"
        width={400}
        height={400}
        className="rounded-lg"
      />
      <h1 className="text-3xl font-semibold mt-4">{item.title}</h1>
      <div className="project-content mt-4">
        {item.sections.map((section: Section, index: number) => (
          <section key={index} className={`project-section ${section.type}`}>
            {section.type === "text" && <p className="text-gray-700">{section.content}</p>}
            {section.type === "image" && <Image src={section.src} alt={section.alt} width={300} height={200} className="rounded-md" />}
          </section>
        ))}
        <div className="project-features mt-6">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc ml-6">
            {item.features.map((feature: string, index: number) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        href={item.githubLink}
        target="blank_"
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Github Link
      </Link>
    </div>
  )
}