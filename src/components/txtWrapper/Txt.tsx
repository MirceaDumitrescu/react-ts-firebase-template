import React, { FC } from 'react';

interface Props
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLSpanElement | HTMLDivElement | HTMLParagraphElement
  > {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'div' | 'p';
  variant?:
    | 'txt-1'
    | 'txt-2'
    | 'txt-3'
    | 'txt-4'
    | 'txt-5'
    | 'txt-6'
    | 'txt-7'
    | 'hl-1'
    | 'hl-2'
    | 'hl-3'
    | 'hl-4'
    | 'hl-5'
    | 'hl-7'
    | 'hl-8'
    | 'hl-9'
    | 'hl-10'
    | 'hl-11'
    | 'field-label-1'
    | 'field-label-2'
    | 'small-text'
    | 'link-1';
  overwrite?: string;
  dataTestId?: string;
}

const Txt: FC<Props> = ({
  as: Component = 'div',
  variant = 'hl-6',
  overwrite = '',
  children,
  className = '',
  dataTestId = ''
}) => {
  return (
    <Component className={'test'} data-testid={dataTestId}>
      {children}
    </Component>
  );
};

export default Txt;
