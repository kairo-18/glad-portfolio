import React from 'react'

const Projects = ({ title, description, stack, imgSrc, hasLink, link, ...props}) => {
  return (
    <div className='w-[400px] flex flex-col border-1 border-white text-white m-5 shadow-[5px_5px_rgba(199,120,221,0.8),_10px_10px_rgba(199,120,221,0.6),_15px_15px_rgba(199,120,221,0.4),_20px_20px_rgba(199,120,221,0.2),_25px_25px_rgba(199,120,221,0.1)] hover:transform hover:scale-105 transition-all duration-300'>
      <img src={imgSrc} alt={title} className='h-[300px]'/>
      <span className='p-3 border-b-1'>{stack}</span>
      <h1 className='p-3 font-bold text-2xl'>{title}</h1>
      <p className='p-3 text-l'>{description}</p>
      <div className='h-[50px] mt-3'>
      {hasLink && <a className="w-2/5 mx-3 my-1 p-2 border-1" href={link}>Learn more</a>}
      </div>
    </div>
  )
}

export default Projects