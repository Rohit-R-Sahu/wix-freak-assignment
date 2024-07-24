import PropTypes from "prop-types";

const Container1 = ({ className = "" }) => {
  return (
    <div
      className={`rounded-xl bg-gray-400 flex flex-col items-start justify-start pt-[31.4px] px-0 pb-[39.9px] box-border gap-[31.3px] min-h-[672px] max-w-full z-[5] text-left text-sm text-gray-300 font-inter mq950:gap-[16px] ${className}`}
    >
      <div className="self-stretch h-[671.6px] relative rounded-xl bg-gray-400 hidden" />
      <div className="flex flex-row items-start justify-start py-0 px-[67px] box-border max-w-full mq950:pl-[33px] mq950:pr-[33px] mq950:box-border">
        <div className="flex flex-row items-start justify-start gap-[24.6px] max-w-full mq950:flex-wrap">
          <div className="relative leading-[22.4px] inline-block min-w-[23.3px] z-[1]">
            IDE
          </div>
          <div className="relative leading-[22.4px] z-[1]">
            BACKEND FEATURES
          </div>
          <div className="relative leading-[23px] z-[1]">{`TESTING & DEPLOYMENT`}</div>
          <div className="relative leading-[22.4px] text-white inline-block min-w-[95.6px] z-[1]">
            MONITORING
          </div>
        </div>
      </div>
      <div className="w-[1332px] h-[-2276.6px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 px-[46px] box-border gap-[15px] min-h-[-2277px] max-w-full z-[1] text-20xl-4 text-white mq1425:h-auto mq1425:pl-[23px] mq1425:pr-[23px] mq1425:box-border">
        <div className="w-[1125.6px] rounded-xl bg-darkslategray shrink-0 flex flex-row items-start justify-start py-0 px-[38px] box-border gap-[77.2px] max-w-[calc(100%_-_3423px)] mq450:max-w-full mq950:gap-[19px] mq950:max-w-full mq1425:flex-wrap mq1425:gap-[39px] mq1425:max-w-full mq1900:max-w-full">
          <div className="self-stretch w-[1125.6px] relative rounded-xl bg-darkslategray hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-[58.6px] px-0 pb-0 box-border min-w-[280.8px] mq450:pt-[38px] mq450:box-border mq1425:flex-1">
            <div className="flex flex-col items-start justify-start gap-[121px] mq450:gap-[60px]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative z-[1] mq450:text-5xl mq950:text-13xl">
                  Write JS online
                </div>
                <div className="relative text-18xl-7 z-[1] mq450:text-4xl mq950:text-11xl">
                  or locally
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px] text-base-7 mq450:gap-[16px]">
                <div className="relative leading-[25.8px] z-[1]">
                  <p className="m-0">Jump into online development with</p>
                  <p className="m-0">zero setup. Choose between the VS</p>
                  <p className="m-0">Code-based Wix IDE, or the Code</p>
                  <p className="m-0">
                    Editor. If local's your thing, integrate
                  </p>
                  <p className="m-0">with Git and use the Wix CLI.</p>
                </div>
                <div className="w-[92.2px] flex flex-col items-start justify-start gap-[3px] text-center text-base">
                  <div className="overflow-hidden flex flex-row items-start justify-start z-[1]">
                    <div className="relative inline-block min-w-[93px] shrink-0 whitespace-nowrap">
                      Review IDEs
                    </div>
                  </div>
                  <div className="self-stretch h-px relative bg-white z-[1]" />
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[729.6px] relative max-h-full max-w-full shrink-0 z-[1] mq1425:flex-1"
            alt=""
            src="/container.svg"
          />
        </div>
        <div className="h-px w-[191.3px] relative bg-white shrink-0 hidden" />
        <div className="w-[1125.9px] shrink-0 flex flex-col items-start justify-start pt-[56.8px] pb-[60.9px] pr-[765px] pl-[38px] box-border relative gap-[32.1px] max-w-[calc(100%_-_3423px)] text-19xl-8 mq450:pr-5 mq450:box-border mq450:max-w-full mq950:gap-[16px] mq950:pt-[37px] mq950:pr-[191px] mq950:pb-10 mq950:box-border mq950:max-w-full mq1425:pr-[382px] mq1425:box-border mq1425:max-w-full mq1900:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[38.5px]">
            <div className="w-[162.3px] relative flex items-center z-[1] mq450:text-4xl mq950:text-12xl">
              Powerful
            </div>
            <div className="self-stretch relative text-20xl-2 z-[1] mq450:text-5xl mq950:text-12xl">
              backend features
            </div>
            <div className="w-[236.6px] relative text-20xl-4 flex items-center z-[1] mq450:text-5xl mq950:text-13xl">
              made simple
            </div>
          </div>
          <div className="w-[281.6px] h-[129px] relative text-base-6 leading-[25.8px] flex items-center shrink-0 z-[1]">
            <span className="w-full">
              <p className="m-0">Whether you want to schedule jobs,</p>
              <p className="m-0">expose site APIs, set up data hooks or</p>
              <p className="m-0">custom event handling—it's all</p>
              <p className="m-0">seamlessly integrated into your</p>
              <p className="m-0">workspace.</p>
            </span>
          </div>
          <div className="w-[191.3px] overflow-hidden flex flex-row items-start justify-start z-[1] text-center text-base-9">
            <div className="flex-1 relative shrink-0 whitespace-nowrap">
              Explore backend features
            </div>
          </div>
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[-0.1px] bottom-[0px]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslategray w-full h-full" />
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[396px] max-h-full w-[730px] z-[1]"
              alt=""
              src="/container-1.svg"
            />
          </div>
        </div>
        <div className="w-[1126px] rounded-xl bg-darkslategray shrink-0 flex flex-row items-start justify-start py-0 pr-0 pl-[38px] box-border gap-[62.8px] max-w-[calc(100%_-_3422px)] text-19xl-5 mq450:max-w-full mq950:gap-[16px] mq950:max-w-full mq1425:flex-wrap mq1425:gap-[31px] mq1425:pl-5 mq1425:pr-5 mq1425:pb-5 mq1425:box-border mq1425:max-w-full mq1900:max-w-full">
          <div className="self-stretch w-[1126px] relative rounded-xl bg-darkslategray hidden max-w-full" />
          <div className="w-[295.2px] flex flex-col items-start justify-start pt-[51.8px] px-0 pb-0 box-border min-w-[295.2px] mq450:pt-[34px] mq450:box-border mq1425:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[73.6px] mq450:gap-[37px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch h-[50px] relative flex items-center shrink-0 z-[1] mq450:text-4xl mq950:text-12xl">
                  Test and debug,
                </div>
                <div className="w-[289px] flex flex-col items-start justify-start gap-[3px] text-19xl-2">
                  <div className="self-stretch h-[47px] relative flex items-center shrink-0 z-[2] mq450:text-4xl mq950:text-12xl">
                    then deploy in a
                  </div>
                  <div className="w-[82px] relative flex items-center z-[1] mq450:text-4xl mq950:text-12xl">
                    click
                  </div>
                </div>
              </div>
              <div className="w-[261.8px] flex flex-col items-start justify-start gap-[32.1px] text-4xs-1 mq450:gap-[16px]">
                <div className="self-stretch relative leading-[25.8px] z-[1]">
                  <p className="m-0">Easily test your code with page</p>
                  <p className="m-0">preview, in-editor function testing,</p>
                  <p className="m-0">or the release manager. Root out</p>
                  <p className="m-0">bugs and keep new versions rolling</p>
                  <p className="m-0">with one-click deployment.</p>
                </div>
                <div className="w-[232.3px] h-6 flex flex-col items-start justify-start gap-[3px] text-center text-base">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start z-[1]">
                    <div className="self-stretch flex-1 relative flex items-center justify-center shrink-0">
                      Explore testing and debugging
                    </div>
                  </div>
                  <div className="self-stretch h-px relative bg-white z-[1]" />
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[519.4px] flex-1 relative max-w-full overflow-hidden min-w-[474px] z-[1] mq950:min-w-full"
            alt=""
            src="/container-2.svg"
          />
        </div>
        <div className="w-[1126px] rounded-xl bg-darkslategray shrink-0 flex flex-row items-start justify-start py-0 pr-0 pl-[38px] box-border gap-[46.9px] max-w-[calc(100%_-_3422px)] text-19xl-6 mq450:max-w-full mq950:gap-[23px] mq950:max-w-full mq1425:flex-wrap mq1425:pl-5 mq1425:pr-5 mq1425:pb-5 mq1425:box-border mq1425:max-w-full mq1900:max-w-full">
          <div className="self-stretch w-[1126px] relative rounded-xl bg-darkslategray hidden max-w-full" />
          <div className="w-[311.1px] flex flex-col items-start justify-start pt-[56.4px] px-0 pb-0 box-border min-w-[311.1px] mq450:pt-[37px] mq450:box-border mq1425:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[124.4px] mq450:gap-[62px]">
              <div className="w-[300px] flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative z-[1] mq450:text-4xl mq950:text-12xl">
                  Monitor with the
                </div>
                <div className="w-[236px] relative text-19xl-2 flex items-center z-[1] mq450:text-4xl mq950:text-12xl">
                  tools you like
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[32.1px] text-base mq450:gap-[16px]">
                <div className="self-stretch h-[129px] relative leading-[25.8px] flex items-center shrink-0 z-[1]">
                  <span>
                    <p className="m-0">
                      Connect with external monitoring tools
                    </p>
                    <p className="m-0">
                      like GCP or Loggly using HTTP endpoints
                    </p>
                    <p className="m-0">
                      —or use the native monitoring dashboard
                    </p>
                    <p className="m-0">to track performance and oversee logs</p>
                    <p className="m-0">and errors.</p>
                  </span>
                </div>
                <div className="w-[185.1px] h-6 flex flex-col items-start justify-start gap-[3px] text-center">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start z-[1]">
                    <div className="self-stretch flex-1 relative flex items-center justify-center shrink-0">
                      Explore monitoring tools
                    </div>
                  </div>
                  <div className="self-stretch h-px relative bg-white z-[1]" />
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[519.4px] flex-1 relative max-w-full overflow-hidden min-w-[474px] z-[1] mq950:min-w-full"
            alt=""
            src="/container-3.svg"
          />
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
