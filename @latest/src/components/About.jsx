
function About() {
  return (
    <>
      <div className="pt-20">
        <div className="flex bg-[#FBEDCA] h-[400px]">
          <img src="/p7.jpg" alt=""
            className="w-[590px] h-full object-cover flex-shrink-0" />
          <div className="flex flex-col justify-center  px-20">
            <p className="text-[38px] pb-6 font-[600]">About Grandma’s Bakery</p>
            <p className="pr-60 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-black text-white  text-[14px] px-4 py-1 rounded-sm w-fit hover:bg-gray-800 transition-all">
              Read More</button>
          </div>
        </div>
      </div>



    </>
  )
}
export default About