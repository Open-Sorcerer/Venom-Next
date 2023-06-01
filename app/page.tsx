'use client';
import Image from 'next/image';
import SplineObject from './components/SplineObject';
export default function Home() {
  return (
    <main className="h-full w-full flex flex-row min-h-screen items-center justify-between bg-auto bg-no-repeat bg-right-top bg-scroll backdrop-contrast-200 backdrop-saturate-200" style={{ backgroundImage: 'url(./venom-bg.svg)' }}>
      <button className="w-60 h-16 flex flex-start items-center gap-4 absolute top-5 right-10 px-5 py-2 bg-gradient-to-tr from-black to-[#363636]  rounded-full translate-y-5 shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/40 transition-all">
        <div className="h-10 w-10 rounded-full bg-lime-600"></div>
        <span className="text-white text-md font-semibold">
          Connect Wallet
        </span>
      </button>
      <div className="w-1/2 flex flex-col gap-5 absolute left-0 top-1/2 transform -translate-y-1/2 p-10">
        <span className="text-white text-3xl font-semibold">
          Venom
        </span>
        <span className="bg-clip-text text-5xl font-bold text-transparent bg-gradient-to-r from-lime-500 via-cyan-500 to-violet-500">
          Boilerplate
        </span>
        <p className="text-2xl font-semibold text-gray-400">Safe, reliable, and 100% yours. Manage your assets with Venom&apos;s non-custodial wallet.</p>
      </div>
      <div className="hidden md:flex absolute left-1/3 top-20">
        <SplineObject scene={'https://prod.spline.design/DBMV3V6tanMlskYw/scene.splinecode'} />
      </div>
    </main>
  );
}
