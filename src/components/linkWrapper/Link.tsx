const Link = ({
  className,
  url,
  children
}: {
  className: string;
  url: string;
  children: string | React.ReactNode;
}) => {
  return (
    <a className={className} href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default Link;
