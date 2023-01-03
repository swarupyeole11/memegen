import React from 'react'
import trollface from './assets/trollface.png'
function Header() {
  return (
    <div className=" p-[20px] h-24  flex  bg-gradient-to-r from-purple-800 to-purple-500 text-white font-semibold  ">
      <div className='flex ml-6 mr-auto'> {/*note margin auto occupies the whole empty space available to it */}
        <img className='mr-4 h-[100%]'  src={trollface} alt="HaHaMeme" />
        <p className='text-2xl mr-auto mt-3 '>Meme Generator </p>
      </div>
      <p className=' text-lg text-center mt-[0.85rem] '>Creator In Chief : SwarupYeole11 </p>
      <div></div> {/* To ensure that the div does not get overshadowed for too small size */}
    </div>
  )
}

export default Header
