import { getProjectsMetadata } from '@/app/actions/projects';
import { ProjectCardList } from '@/app/components/project-card-list';

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
