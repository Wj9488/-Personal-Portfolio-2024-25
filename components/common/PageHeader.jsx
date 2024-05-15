
const LargeHeader = ({ headerText, extraCss }) => {

  return (
    <h1
      className={`text-[5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] leading-[.8] ${extraCss}`}
    >
        <span>{headerText}</span>
    </h1>
  );
};

export default LargeHeader;