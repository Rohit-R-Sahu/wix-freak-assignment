import PropTypes from "prop-types";

const DatabaseOptions = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[39.3px] max-w-full text-left text-4xl-6 text-white font-inter mq950:gap-[20px] ${className}`}
    >
      <div className="flex-1 rounded-xl bg-darkslategray flex flex-col items-start justify-start pt-[41.6px] px-0 pb-0 box-border gap-[41.7px] min-w-[313px] max-w-full z-[5] mq450:gap-[21px] mq950:pt-[27px] mq950:box-border">
        <div className="self-stretch h-[591.9px] relative rounded-xl bg-darkslategray hidden" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[54.3px] max-w-full mq450:gap-[27px]">
            <div className="relative shrink-0 z-[1] mq450:text-lgi">
              Choose your database
            </div>
            <div className="flex flex-col items-start justify-start gap-[32.1px] shrink-0 text-base-6 mq450:gap-[16px]">
              <div className="relative leading-[25.8px] shrink-0 z-[1]">
                <p className="m-0">
                  Store your data in the native Wix Database,
                </p>
                <p className="m-0">or integrate with popular cloud solutions</p>
                <p className="m-0">
                  such as Microsoft Azure, Google Cloud, and
                </p>
                <p className="m-0">AWS in just a few steps.</p>
              </div>
              <div className="w-[276.5px] flex flex-col items-start justify-start gap-[3px] shrink-0 text-center text-base">
                <div className="self-stretch flex flex-row items-start justify-start gap-[42px] mq450:flex-wrap mq450:gap-[21px]">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start min-w-[84px] z-[1]">
                    <div className="flex-1 relative inline-block min-w-[129.5px] shrink-0">
                      Explore Wix CMS
                    </div>
                  </div>
                  <div className="w-[104.2px] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1]">
                    <div className="flex-1 relative inline-block min-w-[104.4px] shrink-0">
                      Compare DBs
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[41px] mq450:flex-wrap mq450:gap-[20px]">
                  <div className="h-px flex-1 relative bg-white min-w-[84px] z-[1]" />
                  <div className="h-px w-[105.2px] relative bg-white z-[1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[265px] rounded-xl [background:linear-gradient(57.55deg,_#071a1a_50%,_#264647)] flex flex-col items-center justify-start pt-[29px] px-5 pb-[29.1px] box-border gap-[12.1px] max-w-full z-[1]">
          <div className="w-[417.8px] h-[265px] relative rounded-xl [background:linear-gradient(57.55deg,_#071a1a_50%,_#264647)] hidden max-w-full" />
          <div className="w-[216.4px] flex-1 relative max-h-full z-[1] flex items-center justify-center">
            <img
              className="w-full flex-1 overflow-hidden z-[1] object-contain absolute left-[4px] top-[4px] h-full [transform:scale(1.328)]"
              alt=""
              src="/wowimage@2x.png"
            />
          </div>
          <div className="w-[216.4px] flex-1 relative max-h-full z-[1] flex items-center justify-center">
            <img
              className="w-full flex-1 overflow-hidden z-[1] object-contain absolute left-[4px] top-[4px] h-full [transform:scale(1.33)]"
              alt=""
              src="/wowimage-1@2x.png"
            />
          </div>
          <div className="w-[216.4px] flex-1 relative max-h-full z-[1] flex items-center justify-center">
            <img
              className="w-full flex-1 overflow-hidden z-[1] object-contain absolute left-[4px] top-[4px] h-full [transform:scale(1.33)]"
              alt=""
              src="/wowimage-2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-xl bg-darkslategray flex flex-col items-start justify-start pt-[41.6px] px-0 pb-0 box-border gap-[41.7px] min-w-[313px] max-w-full z-[5] mq450:gap-[21px] mq950:pt-[27px] mq950:box-border">
        <div className="self-stretch h-[591.9px] relative rounded-xl bg-darkslategray hidden" />
        <div className="flex flex-row items-start justify-start pt-0 px-[41px] pb-[12.6px]">
          <div className="relative z-[1] mq450:text-lgi">Code at AI-speed</div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full text-base-7">
          <div className="flex flex-col items-start justify-start gap-[32.1px] mq450:gap-[16px]">
            <div className="relative leading-[25.8px] shrink-0 z-[1]">
              <p className="m-0">Work with the Wix AI assistant in the VS</p>
              <p className="m-0">Code-based Wix IDE. Task it with writing</p>
              <p className="m-0">code, troubleshooting bugs and locating</p>
              <p className="m-0">relevant documentation.</p>
            </div>
            <div className="w-[168.7px] flex flex-col items-start justify-start gap-[3px] shrink-0 text-center text-base-9">
              <div className="overflow-hidden flex flex-row items-start justify-start z-[1]">
                <div className="relative shrink-0 whitespace-nowrap">
                  Meet your AI assistant
                </div>
              </div>
              <div className="self-stretch h-px relative bg-white z-[1]" />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[265px] rounded-xl [background:linear-gradient(29.79deg,_#161845_50%,_#4983a2)] flex flex-row items-start justify-start py-[27.7px] px-7 box-border max-w-full z-[1]">
          <div className="h-[265px] w-[417.8px] relative rounded-xl [background:linear-gradient(29.79deg,_#161845_50%,_#4983a2)] hidden max-w-full" />
          <div className="h-[209.6px] flex-1 relative max-w-full z-[1] flex items-center justify-center">
            <img
              className="h-full flex-1 overflow-hidden z-[1] object-contain absolute left-[4px] top-[4px] w-full [transform:scale(1.095)]"
              alt=""
              src="/wowimage-3@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-xl bg-darkslategray flex flex-col items-start justify-start pt-[41.6px] px-0 pb-0 box-border gap-[24.3px] min-w-[313px] max-w-full z-[5] text-4xl-3 mq950:pt-[27px] mq950:box-border">
        <div className="self-stretch h-[591.9px] relative rounded-xl bg-darkslategray hidden" />
        <div className="flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full">
          <div className="flex flex-col items-start justify-start">
            <div className="relative z-[1] mq450:text-lgi">
              Package your code into
            </div>
            <div className="relative text-4xl-6 z-[1] mq450:text-lgi">
              reusable apps
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-[41px] pb-[7.8px] box-border max-w-full text-base-6">
          <div className="relative leading-[25.8px] z-[1]">
            <p className="m-0">Develop your own full-stack apps,</p>
            <p className="m-0">components and code packages with Wix</p>
            <p className="m-0">Blocks. Store them on Wix for reuse across</p>
            <p className="m-0">any site.</p>
          </div>
        </div>
        <div className="w-[259.9px] flex flex-row items-start justify-start pt-0 px-[41px] pb-[17.4px] box-border text-center text-base-9">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[1]">
              <div className="flex-1 relative shrink-0">
                Learn about Wix Blocks
              </div>
            </div>
            <div className="self-stretch h-px relative bg-white z-[1]" />
          </div>
        </div>
        <div className="self-stretch h-[265px] rounded-xl [background:linear-gradient(0deg,_#31373e_10%,_#7f8e97)] flex flex-row items-start justify-start pt-[56.5px] px-[23px] pb-[56.6px] box-border max-w-full z-[1]">
          <div className="h-[265px] w-[417.8px] relative rounded-xl [background:linear-gradient(0deg,_#31373e_10%,_#7f8e97)] hidden max-w-full" />
          <div className="h-[151.9px] flex-1 relative max-w-full z-[1] flex items-center justify-center">
            <img
              className="h-full flex-1 overflow-hidden z-[1] object-contain absolute left-[4px] top-[4px] w-full [transform:scale(1.132)]"
              alt=""
              src="/wowimage-4@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DatabaseOptions.propTypes = {
  className: PropTypes.string,
};

export default DatabaseOptions;
