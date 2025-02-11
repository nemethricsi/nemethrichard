import type React from 'react';
import { Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { TimelineItem } from '@/app/components/resume/timeline-item';
import { ClickableEmail } from '@/app/components/resume/clickable-email';

export default function ResumeTimeline() {
  return (
    <section className="pb-24 pt-24 sm:pt-40">
      <div className="container flex max-w-3xl flex-col gap-8">
        <Card className="mx-auto max-w-4xl rounded-lg p-4 shadow-lg sm:p-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-2 font-serif text-4xl font-bold text-foreground">
              Richard Nemeth
            </h1>
            <p className="mb-4 text-xl text-muted-foreground">
              Full Stack Developer
            </p>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <ClickableEmail />
              <span className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +36 (20) 936-9932
              </span>
              <span className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Budapest, HU
              </span>
            </div>
          </header>

          {/* Timeline */}
          <div className="relative">
            {/* Work Experience */}
            <section className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-foreground">
                Work Experience
              </h2>
              <TimelineItem
                icon={<Briefcase className="h-5 w-5 text-background" />}
                title="Senior Developer"
                company="Tech Solutions Inc."
                date="2020 - Present"
                description="Led a team of developers in creating scalable web applications using React and Node.js. Implemented CI/CD pipelines and improved overall code quality."
              />
              <TimelineItem
                icon={<Briefcase className="h-5 w-5 text-background" />}
                title="Full Stack Developer"
                company="WebDev Co."
                date="2017 - 2020"
                description="Developed and maintained multiple client websites. Worked with a variety of technologies including React, Vue.js, and Laravel."
              />
              <TimelineItem
                icon={<Briefcase className="h-5 w-5 text-background" />}
                title="Junior Developer"
                company="StartUp Hub"
                date="2015 - 2017"
                description="Assisted in the development of a SaaS platform. Gained experience in agile methodologies and test-driven development."
              />
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-8 text-2xl font-bold text-foreground">
                Education
              </h2>
              <TimelineItem
                icon={<GraduationCap className="h-5 w-5 text-background" />}
                title="Master of Science in Computer Science"
                company="Tech University"
                date="2013 - 2015"
                description="Focused on advanced algorithms and machine learning. Completed a thesis on optimizing neural networks for edge computing."
              />
              <TimelineItem
                icon={<GraduationCap className="h-5 w-5 text-background" />}
                title="Bachelor of Science in Software Engineering"
                company="State University"
                date="2009 - 2013"
                description="Graduated with honors. Participated in multiple hackathons and coding competitions."
              />
            </section>
          </div>
        </Card>
      </div>
    </section>
  );
}
