import { Button } from '@/components/ui/button';
import Link from '@/app/components/link-wapper';

export default function NotFound() {
  return (
    <section className="pb-24 pt-24 sm:pt-40">
      <div className="container flex max-w-3xl flex-col items-center justify-center gap-8">
        <h2 className="scroll-m-20 border-b pb-2 font-serif text-3xl font-semibold tracking-tight first:mt-0">
          404 • Not Found
        </h2>
        <p>Could not find requested resource</p>
        <Button variant="outline" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </section>
  );
}
