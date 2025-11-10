import Link from 'next/link'
import React from 'react'

interface WelcomeButtons { name: string, href: string }

export const WelcomeButtons = ({ name, href }: WelcomeButtons) => {
    return (
        <>
            <Link href={href} className='relative items-center text-center'>
                <button className="text-white p-1 md:text-xl text-sm hover:underline border border-transparent transition-colors duration-200">{name}</button>
            </Link>
        </>
    )
}
