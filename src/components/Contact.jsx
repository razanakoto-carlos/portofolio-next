import React from 'react'

function Contact() {
    return (
        <div className='flex justify-center my-5 h-full sm:h-[70vh] items-center'>
            <div className='max-w-[1200px] mx-auto'>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around'>
                            <h1 className='text-4xl sm:text-5xl text-white'>
                                Contact <span>Me</span>
                            </h1>
                            <p className='text-normal text-lg font-medium text-gray-200 mt-2'>
                                Let's connect on Linkedin <br /> Send me an email
                            </p>
                            <div className='flex items-center mt-2 text-gray-400'>
                                <svg fill='none' stroke="currentColor" strokeLinejoin='round' strokeLinecap='round'>
                                    <path strokeLinejoin='round' strokeLinecap='round' strokeWidth={1.5} />
                                </svg>
                                <div className='ml-4 text-md tracking-wide w-40'>
                                    <p>Razanakoto Carlos</p>
                                </div>
                            </div>
                        </div>
                        <form action="" className='p-6 flex flex-col justify-center max-w-[700px]' method='post'>
                            <div className='flex flex-col'>
                                <input type="text" name='name' id='name' placeholder='Full Name' className='w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                            </div>
                            <div className='flex flex-col mt-2'>
                                <input type="email" name='email' id='email' placeholder='Email' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                            </div>
                            <div className='flex flex-col mt-2'>
                                <textarea name="message" id="message" cols="30" rows="5" className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' placeholder='Your Message'></textarea>
                            </div>
                            <button type='submit' className='md:w-100 bg-primary-color text-white py-3 px-6 rounded-lg mt-3'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact