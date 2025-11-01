
function About() {
  return (
    <>
      <div className="pt-20">
        <div className="flex bg-[#FBEDCA] h-[400px]">
          <img src="/p7.jpg" alt="" className="w-[590px] h-full object-cover flex-shrink-0" />
          <div className="flex flex-col justify-center  px-24">
            <div className=" pb-6">
              <p className="text-[36px]  font-[700]">About Grandma’s Bakery</p>
              <img src="/Line 4.png" alt="" />
            </div>
            <p className="pr-[160px] text-[#3d3d3d] text-[18px] pb-4 leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              ut labore et dolore magna aliqua.
            </p>
            <button className="bg-black text-white  text-[18px] px-4 py-2 rounded-sm w-fit hover:bg-gray-800 transition-all">
              Read More</button>
          </div>
        </div>
      </div>



    </>
  )
}
export default About