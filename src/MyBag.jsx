import { Header } from './components/Header';
import { BooksData } from './Data/BooksData';

export const MyBag = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center mt-16 py-16">
        <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-[1400px] gap-8">
          <div className="flex flex-col items-center justify-center w-full md:w-3/4 mx-auto">
            <div className="text-center w-full ">
              <p className="font-bold text-4xl">
                Books In Your Bag - 2
              </p>
            </div>

            <div className="text-center py-14 w-full">
              <div className="flex justify-center items-center">
                <table className="table-auto w-full bg-white rounded-lg overflow-hidden">
                  <tbody>
                    {BooksData.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b text-lg border-black  transition duration-200"
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
                          <button className="text-lg px-4 p-1 bg-[#F34245] rounded-lg text-white">
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:w-[38%]">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Ready for Checkout?
            </h2>
            <div className="bg-form-gradient border-black p-4 shadow-md  min-h-[300px]">
              <form className="flex flex-col gap-4">
                <div className="bg-[#D9D9D9] p-4 rounded-lg">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex w-full border-b text-lg border-gray-400 items-center justify-between">
                      <label
                        htmlFor="name"
                        className="text-left text-[16px] font-bold mb-0 mr-2"
                      >
                        Reader ID:
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-[60%] h-8 p-1 border-2 shadow-md border-gray-300"
                      />
                      <div className="bg-[#0059FF] p-1 px-3 rounded-lg">
                        <button className="text-white">Go</button>
                      </div>
                    </div>
                    <div className="flex w-full border-b text-lg border-gray-400 items-center justify-between">
                      <label
                        htmlFor="contact"
                        className="text-left text-[16px] font-bold mb-0 mr-2"
                      >
                        Name:
                      </label>
                    </div>
                    <div className="flex w-full border-b text-lg border-gray-400 items-center justify-between">
                      <label
                        htmlFor="referenceId"
                        className="text-left text-[16px] font-bold mb-0 whitespace-nowrap mr-2"
                      >
                        Contact:
                      </label>
                    </div>
                    <div className="flex w-full border-b text-lg border-gray-400 items-center justify-between">
                      <label
                        htmlFor="address"
                        className="text-left text-[16px] font-bold mb-0 mr-2"
                      >
                        Reference ID:
                      </label>
                    </div>
                    <div className="flex w-full border-b text-lg border-gray-400 items-center justify-between">
                      <label
                        htmlFor="address"
                        className="text-left text-[16px] font-bold mb-0 mr-2"
                      >
                        Start Date:
                      </label>
                    </div>
                    <div className="flex w-full text-lg py-1 items-center justify-between">
                      <label
                        htmlFor="name"
                        className="text-left text-[16px] font-bold mb-0 mr-2"
                      >
                        Reader Due Date:
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-[55%] h-6 p-1 border-2 shadow-md border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <button
                      type="submit"
                      className="m-2 p-1 px-4 text-lg mx-8 bg-[#0059FF] text-white font-semibold rounded-md transition duration-300"
                    >
                      CheckOut
                    </button>
                  </div>
                </div>
                <div className="py-4 font-bold tracking-tight">
                  <ul className="list-none mb-6">
                    <li className="flex items-baseline">
                      <span className="text-blue-600 text-2xl items-start text-start">
                        &#8226;
                      </span>
                      <span className="ml-2 text-[15px]">
                        Readers should not mark, underline, write, or
                        tear pages or otherwise damage the library
                        documents.
                      </span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-blue-600 text-2xl items-start text-start">
                        &#8226;
                      </span>
                      <span className="ml-2 text-[15px]">
                        Readers are requested to handle all library
                        property carefully to avoid damage and not
                        disturb other readers/users.
                      </span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-blue-600 text-2xl items-start text-start">
                        &#8226;
                      </span>
                      <span className="ml-2 text-[15px]">
                        No library material can be taken out without
                        the librarian’s permission.
                      </span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-blue-600 text-2xl items-start text-start">
                        &#8226;
                      </span>
                      <span className="ml-2 text-[15px]">
                        Four books are issued for a maximum of two
                        weeks and must be returned on or before the
                        due date specified above.
                      </span>
                    </li>
                  </ul>
                </div>
              </form>
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
