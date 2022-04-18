import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {

    const handleToast = () => {
        toast("Thanks for Booking");
    }

    return (
        <div className="md:container bg-gray-600">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row mb-8 shadow-lg">
                    <div className="panel-left w-full md:w-2/3 bg-white rounded-l">
                        <form>
                            <h1 className="text-3xl p-10 border-b border-solid border-grey-light">Checkout</h1>
                            <div className="p-10 pt-8 border-b border-solid border-gray-200">
                                <div className="flex items-center mb-4">
                                    <div className="border-2 border-solid border-blue-200 py-2 px-3 rounded-full font-bold mr-2 text-blue-600">1</div>
                                    <h2 className="text-lg">Your Basic Information</h2>
                                </div>

                                <div className="flex flex-wrap">
                                    <div className="w-3/4 md:w-1/2-almost mb-4 md:mb-0">
                                        <label for="first_name" className="block text-sm mb-2">First Name</label>
                                        <input id="first_name" type="text" className="w-full text-sm bg-gray-100 rounded px-3 py-3 outline-0" />
                                    </div>
                                    <div className="w-3/4 md:w-1/2-almost mb-4 md:mb-0">
                                        <label for="last_name" className="block text-sm mb-2">Last Name</label>
                                        <input id="last_name" type="text" className="w-full text-sm bg-gray-100 rounded px-3 py-3 outline-0" />
                                    </div>
                                    <div className="w-3/4 md:w-1/2-almost mb-4 md:mb-0">
                                        <label for="email" className="block text-sm mb-2">E-mail</label>
                                        <input id="email" type="text" className="w-full text-sm bg-gray-100 rounded px-3 py-3 outline-0" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 pt-8 border-b border-solid border-gray-200">
                                <div className="flex items-center mb-4">
                                    <div className="border-2 border-solid border-blue-200 py-2 px-3 rounded-full font-bold mr-2 text-blue-600">2</div>
                                    <h2 className="text-lg">Your Payment Information</h2>
                                </div>
                                <div className="w-full">
                                    <label for="payment" className="block text-sm mb-2">Credit Card</label>
                                    <input id="payment" type="text" className="w-full text-sm bg-gray-100 rounded px-3 py-3 outline-0" />

                                </div>
                            </div>

                            <div className="p-10 pt-8">
                                <div className="flex items-center justify-center mb-8">
                                    <span className="font-bold">Need any help?</span>
                                    <span className="text-grey-darker">Don't hesitate to <a href="https://facebook.com/md.ra.rimon" className="text-gray-600 underline">contact support</a>!</span>
                                </div>
                            </div>
                        </form>
                        <div className='flex items-center justify-center'>
                            <button onClick={handleToast} className="bg-green-500 text-white rounded px-4 py-3 mb-6 text-lg hover:bg-green-700 transition">Confirm Checkout</button>
                            <ToastContainer />
                        </div>
                    </div>
                    <div className="panel-right w-full md:w-1/3 text-white rounded">
                        <div className="p-10">
                            <h2 className="font-bold text-xl mb-4">Subscription</h2>
                            <div className="mb-4">
                                <span className="text-5.5xl font-light lh-fix">9999 TK </span>
                                <span className="text-lg">/ year</span>
                            </div>
                            <div className="italic w-3/4 leading-normal mb-8">
                                Automatically renews after 1 year
                            </div>
                            <div className="list-items mb-8">
                                <div className="flex items-center mb-4">
                                    <div>Use on client sites</div>
                                </div>
                                <div className="flex items-center mb-4">
                                    <div>Private Investigation</div>
                                </div>
                                <div className="flex items-center mb-4">
                                    <div>Email Support</div>
                                </div>
                            </div>

                            <div className="border-b border-solid border-blue-light"></div>

                            <div className="testimonial pt-10 text-lg italic leading-normal mb-4">
                                Deal will be fantastic. Hope you also hire me next time.
                            </div>

                            <div className="flex items-center">
                                <img src="https://mdrashadul-rimon.github.io/service-images/RashadulPhoto300x300.jpg" alt="avatar" className="rounded-full h-10 mr-2" />
                                <div className="text-lg font-bold">Rashadul Alam Rimon</div>
                            </div>
                            <div className='mt-20'>
                                <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
