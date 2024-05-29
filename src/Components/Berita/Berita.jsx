import ButtonNavigasi from "../Button_navigasi";
const Berita = () => {
  return (
    <div>
      <nav className="bg-[#2DBAB1] flex items-center justify-center py-4 ">
        <h1 className="text-center text-white pb-6 text-2xl">Berta</h1>
      </nav>
      <div className="h-screen fixed bg-white border rounded-3xl mt-[-25px] overflow-auto">
        <div className="flex flex-col gap-4 pb-44">
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
      <ButtonNavigasi />
    </div>
  );
};

export default Berita;
