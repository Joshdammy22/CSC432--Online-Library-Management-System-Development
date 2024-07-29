import { Header } from './components/Header';
import { ReturnsData } from './Data/ReturnsData';

export const Returns = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center mt-20 py-20">
        <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-[1400px] gap-8">
          {/* Search Readers Section */}
          <div className="flex flex-col items-center justify-center w-full md:w-[95%] mx-auto">
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

            <div className="w-full">
              <p className="py-4 text-3xl text-center">
                2 Rentals Found
              </p>

              <div className="flex justify-center">
                <table className="table-auto w-full bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="border-b-2 border-black">
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Reader ID
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Name
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Book
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Reference ID
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black">
                        Address
                      </th>
                      <th className="text-left px-8 py-4 font-medium text-[18px] text-black"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ReturnsData.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b text-lg border-black transition duration-200"
                      >
                        <td className="px-6 py-4">{row.id}</td>
                        <td className="px-6 py-4 text-[16px]">
                          <p className="px-1 py-1 rounded-md">
                            {row.name}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span>Name Of Book: {row.author}</span>
                            <span>Written By: {row.name}</span>
                            <span>
                              Published By, Date: {row.publisher}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {row.rentalDate}
                        </td>
                        <td className="px-6 py-4">
                          {row.expectedReturnDate}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-lg px-4 p-1 bg-[#0059FF] rounded-lg text-white">
                            Return
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
      </div>
      <div className="flex py-8 items-center justify-center gap-8">
        <button className="text-lg px-4 p-1 text-[#0059FF] rounded-lg border-2 bg-white">
          Previous
        </button>
        <button className="text-lg px-4 p-1 text-[#0059FF] rounded-lg border-2 bg-white">
          Next
        </button>
      </div>

      <footer className="text-center font-bold text-2xl">
        WE are LASU, we are Great!
      </footer>
    </div>
  );
};
