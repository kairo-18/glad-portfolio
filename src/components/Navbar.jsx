import React from 'react'
import { useState } from 'react'

const navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
return (
    <div className='w-full h-full flex text-white p-5 justify-between items-center'>
            <div className="logo font-bold ml-[10%] flex"><img src={'/assets/logo.png'} className='w-9 h-9 mt-[-7px]'/> Glad</div>
            <ul className="hidden list-style-none gap-12 mr-[10%] sm:flex">
                    <li className='hover:transform hover:translate-0.5' ><a href="#home"><span className='text-[#C778DD] font-semibold'>/</span>home</a></li>
                    <li><a href="#about"><span className='text-[#C778DD] font-semibold'>/</span>about</a></li>
                    <li><a href="#projects"><span className='text-[#C778DD] font-semibold'>/</span>projects</a></li>
                    <li><a href="#contact"><span className='text-[#C778DD] font-semibold'>/</span>contact</a></li>
            </ul>
            {showMenu && (
                    <ul className='list-style-none gap-12 absolute top-[7%] right-[5%] border-1 border-gray-300 p-5'>
                        <li className=' hover:underline' ><a href="#home"><span className='text-[#C778DD] font-semibold'>/</span>home</a></li>
                        <li className=' hover:underline' ><a href="#about"><span className='text-[#C778DD] font-semibold'>/</span>about</a></li>
                        <li className=' hover:underline' ><a href="#projects"><span className='text-[#C778DD] font-semibold'>/</span>projects</a></li>
                        <li className=' hover:underline' ><a href="#contact"><span className='text-[#C778DD] font-semibold'>/</span>contact</a></li>
                    </ul>
            )}
            <div id="hamburger-menu" className='sm:hidden absolute right-[5%]'>
                <img src={"/assets/bars-menu.png"} className='w-6 transform active:scale-120' onClick={() => setShowMenu(!showMenu)}/>
            </div>

            <div className="absolute top-0 left-[4%]">
                <div className='ml-[15px] w-[1px] h-[200px] bg-gray-300'></div>
                <div className="mt-3">
                    <img src={'/assets/Github.png'} className=''/>
                    <img src={'/assets/Email.png'} className=''/>
                    <img src={'/assets/Linkedin.png'} className=''/>
                </div>
            </div>
    </div>
)
}

export default navbar