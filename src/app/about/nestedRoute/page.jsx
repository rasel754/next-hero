import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>this is nested route </h1>
            <ul>
                <li>nested route 1</li>
                <li>nested route 2</li>
                <li>nested route 3</li>
            </ul>
            <Link className='bg-slate-700 p-4 rounded-xl' href={'/about'}>got to about</Link>
        </div>
    );
};

export default page;