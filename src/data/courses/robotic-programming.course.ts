import JavaTestMdx from "@/data/content/java-test.mdx";
import TypeScriptTestMdx from "@/data/content/typescript-test.mdx";
import VideoTestMdx from "@/data/content/video-test.mdx";
import type { Course } from "../types";
import SetupMdx from "@/data/content/setup.mdx";
import StructureMdx from "@/data/content/structure.mdx";

export const roboticProgrammingCourse: Course = {
	id: "robotic-programming",
	name: "Robotic Programming",
	description:
		"Learn the fundamentals of programming an FRC Robot in Java.  This course assume that you already have basic Java programming skills.",
	modules: [
		{
			id: "install",
			name: "How to install stuff",
			description:
				"Set up your development environment with essential tools and software for FRC programming.",
			resources: [
				{
					resourceType: "guide",
					id: "setup-guide",
					name: "Setup Guide",
					completed: false,
					description: "A guide to setup your computer",
					content: SetupMdx,
				},
			],
		},
		{
			id: "structure",
			name: "Codebase Structure",
			description:
				"Understand the structure of an FRC robot codebase and how different components interact.",
			resources: [
				{
					resourceType: "guide",
					id: "structure",
					name: "Codebase Structure",
					completed: false,
					icon: "brain",
					description:
						"Description and flowchart of how our codebase works",
					content: StructureMdx,
				},
			],
		},
	],
};
