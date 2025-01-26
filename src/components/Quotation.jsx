import React from 'react'

const Quotation = () => {
  return (
    <div className='mt-[5%] w-[60%] mx-auto overflow-clip'>
        <div className="border-1 border-white text-white mx-auto p-5 text-center text-[24px] relative shadow-2xl">
            <img src="./src/assets/quotation.png" className="absolute top-[-12px] " />
            <span>You miss 100% of the shots you don't take - Wayne Gretzky</span>
            <img src="./src/assets/quotation.png" className="absolute right-5 bottom-[-12px]" />
        </div>
        <div className="border-1 border-white text-white w-[100%] sm:w-[30%] ml-auto p-3 text-[24px] text-center relative">
            <span>- Michael Scott</span>
        </div>

        <div className="absolute top-[100%] right-[0px] border-1 border-white w-[150px] h-[100px] hidden"></div>
    </div>
  )
}

export default Quotation