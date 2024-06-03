import ButtonNavigasi from "../Button_navigasi";
import Navbar from "../../items/Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-white rounded-t-[40px] border mt-[-35px] fixed overflow-auto">
        <div className="px-4 ">
          <img src="/img-campus.png" alt="" className="py-4" />
          <div>
            <h1 className="font-bold text-2xl">STT Cipasung</h1>
            <p className="text-sm text-[#6B6B6B]">
              Jl. Siliwangi (Ringroad Utara) Jombor Sleman D.I Yogyakarta
            </p>
          </div>
          {/* Jadwal Kuliah */}
          <div className="py-6 flex justify-between items-center">
            <h1 className="font-bold text-xl">Jadwal Kuliah Hari ini</h1>
            <img src="/Vector.png" alt="" />
          </div>
          <div className="w-full flex border rounded-2xl shadow-md">
            <div className="flex py-3 flex-col w-[30%] justify-center items-center">
              <span>09:40</span>
              <img src="/panah-bawah.png" alt="" className="w-4 h-5" />
              <span>12:10</span>
            </div>
            <div className="w-[70%] border-l-2 px-2 border-[#2DBAB1] ">
              <h1 className="font-bold">Rekayasa Web Praktik</h1>
              <p className="text-[#6B6B6B]">Mata kuliah praktik</p>
            </div>
          </div>
          {/* Informasi */}
          <div className="py-6">
            <h1 className="font-bold">Informasi untuk kamu</h1>
          </div>
          <div className="flex flex-col gap-4 pb-44">
            <div className="w-full h-auto flex flex-col gap-2 p-2 border-2 rounded-2xl shadow-md">
              <img
                className="rounded-t-lg h-36"
                src="https://source.unsplash.com/random
                "
                alt=""
              />
              <div>
                <h1 className="px-2 font-bold">Mahasiswa UTY bangun startup</h1>
                <p className="px-2">
                  Sejak pandemi melanda negeri banyak UMKM mengalami kesulitan
                  pemasukan
                </p>
              </div>
              <button className="bg-[#2DBAB1] rounded-md py-2 font-bold text-white">
                Selanjutnya
              </button>
            </div>
            <div className="w-full h-auto flex flex-col gap-2 p-2 border-2 rounded-2xl shadow-md">
              <img
                className="rounded-t-lg h-36"
                src="https://source.unsplash.com/random
                "
                alt=""
              />
              <div>
                <h1 className="px-2 font-bold">Mahasiswa UTY bangun startup</h1>
                <p className="px-2">
                  Sejak pandemi melanda negeri banyak UMKM mengalami kesulitan
                  pemasukan..
                </p>
              </div>
              <button className="bg-[#2DBAB1] rounded-md py-2 font-bold text-white">
                Selanjutnya
              </button>
            </div>
            <div className="w-full h-auto flex flex-col gap-2 p-2 border-2 rounded-2xl shadow-md">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div>
                <h1 className="px-2 font-bold">Mahasiswa UTY bangun startup</h1>
                <p className="px-2">
                  Sejak pandemi melanda negeri banyak UMKM mengalami kesulitan
                  pemasukan..
                </p>
              </div>
              <button className="bg-[#2DBAB1] rounded-md py-2 font-bold text-white">
                Selanjutnya
              </button>
            </div>
            <div className="w-full h-auto flex flex-col gap-2 p-2 border-2 rounded-2xl shadow-md">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div>
                <h1 className="px-2 font-bold">Mahasiswa UTY bangun startup</h1>
                <p className="px-2">
                  Sejak pandemi melanda negeri banyak UMKM mengalami kesulitan
                  pemasukan..
                </p>
              </div>
              <button className="bg-[#2DBAB1] rounded-md py-2 font-bold text-white">
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </div>
      <ButtonNavigasi />
    </>
  );
};

export default Home;
