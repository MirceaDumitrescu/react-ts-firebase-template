import React, { FC } from 'react';

interface Props
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLSpanElement | HTMLDivElement | HTMLParagraphElement
  > {
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'text-small' | 'text-large' | 'heading-small' | 'heading-large';
  children?: React.ReactNode;
  className?: string;
}

const Txt: FC<Props> = ({
  as: Component = 'div',
  variant = 'text-small',
  children,
  className = ''
}) => {
  return <Component className={`${className}--${variant}`}>{children}</Component>;
};

export default Txt;
