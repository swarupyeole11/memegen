export default function Form() {
  return (
    <>
      <form className="grid grid-cols-2 gap-4 mt-9 mx-9 font-mono p-2 text-lg ">
        <input className="border-2 border-[#9a96a5] p-2 rounded-md indent-2" type="text" placeholder="SQl or NoSQL"  />
        <input className="border-2 border-[#9a96a5] p-2 rounded-md indent-4" type="text" placeholder="That is the question"/>
        <button className="border-2 rounded-lg p-3 col-span-2 font-sans bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white font-semibold text-xl ">Get a new meme image </button>
      </form>
    </>
  )
}