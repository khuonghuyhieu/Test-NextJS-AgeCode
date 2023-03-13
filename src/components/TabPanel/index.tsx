import * as React from "react";

export interface BasicTabsProps {}

const BasicTabs: React.FC<BasicTabsProps> = ({}) => {
  const handleTabs = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
  };

  return (
    <div className="tab-panel">
      <div className="bar bar-grey">
        <div className="option" onClick={handleTabs}>
          ONE
        </div>
        <div className="option" onClick={handleTabs}>
          TWO
        </div>
        <div className="option" onClick={handleTabs}>
          THREE
        </div>
      </div>
      <div className="bar-outer">
        <div className="bar bar-purple">
          <div className="option">ONE</div>
          <div className="option">TWO</div>
          <div className="option">THREE</div>
        </div>
      </div>
    </div>
  );
};

export default BasicTabs;
