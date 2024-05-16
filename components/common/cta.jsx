import Link from "next/link";

const Cta = ({ linkPath, text, extraCss }) => {
  return (
    <Link href={linkPath}>
      <button
        className={`hvr p-10 rounded-[100%] ic font-medium flex gap-1 ${extraCss}`}
      >
        {text}
        <svg
          width="22"
          height="22"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7364 17.1966L17.2612 17.2029L17.2674 8.47078L6.34444 19.3938L5.28981 18.3391L16.2128 7.41615L7.48068 7.42243L7.48696 5.9472H18.7364V17.1966Z"
            className="svgFill"
          />
        </svg>
      </button>
    </Link>
  );
};

export default Cta;
