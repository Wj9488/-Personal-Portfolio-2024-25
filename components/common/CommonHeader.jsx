
const CommonHeader = ({ headerText }) => {

    return (
      <h3
        className="text-[3.25rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] leading-[1] my-[2.5rem]"
      >
          {headerText}
      </h3>
    );
  };
  
  export default CommonHeader;