import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import Link from 'next/link';



export const HeroSection = () => {
  return (
    <div id='Hero' className='py-32 md:py-48 lg:py-40 lg:-mt-12 relative z-0 overflow-x-clip'>
<div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_5%,black_70%,transparent)]'>
<div className='absolute inset-0 -z-30 opacity-5' style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
      <div className='size-[920px] hero-ring'></div>
      <div className='size-[1120px] hero-ring'></div>
      <div className='size-[1320px] hero-ring'></div>
      <div className='size-[1520px] hero-ring'></div>

      <HeroOrbit size={530} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='6s'>
          <SparkleIcon className='size-8 text-emerald-300/20'/>
      </HeroOrbit>

      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-5 text-emerald-300/20'/>
      </HeroOrbit>

      <HeroOrbit size={730} rotation={160} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='6s'>
          <SparkleIcon className='size-10 text-emerald-300/20'/>
      </HeroOrbit>

      <HeroOrbit size={650} rotation={-10} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
          <StarIcon className='size-12 text-emerald-300'/>
      </HeroOrbit>

      <HeroOrbit size={790} rotation={98} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-8 text-emerald-300'/>
      </HeroOrbit>
      
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='3s' >
          <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={930} rotation={130} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='6s'>
          <SparkleIcon className='size-14 text-emerald-300/20'/>
      </HeroOrbit>
      
      <HeroOrbit size={770} rotation={88} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
      <div className='size-3 rounded-full bg-emerald-300/20'/> 
      </HeroOrbit>
      
      <HeroOrbit size={700} rotation={-40} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='6s'>
      <div className='size-2 rounded-full bg-emerald-300/20'/> 
      </HeroOrbit>
      
      <HeroOrbit size={850} rotation={-10} shouldOrbit orbitDuration='58s' shouldSpin spinDuration='3s'>
      <div className='size-2 rounded-full bg-emerald-300/20'/> 
      </HeroOrbit>
      </div>
      <div className="container">
        <div className='flex flex-col items-center'>
        <Image src={memojiImage}  className='size-[200px]' alt="Person Peeking from behind laptop" />
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-green-500 size-2.5
         rounded-full relative'>
          <div className='bg-green-500  absolute inset-0 rounded-full animate-ping-large'></div>
        </div>
        <div className='text-sm font-medium'>Open to Work</div>
        </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 teacking-wide'>Building Exceptional User Experiences</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in creating intuitive, user-focused digital experiences by blending front-end design with back-end efficiency.
          </p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>

          <a href="#Projects">
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl' style={{ position: 'relative', zIndex: 1000 }}>
              <span className='font-semibold'>Explore My Work</span> <ArrowDown className='size-4'/>
            </button>
            </a>

            <a href="#Contact">
            <button className='inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl'   style={{ position: 'relative', zIndex: 1000 }}
            >
              <span>👋</span>
              <span className='font-semibold'>Let’s Connect</span>
              </button>
              </a>
          </div>
        </div>
      </div>
  );
};