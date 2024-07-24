import { useMemo } from "react";
import PropTypes from "prop-types";

const Infrastructure = ({ className = "", frame, propWidth }) => {
  const infrastructureStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[320.7px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border relative max-w-full shrink-0 text-center text-5xl text-white font-inter ${className}`}
      style={infrastructureStyle}
    >
      <img
        className="h-[11.4px] w-4 absolute !m-[0] top-[11.2px] right-[90px] z-[5]"
        alt=""
        src={frame}
      />
      <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[96.2px]">
        <div className="w-[208.7px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border z-[5]">
          <h3 className="m-0 flex-1 relative text-inherit font-normal font-inherit shrink-0 mq450:text-lgi">
            Start developing
          </h3>
        </div>
      </div>
      <div className="h-px w-[189.7px] absolute !m-[0] top-[33.9px] left-[20px] bg-white z-[5]" />
    </div>
  );
};

Infrastructure.propTypes = {
  className: PropTypes.string,
  frame: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default Infrastructure;
