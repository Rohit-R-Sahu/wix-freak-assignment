import PropTypes from "prop-types";

const Container3 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-xl bg-gray-400 flex flex-row items-start justify-start py-[29.7px] px-[29px] box-border gap-[30px] min-w-[683px] max-w-full z-[5] text-left text-base-6 text-white font-inter mq950:flex-wrap mq950:pt-5 mq950:pb-5 mq950:box-border mq950:min-w-full ${className}`}
    >
      <div className="h-[560.4px] w-[1051.1px] relative rounded-xl bg-gray-400 hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start gap-[20.5px] min-w-[363px] max-w-full mq950:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
          <img
            className="h-[327.1px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover shrink-0 z-[1]"
            alt=""
            src="/link@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[51.8px] shrink-0 max-w-full mq950:gap-[26px]">
          <div className="relative leading-[25.59px] z-[1]">
            <p className="m-0">
              Combine the functionality of the Wix CMS, Wix Data API, and
            </p>
            <p className="m-0">
              CRUD permissions to select and write dynamic site visitor inputs
            </p>
            <p className="m-0">
              to your site’s database with minimal hard-coding.
            </p>
          </div>
          <div className="w-[122.3px] flex flex-col items-start justify-start gap-[3px] text-center">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[1]">
              <div className="flex-1 relative inline-block min-w-[122.5px] shrink-0">
                Try this example
              </div>
            </div>
            <div className="self-stretch h-px relative bg-white z-[1]" />
          </div>
        </div>
      </div>
      <div className="h-[501.2px] w-[403.2px] relative hidden max-w-full text-smi-1 text-floralwhite">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-black hidden" />
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-black w-full h-full overflow-hidden">
          <div className="absolute top-[17.1px] left-[12.1px] rounded-xl w-[414.5px] h-[645px]">
            <div className="absolute top-[-2.1px] left-[0px] leading-[18.14px] flex items-center w-[225.7px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span className="text-white">$w</span>
                <span>(</span>
                <span className="text-springgreen">"#orderBtn"</span>
                <span>).</span>
                <span className="text-white">onClick</span>
                <span>{`(() `}</span>
                <span className="text-white">{`=>`}</span>
                <span>{` {`}</span>
              </span>
            </div>
            <div className="absolute top-[28px] left-[14.6px] leading-[18.14px] flex items-center w-[320.3px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span className="text-deepskyblue">if</span>
                <span>{` (selectedSeatsArray.length `}</span>
                <span className="text-white">{`>`}</span>
                <span>{` `}</span>
                <span className="text-coral">0</span>
                <span>{`) { wixData`}</span>
              </span>
            </div>
            <div className="absolute top-[58px] left-[36.4px] leading-[18.14px] flex items-center w-[371.1px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span>.</span>
                <span className="text-white">bulkUpdate</span>
                <span>(</span>
                <span className="text-springgreen">"TheaterSeats"</span>
                <span>, arrayToUpdateCollection</span>
              </span>
            </div>
            <div className="absolute top-[88.1px] left-[36.4px] leading-[18.14px] flex items-center w-[94.8px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span>.</span>
                <span className="text-white">then</span>
                <span>{`(() `}</span>
                <span className="text-white">{`=>`}</span>
                <span>{` {`}</span>
              </span>
            </div>
            <div className="absolute top-[118.1px] left-[50.9px] leading-[18.14px] flex items-center w-[320.2px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span className="text-deepskyblue">if</span>
                <span> (</span>
                <span className="text-white">$w</span>
                <span>(</span>
                <span className="text-springgreen">
                  "#sendDataErrorMessage"
                </span>
                <span>{`).isVisible) {`}</span>
              </span>
            </div>
            <div className="absolute top-[148.2px] left-[65.4px] leading-[18.14px] flex items-center w-[269.3px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="[line-break:anywhere] w-full">
                <span className="text-white">$w</span>
                <span>(</span>
                <span className="text-springgreen">
                  "#sendDataErrorMessage"
                </span>
                <span>).</span>
                <span className="text-white">delete</span>
                <span>();</span>
              </span>
            </div>
            <div className="absolute top-[178.2px] left-[50.9px] leading-[18.14px] flex items-center w-[7.5px] h-[18.1px] [text-shadow:0px_1px_0px_rgba(0,_0,_0,_0.3)] min-w-[7.5px]">{`}`}</div>
            <div className="absolute top-[238.3px] left-[0px] leading-[18.14px] flex items-center w-[225.7px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span className="whitespace-pre-wrap">{`       selectedSeatsArray `}</span>
                <span className="text-white">=</span>
                <span> [];</span>
              </span>
            </div>
            <div className="absolute top-[268.4px] left-[0px] leading-[18.14px] flex items-center w-[189.3px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span className="whitespace-pre-wrap">{`       filteredArray `}</span>
                <span className="text-white">=</span>
                <span> [];</span>
              </span>
            </div>
            <div className="absolute top-[298.4px] left-[0px] leading-[18.14px] flex items-center w-[262px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span className="whitespace-pre-wrap">{`       arrayToUpdateCollection `}</span>
                <span className="text-white">=</span>
                <span> [];</span>
              </span>
            </div>
            <div className="absolute top-[358.5px] left-[50.9px] leading-[18.14px] flex items-center w-[225.7px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="[line-break:anywhere] w-full">
                <span className="text-white">$w</span>
                <span>(</span>
                <span className="text-springgreen">"#thanksMessageTxt"</span>
                <span>).</span>
                <span className="text-white">show</span>
                <span>();</span>
              </span>
            </div>
            <div className="absolute top-[388.5px] left-[50.9px] leading-[18.14px] flex items-center w-[189.3px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="[line-break:anywhere] w-full">
                <span className="text-white">$w</span>
                <span>(</span>
                <span className="text-springgreen">"#orderBtn"</span>
                <span>).</span>
                <span className="text-white">disable</span>
                <span>();</span>
              </span>
            </div>
            <div className="absolute top-[448.6px] left-[50.9px] leading-[18.14px] flex items-center w-[152.9px] h-[18.1px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))] text-white">
              <span className="[line-break:anywhere] w-full">
                <span>refreshTheRepeater</span>
                <span className="text-floralwhite">();</span>
              </span>
            </div>
            <div className="absolute top-[478.7px] left-[36.4px] leading-[18.14px] flex items-center w-[14.8px] h-[18.1px] [text-shadow:0px_1px_0px_rgba(0,_0,_0,_0.3)]">{`})`}</div>
          </div>
          <div className="absolute top-[10.1px] left-[321.2px] bg-black w-[61.7px] h-[25px] text-center text-sm-2 text-white">
            <img
              className="absolute top-[calc(50%_-_12.5px)] left-[calc(50%_-_30.85px)] w-[25px] h-[25px] overflow-hidden"
              alt=""
              src="/fee50a-8ed211d86266431e82b6683eef95c543svg.svg"
            />
            <div className="absolute top-[3.2px] left-[calc(50%_-_1.85px)] flex items-center justify-center w-[33px] h-4 min-w-[33px]">
              Copy
            </div>
          </div>
        </div>
      </div>
      <div className="h-[501px] w-[403px] rounded-xl bg-black overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[10.1px] pb-[465.9px] pr-5 pl-3 box-border min-w-[403px] max-w-full z-[12] text-center text-sm-2 mq950:flex-1 mq950:pb-[197px] mq950:box-border mq950:min-w-full mq1425:pt-5 mq1425:pb-[303px] mq1425:box-border">
        <div className="bg-black flex flex-row items-start justify-start gap-[4px] shrink-0 z-[13]">
          <img
            className="h-[25px] w-[25px] relative overflow-hidden shrink-0"
            alt=""
            src="/fee50a-8ed211d86266431e82b6683eef95c543svg.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[3.2px] px-0 pb-0">
            <div className="relative inline-block min-w-[33px] shrink-0">
              Copy
            </div>
          </div>
        </div>
        <div className="mr-[-196.5px] w-[567.3px] h-[855.3px] rounded-xl flex flex-col items-start justify-start pt-[238.3px] px-0 pb-[358.5px] box-border gap-[42px] shrink-0 max-w-[153%] mt-[-18px] text-left text-smi-1 mq950:gap-[21px] mq950:pb-[151px] mq950:box-border mq1425:pb-[233px] mq1425:box-border">
          <div className="mt-[-240.4px] w-[480.2px] flex flex-col items-start justify-start gap-[12px] max-w-full shrink-0">
            <div className="w-[174.8px] relative leading-[18.14px] flex items-center [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))] shrink-0">
              <span className="w-full">
                <span>$w</span>
                <span className="text-floralwhite">.</span>
                <span>onReady</span>
                <span className="text-floralwhite">(</span>
                <span className="text-deepskyblue">function</span>
                <span>{` `}</span>
                <span className="text-floralwhite">()</span>
                <span>{` `}</span>
                <span className="text-floralwhite">{`{`}</span>
              </span>
            </div>
            <div className="w-[414.8px] relative leading-[18.14px] flex items-center [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))] max-w-full shrink-0">
              <span className="w-full">
                <span className="whitespace-pre-wrap">
                  {" "}
                  currentService = $w
                </span>
                <span className="text-floralwhite">(</span>
                <span className="text-springgreen">"#dynamicDataset"</span>
                <span className="text-floralwhite">).</span>
                <span>getCurrentItem</span>
              </span>
            </div>
            <div className="w-[327.4px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
              <div className="flex-1 relative leading-[18.14px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
                <span className="text-deepskyblue">const</span>
                <span> serviceId = currentService</span>
                <span className="text-floralwhite">.</span>
                <span>_id</span>
                <span className="text-floralwhite">;</span>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[29px] box-border max-w-full shrink-0">
              <div className="flex-1 relative leading-[18.14px] inline-block [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))] max-w-full">
                <span className="text-deepskyblue">const</span>
                <span> selectedTimezone = Intl</span>
                <span className="text-floralwhite">.</span>
                <span>DateTimeFormat</span>
                <span className="text-floralwhite">().</span>
                <span>resolvedOptions</span>
              </div>
            </div>
            <div className="w-[182px] flex flex-row items-start justify-start py-0 px-[29px] box-border text-deepskyblue">
              <div className="flex-1 relative leading-[18.14px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
                <span>const</span>
                <span className="text-white">{` options = `}</span>
                <span className="text-floralwhite">{`{`}</span>
              </div>
            </div>
            <div className="w-[254.8px] relative leading-[18.14px] flex items-center [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="w-full">
                <span className="whitespace-pre-wrap">
                  {" "}
                  timezone: selectedTimezone
                </span>
                <span className="text-floralwhite">,</span>
              </span>
            </div>
            <div className="w-[72.9px] flex flex-row items-start justify-start py-0 px-[29px] box-border text-floralwhite">
              <div className="flex-1 relative leading-[18.14px] [text-shadow:0px_1px_0px_rgba(0,_0,_0,_0.3)]">{`};`}</div>
            </div>
          </div>
          <div className="w-[349.2px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
            <div className="flex-1 relative leading-[18.14px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span>bookingsServiceInit</span>
              <span className="text-floralwhite">(</span>
              <span>serviceId</span>
              <span className="text-floralwhite">,</span>
              <span> options</span>
              <span className="text-floralwhite">);</span>
            </div>
          </div>
          <div className="w-[400.2px] flex flex-col items-start justify-start gap-[12px] max-w-full shrink-0 text-floralwhite">
            <div className="w-[334.7px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
              <div className="flex-1 relative leading-[18.14px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
                <span className="text-white">$w</span>
                <span>(</span>
                <span className="text-springgreen">"#firstNameInput"</span>
                <span>).</span>
                <span className="text-white">onChange</span>
                <span>(()</span>
                <span className="text-white">{` => `}</span>
                <span>{`{`}</span>
              </div>
            </div>
            <div className="self-stretch relative leading-[18.14px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))] text-white">
              <span className="whitespace-pre-wrap"> contactDetails</span>
              <span className="text-floralwhite">.</span>
              <span>firstName = $w</span>
              <span className="text-floralwhite">(</span>
              <span className="text-springgreen">"#firstNameInput"</span>
            </div>
            <div className="w-[80.1px] flex flex-row items-start justify-start py-0 px-[29px] box-border">
              <div className="flex-1 relative leading-[18.14px] [text-shadow:0px_1px_0px_rgba(0,_0,_0,_0.3)]">{`});`}</div>
            </div>
            <div className="w-[327.5px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
              <div className="flex-1 relative leading-[18.14px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
                <span className="text-white">$w</span>
                <span>(</span>
                <span className="text-springgreen">"#lastNameInput"</span>
                <span>).</span>
                <span className="text-white">onChange</span>
                <span>(()</span>
                <span className="text-white">{` => `}</span>
                <span>{`{`}</span>
              </div>
            </div>
            <div className="self-stretch relative leading-[18.14px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
              <span className="text-white whitespace-pre-wrap">
                {" "}
                contactDetails
              </span>
              <span>.</span>
              <span className="text-white">lastName = $w</span>
              <span>(</span>
              <span className="text-springgreen">"#lastNameInput"</span>
              <span>)</span>
            </div>
            <div className="w-[80.1px] flex flex-row items-start justify-start py-0 px-[29px] box-border">
              <div className="flex-1 relative leading-[18.14px] [text-shadow:0px_1px_0px_rgba(0,_0,_0,_0.3)]">{`});`}</div>
            </div>
            <div className="w-[305.7px] flex flex-row items-start justify-start py-0 px-[29px] box-border">
              <div className="flex-1 relative leading-[18.14px] [filter:drop-shadow(0px_1px_0px_rgba(0,_0,_0,_0.3))]">
                <span className="text-white">$w</span>
                <span>(</span>
                <span className="text-springgreen">"#emailInput"</span>
                <span>).</span>
                <span className="text-white">onChange</span>
                <span>(()</span>
                <span className="text-white">{` => `}</span>
                <span>{`{`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
};

export default Container3;
