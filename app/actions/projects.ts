'use server';

import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export type ProjectMetadata = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
  liveUrl: string;
  githubUrl: string;
  publishedAt: string;
};

const projectsRootDirectory = path.join(process.cwd(), 'contents', 'projects');

async function getProjectMetadata(
  fileNameWithExtension: string,
): Promise<ProjectMetadata> {
  const slug = fileNameWithExtension.replace(/\.mdx$/, '');
  const filePath = path.join(projectsRootDirectory, fileNameWithExtension);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const { data } = matter(fileContent);
  return { ...data, slug } as ProjectMetadata;
}

export async function getProjectsMetadata(limit: number = 0) {
  const files = fs.readdirSync(projectsRootDirectory);
  const projects = await Promise.all(files.map(getProjectMetadata));
  const sortedProjects = projects.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return limit > 0 ? sortedProjects.slice(0, limit) : sortedProjects;
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsRootDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const { data, content } = matter(fileContent);
  return { data, content } as { data: ProjectMetadata; content: string };
}
