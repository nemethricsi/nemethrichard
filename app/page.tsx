import Image from 'next/image';
import authorImage from '@/public/images/authors/richard.jpg';
import fmzProjectImage from '@/public/images/projects/fmz.jpg';
import puszafalatProjectImage from '@/public/images/projects/puszafalat.jpg';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getProjectsMetadata } from '@/app/actions/projects';
import { ProjectCardList } from '@/app/projects/page';

export default async function HomePage() {
  const mostRecentProjects = await getProjectsMetadata(2);

  return (
    <section className="pb-24 pt-24 sm:pt-40">
      <div className="container flex max-w-3xl flex-col gap-8">
        <Intro />
        <section>
          <h2 className="title mb-10">Recent projects</h2>
          <ProjectCardList projects={mostRecentProjects} />
          <Link
            href="/projects"
            className="mt-3 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground"
          >
            <span>All projects</span>
          </Link>
        </section>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Hey, I&apos;m Richard.</h1>
        <p className="mt-3 font-light text-muted-foreground">
          I&apos;m a software developer and product designer based in Budapest,
          Hungary. I&apos;m passionate about learning new technologies and
          creating products that are useful and enjoyable to use.
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
