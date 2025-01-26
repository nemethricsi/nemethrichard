import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ProjectMetadata } from '@/app/actions/projects';
import { Button } from '@/components/ui/button';
import { LinkIcon, CodeIcon, ArrowRightIcon } from 'lucide-react';

export const ProjectCard = ({
  title,
  description,
  image,
  slug,
  githubUrl,
  liveUrl,
}: ProjectMetadata) => {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="gap-2">
        <CardTitle className="font-serif">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Image
          src={image}
          alt="image"
          quality={100}
          width={0}
          height={0}
          sizes="100%"
          className="h-auto w-full rounded-lg object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </CardContent>
      <CardFooter className="items-center justify-between p-6">
        <div className="flex gap-2">
          <Button asChild variant="outline" size="icon">
            <Link href={githubUrl} target="_blank">
              <CodeIcon />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href={liveUrl} target="_blank">
              <LinkIcon />
            </Link>
          </Button>
        </div>
        <Button asChild variant="outline">
          <Link href={`/projects/${slug}`}>
            Read more
            <ArrowRightIcon />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
