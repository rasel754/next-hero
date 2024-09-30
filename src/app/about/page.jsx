import Link from 'next/link';
import React from 'react';

const aboutPage = () => {
    return (
        <div>
            <h1>this is about</h1>
            <ul>
                <li>about us</li>
                <li>our mission</li>
                <li>our vision</li>
                <li>our values</li>
                <li>our team</li>
            </ul>
            <div className='mt-6'>
                <Link className='bg-slate-700 p-4 rounded-xl ' href={'/about/nested'} >nested about </Link>
                <Link className='bg-slate-700 p-4 rounded-xl ml-4' href={'/about/nestedRoute'} >nested about 2</Link>
            </div>
        </div>
    );
};

export default aboutPage;