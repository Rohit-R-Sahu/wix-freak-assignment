import PropTypes from "prop-types";

const PerformanceList = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[17px] shrink-0 max-w-full text-left text-20xl-4 text-black font-inter ${className}`}
    >
      <div className="self-stretch rounded-xl [background:linear-gradient(0deg,_#fff_50%,_#cdc4ff)] flex flex-col items-start justify-start pt-[15px] pb-[30.1px] pr-10 pl-0 box-border max-w-full z-[5] mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="w-[1331px] h-[387.4px] relative rounded-xl [background:linear-gradient(0deg,_#fff_50%,_#cdc4ff)] hidden max-w-full z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-start pt-[29.9px] px-10 pb-[30px] box-border relative min-h-[122px]">
          <div className="relative leading-[52px] z-[1] mq450:text-5xl mq450:leading-[31px] mq950:text-13xl mq950:leading-[42px]">
            Enterprise-grade security
          </div>
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/button--expand-button.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-[38px] pb-[22.4px] box-border max-w-full mt-[-0.6px] text-base-6">
          <div className="relative leading-[25.6px] z-[1]">
            <p className="m-0">
              Wix security experts provide threat monitoring, prevention and
              response in real-time, 24/7. Data at
            </p>
            <p className="m-0">
              rest is protected by the strongest commercially available
              encryption. Plus, with proprietary machine
            </p>
            <p className="m-0">
              learning, anti-DDoS, PCI DSS Level 1, Soc 2 Type 2 and much
              more—you’re safe on Wix.
            </p>
          </div>
        </div>
        <div className="w-[776.3px] h-[122.4px] flex flex-row items-start justify-start py-0 px-[38px] box-border max-w-full mt-[-0.6px] text-center text-base-9">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[30.2px] max-w-full mq950:gap-[15px]">
            <div className="w-[190.3px] flex flex-row items-start justify-start py-0 px-px box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px] shrink-0">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[1]">
                  <div className="flex-1 relative shrink-0">
                    Discover Security on Wix
                  </div>
                </div>
                <div className="self-stretch h-px relative bg-black z-[1]" />
              </div>
            </div>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 z-[1]"
              alt=""
              src="/wowimage--picture--gradesecuritypng@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-thistle flex flex-row items-start justify-start pt-[15px] pb-0 pr-10 pl-0 box-border max-w-full z-[5] text-20xl-5">
        <div className="h-[136.9px] w-[1331px] relative rounded-xl bg-thistle hidden max-w-full" />
        <div className="flex-1 flex flex-row items-start justify-start pt-[30px] px-10 pb-[39.9px] box-border relative max-w-full">
          <div className="relative leading-[52px] z-[1] mq450:text-5xl mq450:leading-[31px] mq950:text-13xl mq950:leading-[42px]">
            Non-stop performance
          </div>
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/button--expand-button.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-thistle flex flex-row items-start justify-start pt-[15px] pb-0 pr-10 pl-0 box-border max-w-full z-[5] text-19xl-9">
        <div className="h-[136.9px] w-[1331px] relative rounded-xl bg-thistle hidden max-w-full" />
        <div className="flex-1 flex flex-row items-start justify-start pt-[30px] px-10 pb-[39.9px] box-border relative max-w-full">
          <div className="relative leading-[52px] z-[1] mq450:text-4xl mq450:leading-[31px] mq950:text-12xl mq950:leading-[42px]">
            Zero-setup Node.js
          </div>
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/button--expand-button.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-thistle flex flex-row items-start justify-start pt-[15px] pb-0 pr-10 pl-0 box-border max-w-full z-[5] text-20xl-8">
        <div className="h-[136.9px] w-[1331px] relative rounded-xl bg-thistle hidden max-w-full" />
        <div className="flex-1 flex flex-row items-start justify-start pt-[30px] px-10 pb-[39.9px] box-border relative max-w-full">
          <div className="relative leading-[52px] z-[1] mq450:text-5xl mq450:leading-[31px] mq950:text-13xl mq950:leading-[42px]">
            SEO by design
          </div>
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/button--expand-button.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-thistle flex flex-row items-start justify-start pt-[15px] pb-0 pr-10 pl-0 box-border max-w-full z-[5] text-20xl-2">
        <div className="h-[136.9px] w-[1331px] relative rounded-xl bg-thistle hidden max-w-full" />
        <div className="flex-1 flex flex-row items-start justify-start pt-[30px] px-10 pb-[39.9px] box-border relative max-w-full">
          <div className="relative leading-[52px] z-[1] mq450:text-5xl mq450:leading-[31px] mq950:text-12xl mq950:leading-[42px]">
            Accessible and GDPR-ready
          </div>
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/button--expand-button.svg"
          />
        </div>
      </div>
    </div>
  );
};

PerformanceList.propTypes = {
  className: PropTypes.string,
};

export default PerformanceList;
