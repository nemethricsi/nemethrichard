import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      <Card>
        <CardHeader>
          <CardTitle>Project 1</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, doloremque.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Project 1</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, doloremque.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
