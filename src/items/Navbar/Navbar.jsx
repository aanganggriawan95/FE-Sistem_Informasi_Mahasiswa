import { Collapse } from "flowbite";
import { useEffect } from "react";
const Navbar = () => {
  // useEffect(() => {
  //   const target = document.getElementById("user-menu-button");
  //   const teriggle = document.getElementById("user-dropdown");

  //   const instanceOption = {
  //     id: "user-menu-button",
  //     override: true,
  //   };

  //   const collapse = new Collapse(teriggle, target, instanceOption);

  //   collapse.toggle();
  // }, []);
  return (
    <nav className="bg-[#2DBAB1]  border-gray-200 dark:bg-gray-900 pb-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-2">
          <img src="/pppp.jpg" alt="" className="w-12 rounded-full border-2" />
          <div className="flex flex-col">
            <span className="font-semibold text-white">Jonathan</span>
            <span className="font-normal text-white">10221044</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a href="">
            <img src="/notifications.png" alt="" />
          </a>
          <a href="">
            <img src="/settings.png" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
