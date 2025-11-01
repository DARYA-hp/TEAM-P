
function Offer() {
    const OffersObj = [
        { img: "/p1.jpg", title:"Bread" }, { img: "/p2.jpg" , title : "Cookies" },
         { img: "/p3.jpg" , title : "Macron" }, { img: "/p4.jpg" , title : "Pretzel" },
        { img: "/p5.jpg" , title : "Cupcakes"}, { img: "/p6.jpg" , title : "Cakes" }
    ]
    return (
        <>
            <div className="flex relative pt-20 items-center text-center gap-12  flex-col">
                <div className="flex flex-col gap-5">
                    <div>
                        <p className=" pt-10 text-[34px] font-[700]">What we offer</p>
                        <img src="/Line 4.png" alt="" className=" pl-28" />
                    </div>
                    <p className=" w-[450px] ">Introducing you a wide variety of bakery items with unique taste and the creamiest of cakes in the city.</p>
                </div>
                <div className=" flex w-full justify-between px-48 pb-12">
                    {OffersObj.map((item, index) => (
                        <>
                            <div key={index}>
                                <img src={item.img} alt={item.img} className=" w-[125px] h-[155px] rounded-[60px] object-cover " />
                                <p className=" pt-4">{item.title}</p>
                            </div>
                        </>
                    ))}
                </div>

                <div className="absolute inset-0 w-full h-full">
                    <img src="/Croissant.png" alt=""
                        className="w-[90px] h-[85px] absolute top-12 left-[250px] rotate-[10deg] transition-transform duration-500 hover:scale-110"/>
                    <img src="/Bretzel.png"  alt=""
                        className="w-[80px] h-[80px] absolute top-[180px] right-[160px] rotate-[-5deg] transition-transform duration-500 hover:rotate-[10deg]" />
                    <img src="/Whip.png" alt=""
                        className="w-[80] h-[80] absolute bottom-[10px] left-[90px] rotate-[deg] transition-transform duration-500 hover:scale-125"/>
                    <img src="/Baguette.png" alt=""
                        className="w-[80] h-[70px] absolute bottom-[10px] right-[100px] rotate-[5deg] transition-transform duration-500 hover:-rotate-[10deg]"/>
                    <img src="/Cupcake.png" alt=""
                        className="w-[80] h-[80] absolute top-[150px] left-[70px] rotate-[0deg] transition-transform duration-500 hover:translate-y-[-10px]"/>
                    <img src="/Toast.png" alt=""
                        className="w-[80] h-[80] absolute top-16 right-[310px] rotate-[10deg] transition-transform duration-500 hover:translate-x-[10px]"/>
                </div>


            </div>
        </>
    )
}
export default Offer