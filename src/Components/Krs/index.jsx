import Navbar from "../../items/Navbar/Navbar";
import ButtonNavigasi from "../Button_navigasi";
import { useEffect, useState } from "react";
import "animate.css";
const Krs = () => {
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [isHijabVisible, setHijabVisible] = useState(false);

  const close_btn = () => {
    setDetailVisible(false);
    setHijabVisible(false);
  };

  const open_detail = () => {
    setDetailVisible(!isDetailVisible);
    setHijabVisible(true);
  };
  return (
    <div>
      <div
        id="hijab"
        className={`w-full h-screen bg-slate-600 absolute z-50 transition-opacity duration-500 ${
          isHijabVisible ? "opacity-50" : "opacity-0 hidden"
        }`}
      ></div>
      <Navbar />
      <div className="w-full h-screen bg-white rounded-t-[40px] border mt-[-35px] fixed overflow-auto">
        <div className="px-5 mt-4">
          <h1 className="font-semibold text-lg py-4 border-b-2">
            Detail kartu rencana studu
          </h1>
          <div className="mt-4">
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" />
                  <p className="">Detail kartu rencana studi</p>
                </div>
                <p>4 MK</p>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" className="" />
                  <p className="">Jumlah SKS</p>
                </div>
                <p>9 SKS</p>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" />
                  <p>Tahun Ajaran</p>
                </div>
                <p>2021/2022</p>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" />
                  <p>Semester</p>
                </div>
                <p>GANJIL</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-5 mt-4">
          <h1 className="font-semibold text-lg py-4 border-b-2">
            Daftar mata kuliah yang diambil
          </h1>
          <div className="mt-4">
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/verified_user.svg" alt="" className="h-10" />
                  <div>
                    <p className="">Testing & Implementasi</p>
                    <span className="text-sm">Senin, 07:00 - 09:10 WIB</span>
                  </div>
                </div>
                <span id="lihatDetail" onClick={open_detail}>
                  <img src="/arrow-up.svg" alt="" />
                </span>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/verified_user.svg" alt="" className="h-10" />
                  <span>
                    <p className="">Sistem Operasi</p>
                    <span className="text-sm">Senin, 07:00 - 09:10 WIB</span>
                  </span>
                </div>
                <span>
                  <img src="/arrow-up.svg" alt="" />
                </span>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/verified_user.svg" alt="" className="h-10" />
                  <div>
                    <p>Mobile Computing</p>
                    <span className="text-sm">Senin, 07:00 - 09:10 WIB</span>
                  </div>
                </div>
                <span>
                  <img src="/arrow-up.svg" alt="" />
                </span>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/verified_user.svg" alt="" className="h-10" />
                  <div>
                    <p>Rekayasa Web Praktik</p>
                    <span className="text-sm">Senin, 07:00 - 09:10 WIB</span>
                  </div>
                </div>
                <span>
                  <img src="/arrow-up.svg" alt="" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
      </div>

      <div
        id="detailKRS"
        className={`absolute z-[100] animate__animated animate__fadeInUp bottom-0 w-full border rounded-t-[21px] bg-white h-[70%] overflow-auto transition-opacity duration-500 ${
          isDetailVisible ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <svg
          onClick={close_btn}
          id="btcClose"
          class="w-10 h-10 text-red-600 dark:text-white absolute end-0 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <div className="px-5 mt-4">
          <div className="flex">
            <img src="/verified_user.svg" alt="" />
            <h1 className="font-semibold text-lg py-4">
              Testing & Implementasi
            </h1>
          </div>
          <div className="mt-4">
            <ul className="flex flex-col gap-6">
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" />
                  <p className="">SKS</p>
                </div>
                <p>2 SKS</p>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" className="" />
                  <p className="">Kelas</p>
                </div>
                <p>IF B</p>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" />
                  <p>Hari</p>
                </div>
                <p>Sabtu</p>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" />
                  <p>Pukul</p>
                </div>
                <p>08:50-10:30 WIB</p>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" />
                  <p>Ruang</p>
                </div>
                <p>B1 002</p>
              </li>
              <li className="flex justify-between items-center border-b-[2px]">
                <div className="flex gap-2 items-center">
                  <img src="/krs1.svg" alt="" />
                  <p>Status</p>
                </div>
                <p className="text-[#2DBAB1]">DISETUJUI</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ButtonNavigasi />
    </div>
  );
};

export default Krs;
