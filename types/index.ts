export interface Project {
	id: string;
	video: string;
	title: string;
	sections: Section[];
	link: string;
	githubLink: string;
	description: string;
	mainImage: string;
	features: string[];
}

export interface Section {
	type: "text" | "image";
	content?: string;
	src: string;
	alt: string;
}