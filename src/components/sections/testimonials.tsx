'use client';

import { TESTIMONIALS } from '@/lib/data';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Card from '@/components/layout/card';
import Image from 'next/image';
// import ImageWrapper from '../data-display/image-wrapper';

const TestimonialsSection = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <Container ref={ref} id='testimonials'>
      <div className={`flex flex-col items-center gap-4 ${animate ? 'animate-panInBottom' : ''}`}>
        <Typography variant="h2" className="text-center">
          Testimonials
        </Typography>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="transition-transform duration-300 hover:scale-105 m-3">
              <div className="flex flex-col items-center p-4">
                {/* <img src={testimonial.personAvatar! } alt={testimonial.personName} className="rounded-full w-16 h-16 mb-6 m-3" /> */}
                <Image className='rounded-full w-16 h-16 mb-6' src={testimonial.personAvatar!} alt={`${testimonial.personName} avatar` }></Image>
                <Typography variant="body1" className="text-center">
                  {testimonial.testimonial}
                </Typography>
                <Typography variant="subtitle" className="font-semibold mt-2">
                  {testimonial.personName}
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  {testimonial.title}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
