import { Input } from 'postcss';
import React from 'react'
import { useContext } from 'react'

import { FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className='flex justify-between p-2'>
        <div id="search" className="w-3/12  flex rounded-md  bg-gray-500 ">
            <div className="items-center flex">
                <FaSearch className="m-2 text-2xl"/>
                <h3 className="pl-4">Search...</h3>
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent flex-grow outline-none pl-2 text-white placeholder-gray-300"
                />
            </div>
        </div>
    </div>
  )
}

export default TopBar