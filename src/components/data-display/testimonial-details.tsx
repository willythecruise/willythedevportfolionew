import Image from 'next/image';

import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import Link from 'next/link';

const TestimonialDetails = ({
  link,
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (


<Link href={link}>

<Card className="mx-3 flex flex-col items-center  p-8 ">
      <Image src={personAvatar!} alt={`${personName} avatar`}></Image>
      <Typography>&quot;{testimonial}&quot;</Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {personName}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
      </div>
    </Card>
</Link>
   
  );
};

export default TestimonialDetails;
