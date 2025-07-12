'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';

export default function NotFound() {
  return (
    <div className="relative h-screen w-screen font-sans overflow-hidden text-white dark:text-black">
       <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-[#330052] clip-left" />
        <div className="absolute inset-0 bg-[#4a3b5f] clip-right" />
      </div>
      <div className="relative z-30">
        <NavBar />
      </div>

       <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-start md:justify-evenly h-full w-full px-4 pt-10 md:pt-24 gap-10 text-center md:text-center">
        {/* Text */}
        <div className="w-full max-w-md">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-wider text-white dark:text-white"
            style={{ wordSpacing: '0.2em' }}
          >
            OOOps! Page <br /> Not Found
          </h1>
          <Link href="/">
            <button className="mt-2 px-6 py-3 bg-[#ffd900] text-black rounded-full text-base sm:text-lg font-semibold hover:brightness-110 transition">
              BACK TO HOME
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[460px] mt-4 md:mt-0">
          <Image
            src="/not-found.svg"
            alt="404 Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
