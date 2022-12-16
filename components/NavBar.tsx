import React from "react";
import deerLogo from "public/deer-logo.png";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function NavBar() {
  
  const { data: session } = useSession();
  console.log(session?.user?.image)
  return (
    <div className="navbar bg-base-100">
      <div className="flex flex-row items-center gap-x-1 flex-1">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <Image alt="logo" src={deerLogo} />
          </div>
        </div>
        <span className="text-xl font-bold">DrawOdds</span>
      </div>
      {session && (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image alt="logo" src='https://lh3.googleusercontent.com/a/AEdFTp4HcnDLOajtBl3Vgq9a23IhJbNO29QxeQGSJqeraw=s96-c' width={36} height={36}/>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
