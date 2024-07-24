import PropTypes from "prop-types";

const List = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center gap-[2px] shrink-0 max-w-full z-[3] text-left text-28xl text-white font-inter ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(180deg,_#090909,_#323236)] flex flex-col items-center justify-start pt-[56.1px] pb-[108.5px] pr-5 pl-[21px] box-border gap-[7.3px] min-w-[359px] max-w-full mq450:min-w-full">
        <div className="w-[478.5px] h-[262px] relative [background:linear-gradient(180deg,_#090909,_#323236)] hidden max-w-full" />
        <div className="relative leading-[61.1px] inline-block min-w-[112.4px] z-[1] mq450:text-9xl mq450:leading-[37px] mq950:text-19xl mq950:leading-[49px]">
          180+
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[19px] text-center text-mid-9">
          <div className="relative leading-[29px] inline-block min-w-[74px] z-[1]">
            Wix APIs
          </div>
        </div>
      </div>
      <div className="flex-1 [background:linear-gradient(180deg,_#090909,_#323236)] flex flex-col items-center justify-start pt-[56.1px] px-5 pb-20 box-border gap-[7.3px] min-w-[359px] max-w-full min-h-[262px] mq450:min-w-full">
        <div className="w-[478.5px] h-[262px] relative [background:linear-gradient(180deg,_#090909,_#323236)] hidden max-w-full" />
        <div className="w-[272.5px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border">
          <div className="w-[52px] relative leading-[61.1px] flex items-center shrink-0 z-[1] mq450:text-9xl mq450:leading-[37px] mq950:text-19xl mq950:leading-[49px]">
            10
          </div>
        </div>
        <div className="w-[271.7px] relative text-mid-7 leading-[28.78px] text-center flex items-center z-[1]">
          <span className="w-full">
            <p className="m-0">Wix Business solutions including</p>
            <p className="m-0">{`eComm, Bookings & Events`}</p>
          </span>
        </div>
      </div>
      <div className="flex-1 [background:linear-gradient(180deg,_#090909,_#323236)] flex flex-col items-center justify-start pt-[56.1px] px-5 pb-[107.8px] box-border gap-[8.2px] min-w-[359px] max-w-full mq450:min-w-full">
        <div className="w-[478.5px] h-[262px] relative [background:linear-gradient(180deg,_#090909,_#323236)] hidden max-w-full" />
        <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
          <div className="relative leading-[61.1px] inline-block min-w-[119.8px] z-[1] mq450:text-9xl mq450:leading-[37px] mq950:text-19xl mq950:leading-[49px]">
            500+
          </div>
        </div>
        <div className="w-[139.1px] relative text-mid-3 leading-[28.8px] text-center flex items-center justify-center z-[1]">
          Third-party apps
        </div>
      </div>
      <div className="flex-1 [background:linear-gradient(180deg,_#090909,_#323236)] flex flex-col items-center justify-start pt-[56.1px] pb-[107.6px] pr-5 pl-[21px] box-border gap-[8.2px] min-w-[359px] max-w-full mq450:min-w-full">
        <div className="w-[478.5px] h-[262px] relative [background:linear-gradient(180deg,_#090909,_#323236)] hidden max-w-full" />
        <div className="flex flex-row items-start justify-start py-0 pr-[67px] pl-[66px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative leading-[61.1px] inline-block min-w-[120.1px] z-[1] mq450:text-9xl mq450:leading-[37px] mq950:text-19xl mq950:leading-[49px]">
            200+
          </div>
        </div>
        <div className="relative text-mid-9 leading-[29px] text-center z-[1]">
          Globally deployed CDN nodes
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
};

export default List;
