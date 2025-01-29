'use client';

import { Mail } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { TypographyInlineCode } from '@/components/ui/typography/typography-inline-code';

export const ClickableEmail = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex items-center">
          <Mail className="mr-2 h-5 w-5" />
          <span className="underline-offset-4 group-hover:underline">
            dev@nemethrichard.com
          </span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Want to send a quick message?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Send a message to{' '}
          <TypographyInlineCode>dev@nemethrichard.com</TypographyInlineCode> and
          I will reply you very soon.
        </DialogDescription>
        <Textarea placeholder="Type your message here." />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Go to Mail instead</Button>
          </DialogClose>
          <Button variant="outline" className="bg-card">
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
