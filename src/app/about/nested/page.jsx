import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>this is nested one</h1>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                
            </ul>
            <Link className='bg-slate-700 p-4 rounded-xl' href={'/about'}>got to about</Link>
        </div>
    );
};

export default page;