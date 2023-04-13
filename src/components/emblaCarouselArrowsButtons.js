export const PrevButton = (props) => {
  const { enabled, onClick } = props;

  return (
    <div className="button-diamond" onClick={onClick} disabled={!enabled}>
      <div className="button-diamond-inner">
        <div className="button-diamond-arrow-container">
          <div className="arrow-line ">
            <div className="arrow-head arrow-head-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NextButton = (props) => {
  const { enabled, onClick } = props;

  return (
    <div className="button-diamond" onClick={onClick}>
      <div className="button-diamond-inner">
        <div className="button-diamond-arrow-container">
          <div className="arrow-line">
            <div className="arrow-head arrow-head-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
