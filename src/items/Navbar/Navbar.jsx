import React from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
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
      setNim(decoded.nim);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/users");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setNim(decoded.nim);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${toke}`,
      },
    });
    console.log(response.data);
  };

  return (
    <nav className="bg-[#2DBAB1]  border-gray-200 dark:bg-gray-900 pb-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-2">
          <img src="/pppp.jpg" alt="" className="w-12 rounded-full border-2" />
          <div className="flex flex-col">
            <span className="font-semibold text-white">{name}</span>
            <span className="font-normal text-white">{nim}</span>
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
