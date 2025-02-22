import * as React from 'react';
import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends  React.HTMLAttributes<HTMLElement> {}


const Card = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
      className={mergeClasses(
        'rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl',
        className
      )}
      ref={ref}
      {...props}
   
    >
      {children}
    </section>
    );
  }
);

Card.displayName = 'Card';
export default Card;
