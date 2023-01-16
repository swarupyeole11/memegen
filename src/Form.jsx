import memedata from "../memedata"
import React, { useState } from "react";

// on click we have to get the url and display the image so we will save the new url in the state and as soon as the 

export default function Form() {
  

  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/2ybua0.png");

  function getMemeImage()
  {
    const memearr = memedata.data.memes;
    const x = Math.floor(Math.random() * memearr.length);
    setMemeImage(memearr[x].url);
  
  }

 


  return (
    <>
      {/* We do not use the form here becuase from is like a submit so when you use on click the value does not persist */}
      <div className="grid grid-cols-2 gap-4 mt-9 mx-9 font-mono p-2 text-lg ">
        <input className="border-2 border-[#9a96a5] p-2 rounded-md indent-2" type="text" placeholder="SQl or NoSQL"  />
        <input className="border-2 border-[#9a96a5] p-2 rounded-md indent-4" type="text" placeholder="That is the question"/>
        <button onClick={getMemeImage} className="border-2 rounded-lg p-3 col-span-2 font-sans bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white font-semibold text-xl ">Get a new meme image </button>
      </div>
      <div className="flex justify-center mt-4 ">
      <img src={memeImage} alt="there was an image" className="max-h-[600px]"/>
      </div>
      
    </>
  )
}