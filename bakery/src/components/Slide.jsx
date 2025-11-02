import { useState } from "react"
import { CgChevronLeft, CgChevronRight } from "react-icons/cg"


function Slide() {
    const slider = [
        { id: 1, name: 'Aisha Pun,', role: 'Student', img: 'public/image1.png', text: 'This place is great. They have so many baked goods it will blow your mind. They have everything from large cakes to cupcakes to donuts to pastries to breads to  cookies. The price is also fair.' },
        { id: 1, name: 'John Doe,', role: 'Customer', img: 'public/kk.jpg', text: 'Amazing taste and fresh products.The staff is also very friendly. Highly recommend this bakery!' },
        { id: 1, name: 'Misha Rishi,', role: 'Student', img: 'public/korea.jpg', text: 'This place is great. They have so many baked goods it will blow your mind. They have everything from large cakes to cupcakes ' },
    ]

    const [current, setCurrent] = useState(0)
    const { name, role, img, text } = slider[current]

    const prevSlide = () => {
        setCurrent(prev => (prev - 1 + slider.length) % slider.length)
    }

    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % slider.length)
    }

    return (
        <div className="  flex flex-col gap-20 py-24">
            <div>
                <h2 className="  text-center text-[35px] font-bold">Reviews from Customers</h2>
                <img src="/Line 4.png" alt="" className=" pl-[470px]" />
            </div>
            <div className=" flex flex-row items-center justify-between px-44 ">
                <CgChevronLeft onClick={prevSlide} className=" text-[#faebc5] text-7xl"/>
                <div className=" flex flex-row items-center">
                    <img src={img} alt={name} className=" rounded-full h-[180px] w-[180px]" />
                    <div className=" pl-14">
                        <p className=" leading-[2] w-[470px]">{text}</p>
                        <b>{name}</b><span>{role}</span>
                    </div>
                </div>
                <CgChevronRight onClick={nextSlide} className="text-[#faebc5] text-7xl"/>
            </div>


        </div>
    )
}
export default Slide