'use client'

import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <Container ref={ref} className='p-5 sm:p-0'>
      <div className={`flex flex-col items-center gap-4 ${animate ? 'animate-panInBottom' : ''}`}>
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I excel in:
        </Typography>
      </div>

      <div className="grid animate-pulse grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <div className="transition-transform duration-300 hover:scale-105" key={index}>
            <TechDetails {...technology} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
