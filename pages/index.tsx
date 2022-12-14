import Head from "next/head";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import States from "../components/States";
import { useSession} from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>DrawOdds</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {!session ? <Hero/> : <States />}
    </div>
  );
}
