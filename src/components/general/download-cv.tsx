'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/EMMANUEL WILLIAM_CV.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
