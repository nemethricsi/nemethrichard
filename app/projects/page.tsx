import { getProjectsMetadata, ProjectMetadata } from '@/app/actions/projects';
import { ProjectCard } from '@/app/components/project-card';

export default async function ProjectsPage() {
  const projects = await getProjectsMetadata();

  return (
    <section className="pb-24 pt-24 sm:pt-40">
      <div className="container flex max-w-3xl flex-col gap-8">
        <h1 className="title">Projects</h1>
        <ProjectCardList projects={projects} />
      </div>
    </section>
  );
}

export const ProjectCardList = ({
  projects,
}: {
  projects: ProjectMetadata[];
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
};
