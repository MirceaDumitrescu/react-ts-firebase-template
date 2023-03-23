import './Spinner.scss';

export const SpinnerComponent = ({ variant }: { variant: string }) => {
  // TODO: Add multiple variation of spinners based o parameters
  /* if (variant === 'small') {
   * return (
   *  <div className=`spinner__container--${variant}`>
   *  <div className="spinner"></div>
   *  </div>
   *  );
   */
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};
