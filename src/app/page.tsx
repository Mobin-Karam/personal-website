import Link from 'next/link';
import Hero from '../components/homepage/hero';

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
