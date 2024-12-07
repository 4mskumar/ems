import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HeroData } from '../data/HeroData'

const Recomeded = () => {
    var settings = {
        dots: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,

    };
    return (
        <section className='max-container my-10'>
            <h1 className='font-bold font-outfit text-2xl'>Recomended for you</h1>
            <div>

                <Slider {...settings}>
                    {HeroData.map((d, i) => (
                        <div className="py-4 pr-4 cursor-pointer" key={i}>

                            <div className="bg-white overflow-hidden hover:bg-[#ececec] duration-200 transition ease-in-out p-2">
                                <div className="h-40 bg-cover border-[1px] border-[#b6b6b6]" style={{ backgroundImage: `url(${d.imgUrl})` }}>
                                    {/* <img src={d.imgUrl} /> */}
                                </div>
                                <div className="">

                                    <p className="text-md font-bold font-outfit mt-2">{d.course_name}</p>
                                    <p className="text-sm text-slate mt-1">{d.desc}</p>
                                    <div className="flex justify-between text-sm mt-1 text-heading font-medium">

                                        <span className="">{d.dur} </span><span className="hover:underline cursor-pointer"> {d.tutor}</span>
                                    </div>
                                    <p className="font-bold text-sm mt-1 ">({d.rate})</p>
                                    <p className="text-slate font-bold px-1 py-1/2 mt-8 bg-yellow-100 inline-block text-sm">Bestseller</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Recomeded
