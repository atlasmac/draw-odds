import React from "react";
import {FcGoogle} from 'react-icons/fc'
import { useSession, signIn, signOut } from "next-auth/react";


function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="py-6 text-2xl">
            View draw odds, harvest statistics and hunter pressure data.
          </p>
          <p className="pb-6 text-2xl">All for free.</p>
          <div className="flex flex-row justify-center gap-x-4">
            <button className="btn btn-primary" onClick={() => signIn()}><span className="flex flex-row gap-x-1 items-center"><FcGoogle size={20}/>Login / Sign up</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
