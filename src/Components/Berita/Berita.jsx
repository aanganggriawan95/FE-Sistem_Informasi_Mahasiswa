import ButtonNavigasi from "../Button_navigasi";
import { useEffect, useState } from "react";
import { fetchBerita } from "../../config/api_berita";
const Berita = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBerita = async () => {
      try {
        const beritaData = await fetchBerita();
        setData(beritaData);
        console.log(beritaData);
      } catch (error) {
        console.error(error);
      }
    };

    getBerita();
  }, []);
  return (
    <div>
      <nav className="bg-[#2DBAB1] flex items-center justify-center py-4 ">
        <h1 className="text-center text-white pb-6 text-2xl">Berta</h1>
      </nav>
      <div className="h-screen fixed bg-white border rounded-3xl mt-[-25px] overflow-auto">
        <div className="flex flex-col gap-4 pb-44">
          {data.map((item) => (
            <div className="w-full h-auto flex flex-col gap-2 p-2 border-2 rounded-2xl shadow-md">
              <img className="rounded-t-lg border" src={item.img} alt="" />
              <div>
                <h1 className="px-2 font-bold">{item.judul}</h1>
                <p className="px-2 text-justify">{item.isi}</p>
              </div>
              <button className="bg-[#2DBAB1] rounded-md py-2 font-bold text-white">
                Selanjutnya
              </button>
            </div>
          ))}
        </div>
      </div>
      <ButtonNavigasi />
    </div>
  );
};

export default Berita;
