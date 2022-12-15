import React from "react";
import deerLogo from 'public/deer-logo.png'
import Image from "next/image";

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex flex-row items-center gap-x-1 flex-1">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <Image 
            alt="logo"
            src={deerLogo}/>
          </div>
        </div>
        <span className="text-xl font-bold">DrawOdds</span>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
