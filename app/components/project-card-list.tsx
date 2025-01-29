import { ProjectMetadata } from '@/app/actions/projects';
import { ProjectCard } from '@/app/components/project-card';

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
