'use client'
import React from 'react'
import { Welcome } from './Welcome'
import { useAuth } from '../../context/AuthContext'

const AuthContent = ({ children }: { children: React.ReactNode }) => {
    const { isLoggedIn, logout } = useAuth()

    return (
        isLoggedIn ?

            (children)
            :
            <>
                <Welcome />
                {children}
            </>

    )
}

export default AuthContent