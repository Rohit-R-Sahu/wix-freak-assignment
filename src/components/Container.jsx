import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`!m-[0] absolute w-full right-[0px] bottom-[-8633px] left-[0px] flex flex-row items-start justify-start py-0 pr-[173px] pl-[478px] box-border gap-[78.4px] max-w-full z-[6] mq1900:flex-wrap ${className}`}
    >
      <div className="h-[396.2px] w-[119px] absolute !m-[0] bottom-[-156.2px] left-[120.1px] [background:linear-gradient(180deg,_#7bffb4,_#000)]" />
      <div className="h-[487.6px] w-[119px] absolute !m-[0] bottom-[-175.6px] left-[240px] [background:linear-gradient(180deg,_#7bffb4,_#000)]" />
      <div className="h-[480px] w-0.5 relative box-border border-l-[2px] border-solid border-darkgray mq1900:w-full mq1900:h-0.5" />
      <div className="w-[976.7px] flex flex-row items-end justify-start py-0 pr-[95px] pl-0 box-border gap-[76.4px] max-w-full mq1900:flex-wrap">
        <div className="h-[399.3px] w-[323.2px] flex flex-col items-start justify-start min-w-[323.2px] max-w-full mq1900:flex-1">
          <div className="self-stretch h-[318.6px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border shrink-0">
            <div className="self-stretch flex-1 relative rounded-t-980xl rounded-b-none [background:linear-gradient(90deg,_#7bffb4,_#000)]" />
            <div className="self-stretch flex-1 relative rounded-t-none rounded-b-980xl [background:linear-gradient(-84.97deg,_#7bffb4,_#000)] z-[1] mt-[-1.4px]" />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start min-w-[313px] shrink-0 max-w-full">
          <div className="h-[480px] w-0.5 relative box-border border-l-[2px] border-solid border-darkgray" />
          <div className="h-[480px] flex-1 relative max-w-full">
            <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden flex flex-col items-start justify-start py-[124.8px] px-12 box-border gap-[19.2px] max-w-full">
              <div className="ml-[-96px] w-[480px] flex-1 relative [background:linear-gradient(90deg,_#7bffb4,_#000_77%)] max-w-[125%] shrink-0" />
              <div className="w-[480px] flex-1 relative [background:linear-gradient(270deg,_#7bffb4,_#000_77%)] max-w-[125%] shrink-0" />
            </div>
            <div className="absolute top-[0px] left-[478px] box-border w-0.5 h-[480px] z-[1] border-l-[2px] border-solid border-darkgray" />
          </div>
        </div>
      </div>
      <div className="h-[306.5px] w-[133px] flex flex-col items-start justify-start pt-[173.5px] px-0 pb-0 box-border">
        <div className="self-stretch flex-1 relative [background:linear-gradient(180deg,_#7bffb4,_#000)]" />
      </div>
      <div className="h-0.5 w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] box-border z-[2] border-t-[2px] border-solid border-darkgray" />
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
