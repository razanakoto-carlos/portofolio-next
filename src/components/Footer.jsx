import React from 'react'
import { FaGitSquare, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
            <p className='my-5 text-gray-500'>33 Test <span>Test Blvd., 3303</span></p>
            <div className='inline-flex text-gray-500 gap-4 text-3xl'>
                <FaGitSquare />
                <FaInstagram />
                <FaGitSquare />
                <FaInstagram />
            </div>

        </div>
    )
}

export default Footer