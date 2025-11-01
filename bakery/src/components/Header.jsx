function Header() {
    return (
        <>
            <div className=" pt-6 flex flex-row justify-between px-48">
                <div className=" flex flex-col items-center ">
                    <img src="/icon-park-outline_bread.png" alt="" className=" w-[31px] h-[32px]" />
                    <p className=" text-[12px] w-[66px] text-center">Grandma’s Bakery</p>
                </div>
                <div>
                    <ul className=" flex gap-8 pt-3 text-[#7E7E7E]">
                        <li className=" cursor-pointer hover:text-black hover:font-[700] ">Home</li>
                        <li className=" cursor-pointer hover:text-black hover:font-[700] ">About</li>
                        <li className=" cursor-pointer hover:text-black hover:font-[700] ">Menu</li>
                        <li className=" cursor-pointer hover:text-black hover:font-[700] ">Contact</li>
                    </ul>
                </div>
            </div>
            <div className=" pt-16 px-[400px] flex items-center justify-center">
                <p className="text-[72px] font-[700] font-tangerine text-center leading-[1]">
                    Enjoy fresh items of our Grandma’s Reciepe
                </p>
            </div>


        </>
    )
}
export default Header