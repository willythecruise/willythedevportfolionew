import { mergeClasses } from '@/lib/utils';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
import React from 'react';

// const Card = ({ className,refs, children, ...props }: CardProps) => {
//   return (
//     <div
//       className={mergeClasses(
//         'rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl',
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// };
interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}
const Card = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <div
      className={mergeClasses(
        'rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;
