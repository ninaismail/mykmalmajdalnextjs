// pages/profile.js
import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
const Dashboard = () => {
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

    <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" 
    type="button">name<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            <li>
                <Link href="#" class="block py-2 px-4 hover:bg-gray-100">الخروح</Link>
            </li>
        </ul>
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