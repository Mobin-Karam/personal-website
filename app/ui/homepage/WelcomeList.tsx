import React from 'react'
import { WelcomeButtons } from './WelcomeButtons'

export const WelcomeList = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-3">
            <WelcomeButtons href='/' name='Home' />
            <WelcomeButtons name='AboutMe' href='/aboutme' />
            <WelcomeButtons name='Shop' href='/shop' />
            <WelcomeButtons name='Blog' href='/blog' />
            <WelcomeButtons href='/projects' name='Projects' />
            <WelcomeButtons name='Contact' href='/contactme' />
        </div>
    )
}
