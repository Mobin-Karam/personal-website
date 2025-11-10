import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="min-w-md">
            <h1 className="w-full text-white text-2xl text-left">Hi !...</h1>
            <h2 className="text-white text-2xl">I'm <span className="text-red-400 text-4xl">MobinKaram</span></h2>
            <p className='text-white pt-2'>I start my programming life around 2023 when i see need money for my life college, and begine my programming life in that period after that i expersiense that is not just about money is about Coding Coding & Coding think about what you want to do with your keyboard & your energy so now, i know to write code in Python,Javascript & Typescript and for now make web Application with Next.js&React</p>
            <p className="text-white pt-2">I so glad to work with you
                <Link href={'/contactme'} className='pl-2 hover:text-red-600 hover:underline'>
                    ContactMe
                </Link>
            </p>
        </div>
    )
}

export default Hero