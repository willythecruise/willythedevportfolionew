'use client'

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

import SagarHeadshot from '/public/images/sagar-headshot.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import EmmanuelWilliam from  '/public/images/EmmanuelWilliam.jpg';

const HeroSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <Container id="hero" ref={ref}>
      <div className={`flex flex-col gap-12 md:flex-row ${animate ? 'animate-slide-in' : ''}`}>
        {/* Image */}
        <div className="flex  md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-full md:w-full">
            <Image
              src={EmmanuelWilliam}
              alt="Headshot of Sagar"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-full md:w-full"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
          <div className=" border-b-2  p-10 border-black mb-8 ">
          <p className="font-bold sm:text-6xl text-4xl  "> WILLIAM <br></br> EMMANUEL</p>
          <p>SOFTWARE ENGINEER</p>
          </div>
       
            <Typography className='sm:text-3xl text-xl p-3 font-light tracking-tighter'>
              I am a fullstack software engineer with a BSc in computer science,
               having over 4 years of experience deploying applications. 
               I currently work with Orion Limited, a Texas affiliated Nigerian company in the FCT,
                as a software architect and engineer, where we build industry-grade applications, 
                that provide solutions to large factories.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
            
            
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
