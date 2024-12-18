"use client";
import { AiFillLayout } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import { useState } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la visibilidad de la barra lateral

  // Función para alternar la visibilidad
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Botón para abrir/cerrar el sidebar (visible solo en pantallas pequeñas) */}
      <button
        className="lg:hidden bg-blue-950 text-white p-2 rounded m-4"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
         {isOpen ? "✖" : "☰"} {/* Mostrar "☰" para abrir y "✖" para cerrar */}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-950 text-white w-64 p-4 fixed top-0 left-0 h-full transform transition-transform duration-300 
            lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="pt-10 ">
          <li className="mb-4 ">
            <a href="#" className="hover:underline flex items-center">
            <AiFillLayout className="mr-2 text-4xl"/>
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline flex items-center">
            <FaUserShield className="mr-2 text-4xl" />
              Users
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline flex items-center">
            <AiFillProduct className="mr-2 text-4xl" />
              Products
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline flex items-center">
            <FaMoneyCheckDollar className="mr-2 text-4xl"/>
              Transactions
            </a>
          </li>
        </ul>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          ✖ {/* Botón para cerrar */}
        </button>
      </div>

      {/* Contenido principal */}
      <div id="Dashboard-top" className="flex-1 ml-0 lg:ml-64 p-4  bg-blue-900">
      <h1 className="text-2xl font-bold">Dashboard Next.JS and TailWind</h1>
      <p></p>
        <div className="mt-4 w-full bg-blue-950 rounded-lg h-16">
            <div className="flex items-center grid-cols-5">
                <div className="m-2 w-full">
                    <h3>Dasboard</h3>
                </div>
                <div id="search" className="w-3/12  flex rounded-md  bg-gray-500  ">
                    <div className="items-center flex">
                    <FaSearch className="m-1 text-2xl"/>
                    <h3 className="pl-4">Search...</h3>
                    </div>
                </div>
                <div className="flex w-12 ml-4 p-2 items-center justify-end ">
                    <IoChatboxEllipsesSharp className="text-4xl"/>
                </div>
                <div className="flex w-12 items-center p-2 justify-end">
                    <FaBell className="text-3xl"/>
                </div>
                <div className="flex w-12 items-center p-2 justify-end ">
                    <FaGitAlt className="text-4xl" />
                </div>

            </div>
            
        </div>


        <div className="grid grid-cols-2 grid-rows-2  gap-4 mt-4">
            <div className="w-full col-span-1 row-span-2 p-8 bg-blue-950 rounded-lg  ">
                <h1>Div 1</h1>
            </div>
            <div className="p-8 bg-blue-950 rounded-lg">
                <h1>Div 2</h1>
            </div>
            <div className="p-8 bg-blue-950 rounded-lg">
                <h1>Div 3</h1>
            </div>
        </div>

        <div className="mt-4 w-full h-64 border-4 border-white">
            <h1>Weekly Recap</h1>
        </div>

      </div>

      



    </div>
  );
};

export default Sidebar;