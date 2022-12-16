import React from 'react'
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { redirect } from 'next/dist/server/api-utils';
import NavBar from '../components/NavBar';


function montana() {

  return (
    <>
    <NavBar />
    <div>Montana</div>
    </>
  )
}

export default montana;

export const getServerSideProps = async (context: {}) => {
  const session = await getSession(context)
  if (!session){
    return {
      redirect: {
        destination: '/'
      }
    }
  }
  return {
    props: {session},
  }
} 