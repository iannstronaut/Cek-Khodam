import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState("");
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-white text-center font-bold text-xl mb-4">
        Cek Khodam Online
      </h1>
      <div className="w-1/4 bg-black rounded-3xl bg-opacity-70 backdrop-blur-sm">
        <div className="text-center flex flex-col justify-center items-center p-5">
          <div className="w-full mb-5">
            <label
              class="block text-white text-xl font-semibold mb-2"
              for="username"
            >
              Nama lengkap
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nama lengkap"
              onChange={(event) => setData(event.target.value)}
            />
          </div>
          {data !== "" ? (
            <Link
              to={`/${data}`}
              className={`px-5 py-2 rounded-full bg-indigo-700 text-white font-semibold`}
            >
              Submit
            </Link>
          ) : (
            // Jika data kosong, tampilkan Link dalam keadaan dinonaktifkan
            <button
              className="px-5 py-2 rounded-full bg-gray-400 text-white font-semibold cursor-not-allowed"
              disabled
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <h1 className="text-center text-white">
        Create By <a href="https://github.com/iannstronaut">Iannstronaut</a>
      </h1>
    </div>
  );
}

export default HomePage;
