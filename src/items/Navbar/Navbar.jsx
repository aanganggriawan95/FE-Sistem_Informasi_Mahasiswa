import React from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJBYW5nIEFuZ2dyaWF3YW4iLCJuaW0iOiIxMDIyMTA0NCIsImlhdCI6MTcxNjk2ODk3MiwiZXhwIjoxNzE3MDU1MzcyfQ.rrdkkNIim5tfPx5VimUOL3OT3Unu3Uj9d20Fu08PitU";

const Navbar = () => {
  const [name, setName] = useState("");
  const [toke, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    RefreshToken();
  }, []);

  const RefreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {}
  };

  return (
    <nav className="bg-[#2DBAB1]  border-gray-200 dark:bg-gray-900 pb-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-2">
          <img src="/pppp.jpg" alt="" className="w-12 rounded-full border-2" />
          <div className="flex flex-col">
            <span className="font-semibold text-white">
              {/* {data.map((mhs) => mhs.name)} */}
            </span>
            <span className="font-normal text-white">
              {/* {data.map((mhs) => mhs.nim)} */}
            </span>
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
