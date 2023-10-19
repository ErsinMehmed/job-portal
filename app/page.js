"use client";
import { useState } from "react";
import Link from "next/link";
import { userKind } from "./data";

const Home = () => {
  const handleUserKindClick = (index) => {
    sessionStorage.setItem("userKind", index);
  };

  return (
    <section className='flex items-center justify-center h-screen min-h-screen w-full bg-gray-100'>
      <div className='bg-white p-10 rounded-lg shadow-lg'>
        <div className='font-bold text-slate-700 text-2xl mb-6 text-center'>
          Изберете тип потребител
        </div>

        <div className='flex space-x-10'>
          {userKind.map((item, index) => (
            <Link
              key={index}
              href='/login'>
              <button onClick={() => handleUserKindClick(index + 1)}>
                <div className='flex items-center justify-center h-64 w-64 shadow-lg rounded-md border border-slate-100 border-b-8 border-b-transparent hover:border-b-blue-400 hover:bg-gray-50 hover:shadow-xl cursor-pointer transition-all active:scale-95'>
                  <div>
                    {item.icon}
                    <div className='text-center text-xl font-semibold'>
                      {item.text}
                    </div>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
