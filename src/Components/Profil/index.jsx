import ButtonNavigasi from "../Button_navigasi";
const Profil = () => {
  return (
    <>
      <div className="flex flex-col w-full border pt-4 border-collapse">
        <div className="mx-auto relative dark:bg-gray-600">
          <div className="relative w-28 h-28 bg-gray-100 rounded-full overflow-hidden">
            <svg
              className=" absolute w-[120px] h-32 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <button className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
        <h1 className="mx-auto">Aang</h1>
      </div>
      <ButtonNavigasi />
    </>
  );
};

export default Profil;
