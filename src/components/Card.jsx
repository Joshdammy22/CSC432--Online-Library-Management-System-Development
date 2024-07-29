import { Link } from 'react-router-dom';
export const Card = ({
  title,
  description,
  ellipseColor,
  linkTo,
}) => {
  return (
    <div className="relative bg-[#DCDDE0] shadow-md rounded-lg p-4 w-full md:w-[17%] m-6 flex flex-col justify-between h-80">
      <div
        className={`absolute top-[-16px] rounded-full w-12 h-12`}
        style={{ backgroundColor: ellipseColor }}
      ></div>
      <h2 className="text-3xl tracking-tight mt-5 font-bold ">
        {title}
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-gray-800 font-bold text-2xl">
          {description}
        </p>
      </div>
      <Link
        to={linkTo}
        className="text-[#0900FF] font-bold text-2xl py-2 px-4 rounded hover:text-white hover:bg-blue-600 transition duration-300"
      >
        Learn More
      </Link>
    </div>
  );
};
