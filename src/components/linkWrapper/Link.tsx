const LinkWrapper = ({
  variant = 'blue',
  url,
  children
}: {
  variant?: 'blue' | 'red';
  url: string;
  children: string | React.ReactNode;
}) => {
  return (
    <a className={variant} href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default LinkWrapper;
