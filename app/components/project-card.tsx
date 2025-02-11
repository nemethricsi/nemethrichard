// import Image from 'next/image';
import Link from 'next/link';
import LocalizedLink from '@/app/components/link-wapper';

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
import { LinkIcon, ArrowRightIcon, CodeIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Tags } from '@/app/components/tags';

export const ProjectCard = ({
  title,
  description,
  slug,
  githubUrl,
  liveUrl,
  tags,
}: ProjectMetadata) => {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="gap-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Tags tags={tags} />
        {/* <Image
          src={image}
          alt="image"
          quality={100}
          width={0}
          height={0}
          sizes="100%"
          className="h-auto w-full rounded-lg object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105"
          priority
        /> */}
      </CardContent>
      <CardFooter className="mt-auto items-center justify-between p-6">
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant="outline" size="icon">
                <Link href={githubUrl} target="_blank">
                  <CodeIcon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>View on Github</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant="outline" size="icon">
                <Link href={liveUrl} target="_blank">
                  <LinkIcon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="select-none">
              Live website
            </TooltipContent>
          </Tooltip>
        </div>
        <Button asChild variant="outline">
          <LocalizedLink href={`/projects/${slug}`}>
            Read more
            <ArrowRightIcon />
          </LocalizedLink>
        </Button>
      </CardFooter>
    </Card>
  );
};
