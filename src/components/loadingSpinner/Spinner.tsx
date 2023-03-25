import './Spinner.scss';

export const SpinnerComponent = ({ variant }: { variant: string }) => {
  return (
    <div className={`spinner__container--${variant}`}>
      <div className="spinner"></div>
    </div>
  );
};
