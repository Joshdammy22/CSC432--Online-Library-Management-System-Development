import LasuLibrary from '../images/libraryImg.png';

export const Hero = () => {
  return (
    <div className=" flex  items-center justify-center mt-20 pt-10 ">
      <img src={LasuLibrary} alt="lasu-libr" />

      <div className="text-center ">
        <h1 className="font-bold text-[3rem] leading-none m-0 font-russo-one">
          Welcome to LASU Library
        </h1>
        <h3 className="font-bold text-2xl text-[#0059FF]  mb-8 leading-none">
          Dive, Explore and Enjoy a World of Knowledge
        </h3>
        <p className="font-bold text-[20px]">
          At LASU Library, we believe in the power of books to
          educate, inspire, and <br />
          transform. Our mission is to provide easy access to a world
          of knowledge <br /> and entertainment for readers of all
          ages.
        </p>
      </div>
    </div>
  );
};
