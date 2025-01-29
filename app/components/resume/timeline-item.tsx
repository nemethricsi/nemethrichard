import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { TypographyInlineCode } from '@/components/ui/typography/typography-inline-code';
import { ChevronDown } from 'lucide-react';
import type React from 'react';

type TimelineItemProps = {
  icon: React.ReactNode;
  title: string;
  company: string;
  date: string;
  description: string;
};

export const TimelineItem = ({
  icon,
  title,
  company,
  date,
  description,
}: TimelineItemProps) => {
  return (
    <div className="group relative pb-8 pl-8">
      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-muted-foreground">
        {icon}
      </div>
      <div className="absolute left-3 top-6 h-full w-0.5 bg-muted group-last:hidden"></div>
      <div className="bg-card">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="font-medium text-card-foreground">{company}</p>
        <p className="mb-2 text-muted-foreground">{date}</p>
        <Collapsible>
          <div className="flex items-start justify-between">
            <p className="text-muted-foreground">{description}</p>

            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="flex-shrink-0 bg-card data-[state=open]:rotate-180 data-[state=open]:bg-accent"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>Handling the design system</li>
              <li>
                Creating accessible components with{' '}
                <TypographyInlineCode>@radix-ui</TypographyInlineCode>
              </li>
              <li>handling the design system</li>
              <li>handling the design system</li>
              <li>handling the design system</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};
