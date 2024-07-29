import { Header } from './components/Header';
import { BooksData } from './Data/BooksData';
import { useRef } from 'react';
export const Books = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    // Handle file upload here
    console.log('Selected files:', files);
  };
  return (
    <div>
      <Header />

      <div className="mt-20 py-20">
        <div className="flex flex-col items-center justify-center w-full md:w-3/4 mx-auto">
          <h3 className="font-extrabold text-4xl mb-8 leading-none text-center">
            Search for Books
          </h3>

          <div>
            <div className="flex py-8 gap-4 w-full items-center justify-center">
              <input
                type="text"
                placeholder="Search"
                className="border-2 border-black text-black w-full md:max-w-[23rem] text-2xl rounded-xl h-14 p-4"
              />
              <button
                type="submit"
                className="border-2 h-14 px-8 border-blue-500 rounded-xl text-2xl text-[#0059FF] font-semibold hover:text-white hover:bg-blue-600 transition duration-300"
              >
                Search
              </button>
            </div>
            <div className="flex items-center gap-5 justify-center">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" // Hide the file input element
              />
              <button
                className="text-lg px-4 p-1 bg-[#0059FF] rounded-lg text-white"
                onClick={handleButtonClick}
              >
                Upload
              </button>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" // Hide the file input element
              />
              <button
                className="text-lg px-4 p-1 bg-[#0059FF] rounded-lg text-white"
                onClick={handleButtonClick}
              >
                Add a Book
              </button>
            </div>

            <p className="text-center py-4 font-normal text-2xl">
              20893 Books Available
            </p>
          </div>

          <div className="text-center py-14 w-full">
            <div className="flex justify-center items-center">
              <table className="table-auto w-full bg-white rounded-lg overflow-hidden">
                <tbody>
                  {BooksData.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b text-lg border-black hover:bg-gray-50 transition duration-200"
                    >
                      <td className="px-6 py-4 text-[16px] text-left w-1/3">
                        <img
                          src={row.image}
                          alt="books-image"
                          className="max-w-full h-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center w-1/3">
                        <div className="flex flex-col items-center">
                          <span>Name Of Book: {row.author}</span>
                          <span>Written By: {row.name}</span>
                          <span>
                            Published By, Date: {row.publisher}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right w-1/3">
                        <button className="text-lg px-4 p-1 bg-[#0059FF] rounded-lg text-white">
                          Add to Bag
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center font-bold text-2xl">
        WE are LASU, we are Great!
      </footer>
    </div>
  );
};
