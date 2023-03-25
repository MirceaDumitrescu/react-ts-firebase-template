/* Wrapper for mostly external links */
const LinkWrapper = ({
  variant = 'blue',
  url,
  children,
  blank = false
}: {
  variant?: 'blue' | 'red';
  url: string;
  children: string | React.ReactNode;
  blank?: boolean;
}) => {
  return (
    <a className={variant} href={url} rel="noopener noreferrer" target={blank ? '_blank' : '_self'}>
      {children}
    </a>
  );
};

export default LinkWrapper;
