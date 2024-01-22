import { promises as fs } from "fs";

interface Project {
  id: string,
  video: string,
  title: string,
  content: string
}

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;

  const file = await fs.readFile("projects.json", "utf-8");
  const data = JSON.parse(file);

  const item = data.find((item: Project) => item.id === id)

  if (!item) {
    return (
      <div>
        Project not found
      </div>
    )
  }

  return (
    <div className="flex-col text-center">
      <h1>{item.title}</h1>
      <h2>{item.id}</h2>
      <h2>{item.content}</h2>
    </div>
  )
}