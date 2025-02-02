import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import profilepic from '../assets/profilepic5.png'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return ( 
    <div>
      <div className='my-7 max-w-[1200px] h-auto mx-auto flex flex-col-reverse 
      sm:flex-row justify-center align-center'>
        <div className='flex-col my-auto mx-auto md:mx-0'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>
            Hi, I'm Carlos</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation
              sequence={[
                "Fronted Dev",
                1000,
                "Backend Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>
              With 5+ years experience
            </p>
          </div>
          <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillFacebook />
          </div>
          <div className='relative inline-flex group my-3'>
            <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-r from-[#44BCFF] via-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
            <a href="/" title="Download CV" role='button' className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>
              Download CV
            </a>
          </div>
        </div>

        <div className='my-auto'>
          <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profilepic} alt="Profilepic" />
        </div>
      </div>
    </div>
  )
}

export default Hero