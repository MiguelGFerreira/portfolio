import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Project 1 description',
    imageUrl: '/project-1.jpg',
    link: '/projects/1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Project 2 description',
    imageUrl: '/project-2.jpg',
    link: '/projects/2',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto text-center mt-8">
      <h2 className="text-3xl font-semibold mb-4">Welcome!</h2>
      <p className="text-gray-700 mb-8">
        Hi! I'm Miguel, passionate about technology, programming, and problem-solving. Below are some of the projects I've been involved in
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.id}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              <Image src={project.imageUrl} alt={project.title} width={300} height={200} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
