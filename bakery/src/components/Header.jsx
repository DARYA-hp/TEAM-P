import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { useState, useEffect } from "react";

function Header() {

    const images = ["public/image5.png", "public/image6.png", "public/image7.png",];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);


    const getImage = (indexOffset) =>
        images[(currentIndex + indexOffset + images.length) % images.length];

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
            <div className=" pt-[50px] px-[400px] flex items-center justify-center">
                <p className="text-[72px] font-[700] font-tangerine text-center leading-[1]">
                    Enjoy fresh items of our Grandma’s Reciepe
                </p>
            </div>



            <div className="">
                <div className=" text-center pt-[35px]">
                    <button className=" bg-black px-8 py-3 text-white text-xl">See Menu</button>
                    <p className=" text-[#7E7E7E] py-5">* 10% off on first order</p>
                </div>
                <div>
                    <img src="public/13.png" alt="" className="rotate-15 absolute pt-[65px] " />
                </div>

                <div className="flex m-auto justify-center gap-10 items-start transition-all duration-700">
                    <img src={getImage(0)} alt=""
                        className="w-[310px] h-[340px]  scale-100 transition-all duration-700" />

                    <img src={getImage(1)} alt=""
                        className="translate-y-0 z-10 my-14 scale-110 w-[320px] h-[400px] transition-all duration-700" />

                    <img src={getImage(2)} alt=""
                        className="w-[310px] h-[340px]  scale-100 transition-all duration-700" />
                </div>
                <div className=" flex flex-col items-center justify-center gap-3 text-[17px] absolute right-14 top-[400px] ">
                    <div className=" h-[320px] w-[1px] bg-gray-400"></div>
                    <FaFacebookF />
                    <FaYoutube />
                    <FaInstagram />
                </div>

            </div>

        </>
    )
}
export default Header