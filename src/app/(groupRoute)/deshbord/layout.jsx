import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <div>
                <nav className='bg-green-600 p-7'>dashboard layout</nav>
                {
                    children
                }
                <footer>
                    <p className='bg-red-500 p-9'>Copyright &copy; 2022</p>
                </footer>
            </div>
        </div>
    );
};

export default layout;