import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

function UserPage() {
  let { id } = useParams();
  const random = Math.floor(Math.random() * 4) + 1;
  const khodam = data.data.find((item) => item.id === random);
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-1/4 bg-black rounded-3xl bg-opacity-70 backdrop-blur-sm p-4">
        <h1 className="text-white text-2xl font-semibold">
          {id}, Khodam Anda Adalah
        </h1>
        <img src={khodam.image} alt="khodam" className="w-full" />
        <h1 className="text-white text-xl font-bold">{khodam.nama}</h1>
      </div>
    </div>
  );
}

export default UserPage;
