import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[400px] border-t-1 mt-[10%] text-white flex p-20 relative' id='contact'>
        <div className='sm:ml-[8%] ml-[3%]'>
            <h1 className='font-bold'>Glad <span className='text-[#ABB2BF] ml-5'>gladimirdungo@gmail.com</span></h1>
            <p className='sm:w-3/5 w-4/5 mt-5 lg:text-s'>
                Feel free to reach out if you'd like to collaborate on a project or just chat about web development!
            </p>
        </div>

        <div className='ml-[8%]'>
            <h1 className='font-bold'>Social</h1>
            <div className='sm:flex mt-5'>
                <a href='https://www.linkedin.com/in/gladimir-dungo-3a3b3a1b4/' className='mr-5'><img src='src/assets/LinkedIn.png'/></a>
                <a href='https://www.github.com/kairo-18' className='mr-5'><img src='src/assets/Github.png'/></a>
                <a href='https://www.facebook.com/chairoisglad/' className='mr-5'><img className="" src='src/assets/Email.png'/></a>
            </div>
        </div>

        <h1 className='absolute bottom-5 sm:right-[38%] mx-auto font-bold text-[#ABB2BF]'>© Copyright 2022. Made by Glad, Inspired by Elias.</h1>
    </div>
  )
}

export default Contact