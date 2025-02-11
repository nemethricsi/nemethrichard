import Image from 'next/image';
import authorImage from '@/public/images/authors/richard.jpg';
import Link from '@/app/components/link-wapper';
import { getProjectsMetadata } from '@/app/actions/projects';
import { ProjectCardList } from '@/app/components/project-card-list';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function HomePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  const mostRecentProjects = await getProjectsMetadata(2);

  return (
    <section className="pb-24 pt-24 sm:pt-40">
      <div className="container flex max-w-3xl flex-col gap-8">
        <Intro dict={dict.homePage} />
        <section>
          <h2 className="title mb-10">{dict.homePage.recentProjects}</h2>
          <ProjectCardList projects={mostRecentProjects} />
          <Link
            href="/projects"
            className="mt-3 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground"
          >
            <span>{dict.homePage.allProjects}</span>
          </Link>
        </section>
      </div>
    </section>
  );
}

function Intro({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>['homePage'];
}) {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">{dict.title}</h1>
        <p className="mt-3 font-light text-muted-foreground">
          {dict.description}
        </p>
      </div>
      <div className="relative">
        <Image
          className="flex-1 rounded-lg grayscale"
          src={authorImage}
          alt="Hamed Bahram"
          width={180}
          height={180}
          priority
        />
      </div>
    </section>
  );
}
