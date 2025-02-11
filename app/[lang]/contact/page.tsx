import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function ContactPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return (
    <section className="pb-24 pt-24 sm:pt-40">
      <div className="container flex max-w-3xl flex-col gap-8">
        <h1 className="title">{dict.contactPage.title}</h1>
      </div>
    </section>
  );
}
