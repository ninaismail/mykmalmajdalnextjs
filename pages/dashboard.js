import Dropdown from '../components/layout/Dropdown'
import { DropdownButton } from '../components/layout/DropdownLink'

import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

import { useAuth } from '../hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
const Dashboard = ({ user }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)
    return (
<>
<Head>
    <title>Your Profile</title>
</Head>

<div>
    <header>
        <nav>
            <Link href={"/"} className="logo">
                <Image src="/km-logo.png" width="121" height="61" alt="Food Options Logo" />
            </Link>

            {/* Settings Dropdown */}
            <div className="sm:ml-6">
                <Dropdown
                    align="right"
                    width="48"
                    trigger={
                        <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                            <div>{user?.name}</div>

                            <div className="ml-1">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </button>
                    }>
                    {/* Authentication */}
                    <DropdownButton onClick={logout}>
                        الخروج
                    </DropdownButton>
                </Dropdown>
            </div>
        </nav>
    </header>
    <div className="py-12">

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    أهلاًا بك بحسابك!
                </div>
            </div>
        </div>
    </div>
</div>
</>)
}

export default Dashboard