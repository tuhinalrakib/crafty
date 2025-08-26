import Image from "next/image";
import Hero from "./components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Crafty | Your digital goods Purchase Plateform</title>
      <meta name="description" content="This is Digital goods and gadget Purchase Plateform"/>
      <meta name="viewport" content="width=device-width, initial-scale-1"/>

    </Head>
    <main className="scroll-smooth min-h-screen bg-[#122117] px-1">
      <section className="pt-16 flex items-center justify-center mt-10">
        <Hero />
      </section>
    </main>
    </>
  );
}
