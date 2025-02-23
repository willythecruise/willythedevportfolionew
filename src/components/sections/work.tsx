'use client'
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const WorkSection = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <Container id="work" ref={ref}>
      <div className={`flex flex-col items-center gap-4  ${animate ? 'animate-panInLeft' : ''}`}>
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
