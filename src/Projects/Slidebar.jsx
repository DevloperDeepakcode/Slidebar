import React, { useState } from "react";
// import Logo from "../Slidebar/pow.png"
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { MdReport } from "react-icons/md";
import { SiGooglechrome } from "react-icons/si";




function Slidebar1() {
  const [open , setOpen]= useState(true)


  const MenuItem=[
    {
      icon:<IoHomeOutline size={30}/>,
      lavel:"Home"
    },
    {
      icon:<FaProductHunt size={30}/>,
      lavel:"Product"
    },
    {
      icon:<LuLayoutDashboard size={30}/>,
      lavel:"Dashboard"
    },
    {
      icon:<IoSettingsOutline size={30}/>,
      lavel:"Setting"
    },
    {
      icon:<CiLogout size={30}/>,
      lavel:"Log"
    },
    {
      icon:<MdReport size={30}/>,
      lavel:"Report"
    },
  ]
  return (
    <>
      <nav className={`shadow-md h-screen  p-2 flex flex-col duration-500 bg-blue-500 text-white fixed top-0 left-0 ${open? "w-72": "w-16"}`}>
        {/* header */}
        <div className="border px-3 py-2 h-20 flex justify-between items-center">
          
          {/* <img src={Logo} alt="" className={`${open? "w-10" :"w-0"} rounded-md`} /> */}
          <SiGooglechrome className={`${open? "w-10" :"w-0"} rounded-md duration-500`} size={30}/>

          <div>
          <MdMenuOpen size={34} className={ `${!open&& "rotate-180"} duration-500 cursor-pointer`} onClick={()=>{setOpen(!open)}}/>
          </div>
        </div>


        {/* Body */}

        <ul className="flex-1">
          {
            MenuItem.map((item,index)=>{
              return(
                <li key={index} className="px-3 py-2 my-2 hover:bg-blue-800 rounded duration-300 cursor-pointer flex gap-2 items-center relative group">
                  <div>{item.icon}</div>
                  <p className={`${!open && "w-0 translate-x-24"} duration-500 overflow-hidden`}>
                  
                    {item.lavel}
                  </p>
                  <p className={`${open && "hidden"} absolute  shadow-md  rounded-md 
                    w-0
                    p-0
                    text-black
                    bg-white
                    duration-300
                    overflow-hidden
                    group-hover:w-fit
                    group-hover:p-2
                    group-hover:left-16 
                  `}>
                  
                    {item.lavel}
                  </p>
                </li>
              )
            })
          }
        </ul>


        {/* Footer */}
        <div className="flex items-center gap-2 px-3 py-2">
        <div>
        <FaUserTie size={30}/>
        </div>
          <div className={`${!open && "w-0 translate-x-24" } duration-500 overflow-hidden leading-5`}>
            <p >Deepak kumar</p>
            <span className="text-xs">Deepakkumar@1235gmail.com</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Slidebar1;
