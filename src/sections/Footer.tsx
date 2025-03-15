import ArrowUpRighhtIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'Github',
    href: 'https://github.com/Lakshyadabral',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lakshya-dabral/',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/lakshya_dabral?igsh=czVrbnYyOTJ0a2Zm&utm_source=qr ',
  },
  {
    title: 'You Tube',
    href: 'https://www.youtube.com/@lakshyadabral5671',
  },
]


export const Footer = () => {
  return (
  <footer className='relative  overflow-x-clip'>
<div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>

    <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex md:flex-row  md:justify-between flex-col items-center gap-8 '>
          <div className='text-white/40'>&copy; 2025 All rights reserved</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map(link => (
            <a href ={link.href} key={link.title} target="_blank" className='inline-flex items-center gap1.5'>
              <span className='font-semibold'> {link.title}</span>
              <ArrowUpRighhtIcon className="size-5"/>
              </a>

            ))}
          </nav>
        </div>
    </div>
  </footer>
  )
};
