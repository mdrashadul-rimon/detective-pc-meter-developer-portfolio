import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import logo from "./logo.png";

const Nav = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className='border-gray-200 px-2 sm:px-8 py-3 sticky top-0 w-full transition-all bg-white' >
            <div className=" flex justify-between items-center">
                <img src={logo} alt="" className='h-10'/>

                <div className="w-full md:block md:w-auto">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3  rounded  md:p-0 dark:"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="block py-2 px-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            {user ? (
                                <button onClick={() => signOut(auth)}>Logout</button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="block py-2 px-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
                                >
                                    Login
                                </Link>
                            )}
                        </li>
                        <li>{user?.email}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;