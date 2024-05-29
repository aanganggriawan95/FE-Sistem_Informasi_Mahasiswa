import "flowbite";
import ButtonNavigasi from "../Button_navigasi";
const Khs = () => {
  return (
    <div>
      <nav className="bg-[#2DBAB1] flex items-center justify-center py-4 ">
        <h1 className="text-center text-white pb-6 text-2xl font-bold">KHS</h1>
      </nav>
      <div className="h-screen fixed w-full bg-white border rounded-3xl mt-[-25px] overflow-auto ">
        <div className="py-4 border-b-[2px]">
          <h1 className="px-4 font-bold text-lg">Detail kartu rencana studi</h1>
        </div>
        <div className="mt-6">
          <div className="flex gap-2 justify-end mx-4">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-white bg-[#2DBAB1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Tahun{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown2"
              class="text-white bg-[#2DBAB1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Semester{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown2"
              className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative overflow-x-auto sm:rounded-lg mt-6  border-b-2 pb-36">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="bg-[#2DBAB1]">
                  <th scope="col" className="px-6 py-3 text-white">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3 text-white">
                    Kode MK
                  </th>
                  <th scope="col" className="px-6 py-3 text-white">
                    Mata Kuliah
                  </th>
                  <th scope="col" className="px-6 py-3 text-white">
                    SKS
                  </th>
                  <th scope="col" className="px-6 py-3 text-white">
                    SMT
                  </th>
                  <th scope="col" className="px-6 py-3 text-white">
                    Kelas
                  </th>
                  <th scope="col" className="px-6 py-3 text-white">
                    Nilai
                  </th>
                  <th scope="col" className="px-6 py-3 text-white">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1001
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sistem informasi
                  </td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">VI</td>
                  <td className="px-6 py-4">IF-3B</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ButtonNavigasi />
    </div>
  );
};

export default Khs;
