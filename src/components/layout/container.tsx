import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses(
          'w-full bg-gray py-16 md:py-20 2xl:py-24',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6  2 md:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = 'Container';

export default Container;
