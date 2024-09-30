"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Heading = () => {
    const pathName = usePathname();
    const router = useRouter();
const links = [
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Contact",
        path:"/contacts"
    },
    {
        title:"Services",
        path:"/services"
    },
    {
        title:"Blogs",
        path:"/blogs"
    },{
        title:"Categories",
        path:"/catagoris"
    },{
        title:"Dashboard",
        path:"/deshbord"
    }


]
const handleLogin = () => {
    router.push('/services')

};

if(pathName.includes('deshbord') )
    return <div className='bg-orange-600 p-5 '>
        this other dashboard 
    </div>
    return (
        <div>
            <nav className='bg-red-600 px-8 py-6 flex justify-between items-center'>
                <h1>Next Mission</h1>
                <ul className='flex justify-between items-center space-x-4'>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">service</a></li> */}
                    {
                        links.map(link => <Link className={`${pathName === link.path && "text-cyan-600 "}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                   
                </ul>
                <button onClick={handleLogin} className='bg-white text-cyan-600 p-3 rounded-lg'>Login</button>
            </nav>
        </div>
    );
};

export default Heading;