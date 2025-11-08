'use client'

import React, { useState } from 'react'
import { WelcomeButtons } from './WelcomeButtons'
import { WelcomeList } from './WelcomeList'

export const Welcome = () => {
    const [show, setShow] = useState<React.ReactNode>()
    return (
        <>
            <div className='w-full p-6 flex flex-col items-center justify-center gap-2 bg-transparent'>
                <div className="flex flex-col items-center justify-center text-white">
                    <h1 className="text-3xl">السّلامٌ عَلَيكُمْ</h1>
                    <h2 className="text-xl pt-1">ورحمةُ اللهِ وبَرَكاتُهُ</h2>
                </div>
                <WelcomeList />
            </div>
        </>
    )
}
