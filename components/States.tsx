import React from "react";
import Link from "next/link";
import { useSession} from "next-auth/react";


const States = () => {
  const { data: session } = useSession();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-5">Welcome {session?.user?.name}</h1>
          <h2 className="text-5xl font-bold">
            Jump in to see state specifc data
          </h2>
          <p className="py-6">
            Featuring up to date data on draw odds, harvest statistics, and hunter
            numbers. Straight from the state fish and game agencies, displayed
            in a digestible and user friendly manner.
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Current States</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                <tr className="hover">
                  <td>
                    <Link href="/montana">Montana</Link>
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td>Wyoming</td>
                  <td>
                    <span className="italic">Coming soon</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
