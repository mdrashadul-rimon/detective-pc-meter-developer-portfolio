import React from 'react';

const About = () => {
    return (
        <div className="md:container sm:container md:mx-auto sm:mx-auto">
            <div className='flex items-center gap-4 my-5 mx-5'>
                <div className="w-50 shadow-xl rounded-lg">
                    <a href="https://www.linkedin.com/in/md-rashadulalam/" target="_blank"><img src="https://mdrashadul-rimon.github.io/service-images/RashadulPhoto300x300.jpg" alt="Rimons Photo" /></a>
                </div>
                <div className="info">
                    <h1 className='text-3xl font-extralight mb-5'>Personal Details</h1>
                    <p className='flex flex-col gap-2'>
                        <span className='text-7xl text-lime-600 font-bold'>Rashadul Alam</span> <br />
                        <span className='text-2xl'>Date of birth: 12.01.1997</span>
                        <span className='text-2xl'>Work: Web Developer</span>
                    </p>
                </div>
            </div>

            <div className="text-justify">
                <h1 className='text-3xl font-extralight my-5'>About Me</h1>
                <p className='font-light text-lg'>
                    I'm a front-end web developer currently learning from Programming Hero
                    course conduct by Jhankar Mahbub. With recent graduation, I am seeking an
                    entry-level position in a reputed organization where my strong technical,
                    analytical and problem- solving skills will be well utilized. I am organized and
                    dependable candidate successful at managing multiple priorities with a positive
                    attitude. Willingness to take on added responsibilities to meet team goals.
                </p>
                <h1 className='text-3xl font-extralight my-5'>Education</h1>
                <span className='text-2xl'>B. Sc in Computer Science Engineering</span>
                <p>Bangladesh Army University of Engineering and Technology, Qadirabad Cantonment</p>
            </div>
        </div>

    );
};

export default About;