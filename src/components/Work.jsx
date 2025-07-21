import React from 'react'
import proj1 from '../assets/login.jpg'
import proj4 from '../assets/projet1.jpg'
import proj3 from '../assets/proj3.png'
import proj2 from '../assets/proj2.png'

function Work() {
    return (
        <div className='py-6 max-w-[1200px] mx-auto' id='projets'>
            <div className='mx-auto px-4 md:px-8'>
                <div className='mb-4 flex items-center justify-between gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl lg:text-3xl text-white'>
                            Mes <span>Projets</span>
                        </h2>
                        <p className='text-gray-500'>
                        Voici mes projets les plus récents
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
                    <a href="https://github.com/razanakoto-carlos/gestionProjet" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                        <img src={proj1} alt="Project1" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />
                    </a>
                    <a href="https://github.com/razanakoto-carlos/gestionProjet" className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                        <img src={proj4} alt="Project1" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 ' />
                    </a>
                    {/* <a href="/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                        <img src={proj3} alt="Project1" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />
                    </a>
                    <a href="/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                        <img src={proj2} alt="Project1" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Work