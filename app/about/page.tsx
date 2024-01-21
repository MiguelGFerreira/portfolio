import Image from "next/image"

export default function About() {
	return (
		<section className="flex flex-col md:flex-row mb-auto">
			<Image
				src="/image1.jpg"
				alt="Picture of me"
				width={800}
				height={800}
			/>
			<div className='flex min-h-screen flex-col p-24 md:w-2/3 mx-auto text-left'>
				<h2 className="text-3xl font-semibold mb-4">Passionate Programmer and Problem Solver</h2>
				<p className="text-gray-700 mb-4">Hello there! I'm Miguel, a 23-year-old tech enthusiast on the brink of graduating with a System Information degree. Currently, I thrive as a dedicated programmer in the IT department of a prominent coffee exporting company.</p>
				<h3 className="font-semibold">Professional Journey:</h3>
				<p className="text-gray-700 mb-4">In the dynamic world of technology, I've found my niche, working diligently in the heart of a coffee export enterprise. Here, I've honed my programming skills, tackling complex challenges in the ever-evolving IT landscape.</p>
				<h3 className="font-semibold">Tech Alchemist:</h3>
				<p className="text-gray-700 mb-4">Programming isn't just a job for me; it's my passion. I revel in the intricacies of coding and delight in finding elegant solutions to problems. Being on the forefront of technological innovation is where I feel most at home.</p>
				<h3 className="font-semibold">Problem Solver:</h3>
				<p className="text-gray-700 mb-4">I thrive on challenges, and problem-solving is at the core of my skill set. Whether it's debugging lines of code or finding innovative solutions to intricate issues, I approach each task with a can-do attitude and a commitment to excellence.</p>
				<h3 className="font-semibold">Global Ambitions:</h3>
				<p className="text-gray-700 mb-4">As I enter the final stretch of my academic journey, I'm eagerly seeking new opportunities that transcend borders. I am open to exciting roles and collaborations worldwide, ready to contribute my skills and passion to diverse projects.</p>
				<h3 className="font-semibold">Let's Connect:</h3>
				<p className="text-gray-700 mb-4">I believe in the power of networking and collaboration. If you're looking for a dedicated programmer with a love for challenges, a passion for coffee, and a global perspective, let's connect! I'm excited about the prospect of bringing my skills to new horizons and making a positive impact.</p>
			</div>
		</section>
	)
}