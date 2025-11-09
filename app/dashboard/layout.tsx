import React from 'react'
import SideBar from './sidebar/SideBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="w-full h-dvh flex flex-row items-start justify-start">
            <SideBar />
            <>{children}</>
        </section>
    )
}

export default Layout