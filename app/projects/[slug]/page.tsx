import { getProjectBySlug } from '@/app/actions/projects';
import { Tags } from '@/app/components/tags';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { data, content } = await getProjectBySlug(slug);

  return (
    <section className="pb-24 pt-24 sm:pt-40">
      <div className="container flex max-w-3xl flex-col gap-8">
        <h1 className="title">{data.title}</h1>
        <Tags tags={data.tags} />
        <Image
          src={data.image}
          alt={data.title}
          width={1000}
          height={1000}
          className="rounded-md"
          priority
        />
        <div className="prose dark:prose-invert">
          <MDXRemote source={content} />
        </div>
      </div>
    </section>
  );
}
