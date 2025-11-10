'use client'


import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import { useAuth } from '@/context/AuthContext';
import { Auth } from '@/lib/auth';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { NextRouter, useRouter } from 'next/router';
import React from 'react'

type ChildProps = {
    router: AppRouterInstance
}

const TopDashboard: React.FC<ChildProps> = ({ router }) => {
    const { logout } = useAuth()
    const handleLogout = () => {
        logout()
        Auth.logout();
        router.push("/login");
    };

    return (
        <>
            <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 xl:border-b">
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <div className="">
                    <ThemeSwitcher />
                    <button
                        onClick={handleLogout}
                        className="text-red-600 hover:underline"
                    >
                        Logout
                    </button>
                </div>
            </header>
        </>
    )
}

export default TopDashboard