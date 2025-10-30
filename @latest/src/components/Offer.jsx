
function Offer() {
    const OffersObj = [
        { img: "/p1.jpg", title:"Bread" }, { img: "/p2.jpg" , title : "Cookies" },
         { img: "/p3.jpg" , title : "Macron" }, { img: "/p4.jpg" , title : "Pretzel" },
        { img: "/p5.jpg" , title : "Cupcakes"}, { img: "/p6.jpg" , title : "Cakes" }
    ]
    return (
        <>
            <div className="flex relative  items-center text-center gap-12  flex-col">
                <div className="flex flex-col gap-5">
                    <p className=" pt-10 text-[27px] font-[600]">What we offer</p>
                    <p className=" w-[450px] ">Introducing you a wide variety of bakery items with unique taste and the creamiest of cakes in the city.</p>
                </div>
                <div className=" flex w-full justify-between px-56 pb-12">
                    {OffersObj.map((item, index) => (
                        <>
                            <div key={index}>
                                <img src={item.img} alt={item.img} className=" w-[115px] h-[145px] rounded-[60px]" />
                                <p className=" pt-4">{item.title}</p>
                            </div>
                        </>
                    ))}
                </div>

                <div className="absolute inset-0 w-full h-full">
                    <img src="/Croissant.png" alt=""
                        className="w-[65px] h-[65px] absolute top-2 left-[280px] rotate-[10deg] transition-transform duration-500 hover:scale-110"/>
                    <img src="/Bretzel.png"  alt=""
                        className="w-[55px] h-[55px] absolute top-[120px] right-[200px] rotate-[-5deg] transition-transform duration-500 hover:rotate-[10deg]" />
                    <img src="/Whip.png" alt=""
                        className="w-[55px] h-[55px] absolute bottom-[0px] left-[120px] rotate-[deg] transition-transform duration-500 hover:scale-125"/>
                    <img src="/Baguette.png" alt=""
                        className="w-[55px] h-[50px] absolute bottom-[10px] right-[150px] rotate-[5deg] transition-transform duration-500 hover:-rotate-[10deg]"/>
                    <img src="/Cupcake.png" alt=""
                        className="w-[55px] h-[55px] absolute top-[150px] left-[110px] rotate-[0deg] transition-transform duration-500 hover:translate-y-[-10px]"/>
                    <img src="/Toast.png" alt=""
                        className="w-[55px] h-[55px] absolute top-10 right-[330px] rotate-[10deg] transition-transform duration-500 hover:translate-x-[10px]"/>
                </div>


            </div>
        </>
    )
}
export default Offer