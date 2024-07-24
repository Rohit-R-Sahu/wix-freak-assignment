import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[57px] bg-white box-border flex flex-row items-start justify-start pt-4 pb-[0.5px] pr-0 pl-5 gap-[15px] shrink-0 top-[0] z-[99] sticky max-w-full text-left text-base text-black font-inter border-b-[1px] border-solid border-gainsboro ${className}`}
    >
      <div className="w-[656.4px] flex flex-col items-start justify-start max-w-full">
        <img
          className="w-[145px] h-6 relative object-cover"
          loading="lazy"
          alt=""
          src="/link--wix-logo-homepage--svg@2x.png"
        />
      </div>
      <div className="w-[102.4px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-4 pl-0 box-border">
        <div className="self-stretch h-5 relative">
          <a className="[text-decoration:none] absolute top-[0px] left-[0px] text-[inherit] flex items-center w-[60.3px] h-5 min-w-[60.3px]">
            Product
          </a>
          <img
            className="absolute top-[0px] left-[66.3px] w-5 h-5"
            alt=""
            src="/svg.svg"
          />
        </div>
      </div>
      <div className="w-[105.2px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
        <div className="self-stretch h-5 relative">
          <a className="[text-decoration:none] absolute top-[0px] left-[0px] text-[inherit] flex items-center w-[79.3px] h-5 min-w-[79.3px]">
            Resources
          </a>
          <img
            className="absolute top-[0px] left-[85.2px] w-5 h-5"
            alt=""
            src="/svg-1.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
        <div className="w-[198.7px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border mq1900:hidden">
          <a className="[text-decoration:none] flex-1 relative text-[inherit]">
            Enterprise
          </a>
          <a className="[text-decoration:none] w-[84.3px] relative text-[inherit] flex items-center shrink-0">
            Pricing
          </a>
        </div>
      </div>
      <div className="w-[29.8px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
        <img
          className="w-6 h-6 relative"
          loading="lazy"
          alt=""
          src="/button--language-selector-english-selected--svg.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pr-[5px] pl-0 text-base-5">
        <a className="[text-decoration:underline] relative text-[inherit] inline-block min-w-[45.3px] whitespace-nowrap">
          Log In
        </a>
      </div>
      <div className="mt-[-17px] bg-black flex flex-row items-start justify-start pt-0 pb-[0.5px] pr-[34px] pl-[35px] whitespace-nowrap text-base-9 text-white">
        <a className="[text-decoration:none] relative leading-[57px] text-[inherit] inline-block min-w-[106px]">
          Start Creating
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
