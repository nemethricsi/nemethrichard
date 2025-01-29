import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
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
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
