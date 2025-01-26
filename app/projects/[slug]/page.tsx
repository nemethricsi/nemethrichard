export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <section className="pb-24 pt-24 sm:pt-40">
      <div className="container flex max-w-3xl flex-col gap-8">
        <h1 className="title">fmz.ngo</h1>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </div>
    </section>
  );
}
