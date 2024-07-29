import { Header } from './components/Header';
import { ReadersData } from './Data/ReadersData';
export const ReadersRoute = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center mt-20 py-20">
        <div className="flex flex-col md:flex-row items-start  justify-center w-full max-w-[1200px] gap-8 ">
          <form className="flex flex-col bg-form-gradient  md: w-5/12 p-5 shadow-md rounded-lg min-h-[400px]">
            <h3 className="font-bold text-3xl mb-5 bg-black w-full text-white py-1 rounded text-center">
              Register New Reader
            </h3>

            <div className="bg-[#D9D9D9] p-4 rounded-lg">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="flex w-full items-center justify-between ">
                  <label
                    htmlFor="name"
                    className="text-left font-semibold mb-0  mr-4"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-2 shadow-md border-gray-300 w-[65%] h-7 p-2 rounded-2xl"
                  />
                </div>
                <div className="flex w-full items-center justify-between ">
                  <label
                    htmlFor="contact"
                    className="text-left font-semibold mb-0 mr-4"
                  >
                    Contact:
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="border-2 shadow-md border-gray-300 w-[65%] h-7 p-2 rounded-2xl"
                  />
                </div>
                <div className="flex w-full items-center justify-between ">
                  <label
                    htmlFor="referenceId"
                    className="text-left font-semibold mb-0 whitespace-nowrap mr-4"
                  >
                    Reference Id:
                  </label>
                  <input
                    type="number"
                    id="referenceId"
                    className="border-2 shadow-md border-gray-300 w-[65%] h-7 p-2 rounded-2xl"
                  />
                </div>
                <div className="flex w-full items-center justify-between ">
                  <label
                    htmlFor="address"
                    className="text-left font-semibold mb-0  mr-4"
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="border-2 shadow-md border-gray-300 w-[65%] h-7 p-2 rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex items-end justify-end">
                <button
                  type="submit"
                  className="m-4 p-1 px-5 text-xl  mx-16 bg-[#0059FF] text-white font-semibold rounded-md transition duration-300"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="py-6 font-bold tracking-tight">
              <ul className="list-none mb-10">
                <li className="flex items-center ">
                  <span className="text-blue-600 text-2xl p-2">
                    &#8226;
                  </span>
                  <span className="ml-2 text-[17px]">
                    Readers should not register multiple times.
                  </span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-blue-600 text-2xl p-2">
                    &#8226;
                  </span>
                  <span className="ml-2 text-[17px]">
                    Duplicate reader registrations will be
                    deactivated.{' '}
                  </span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-blue-600 text-2xl p-2">
                    &#8226;
                  </span>
                  <span className="ml-2 text-[17px]">
                    Contact information provided above must be correct
                    and subject to verification.
                  </span>
                </li>
              </ul>
            </div>
          </form>

          {/* Search Readers Section */}
          <div className="flex flex-col items-center justify-center w-full md:w-3/4 mx-auto">
            <h3 className="font-extrabold text-4xl mb-8 leading-none text-center">
              Search Readers
            </h3>

            <div className="flex py-8 gap-4 w-full items-center justify-center">
              <input
                type="text"
                placeholder="Search"
                className="border-2 border-black text-black w-full md:max-w-[20rem] text-2xl rounded-xl h-12 p-4"
              />
              <button
                type="submit"
                className="border-2 h-12 px-8 border-blue-500 rounded-xl text-2xl text-[#0059FF] font-semibold hover:text-white hover:bg-blue-600 transition duration-300"
              >
                Search
              </button>
            </div>

            <div className=" text-center  w-full">
              <p className="py-4  text-3xl">2 readers Subscribed</p>

              <div className="flex justify-center">
                <table className="table-auto w-full bg-white  rounded-lg overflow-hidden">
                  <thead>
                    <tr className=" border-b-2 border-black">
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Readers ID
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Name
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Contact
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Reference ID
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ReadersData.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b text-lg border-black hover:bg-gray-50  transition duration-200"
                      >
                        <td className="px-6 py-4">{row.id}</td>
                        <td className="px-6 py-4 text-[16px]">
                          <p className="px-1 py-1 bg-[#0059FF] text-white rounded-md">
                            {row.name}
                          </p>
                        </td>
                        <td className="px-6 py-4">{row.contact}</td>
                        <td className="px-6 py-4">
                          {row.referenceId}
                        </td>
                        <td className="px-6 py-4">{row.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
