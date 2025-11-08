import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import '@/app/ui/global.css';
import Image from 'next/image';
import { Welcome } from './ui/homepage/Welcome';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Hero from './ui/homepage/hero';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default async function Page() {
  return (
    <div className=" flex flex-col items-start justify-start">
      <Hero />
      <div className="flex flex-row gap-2 pt-3">
        <Link href={'https://github.com/Mobin-Karam'} className="text-white text-3xl hover:underline hover:text-red-500">
          Github
        </Link>
        <Link href={'https://linkedin.com/in/mobin-karam'} className="text-white text-4xl hover:underline hover:text-red-500">
          Linkedin
        </Link>
      </div>
    </div>
  );
}
