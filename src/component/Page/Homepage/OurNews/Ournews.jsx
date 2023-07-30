import Heading from "../../Heading/Heading";
import Newscard from "../../Newscard/Newscard";
import img1 from '../../../../assets/business-people-working-together.jpg'
import { FaArrowRight, FaCalendarAlt, FaCommentDots, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Ournews = () => {
    const [hover, setHover] = useState(false)
    const title = 'We Offer Banking For Everyone'
    const mainHeading = 'Our News & Insights';
    const subHeading = 'Blandit vel varius ultrices. Mattis accumsan egestas pulvinar'


    return (
        <div className="mt-5 mb-10">
            <div>
                <Heading title={title} mainHeading={mainHeading} subHeading={subHeading} ></Heading>
            </div>


            <div className="mt-10  flex justify-center flex-wrap lg:flex-nowrap px-4 items-center gap-10">
                <div className=" rounded-lg group lg:w-1/2">
                    <div className="relative">
                        <img className="h-full w-full rounded-lg" src={img1} alt="" />

                        <div className="absolute rounded-lg  bg-opacity-20 group-hover:bg-opacity-25   top-0 h-full w-full bg-black  flex justify-center items-center">
                            <FaSearch className="text-white opacity-0 group-hover:opacity-80" />
                        </div>
                    </div>
                    <div className="mt-4 p-2" >
                        <div className="flex items-center gap-5 text-white ">
                            <div className="flex gap-4 items-center hover:text-orange-400"> <FaCalendarAlt />  June 8, 2023  </div>
                            <div className="flex gap-4 items-center hover:text-orange-400"> <FaCommentDots />  0 comment  </div>
                        </div>
                        <div className="text-white font-[600] text-xl mt-5 hover:text-orange-400">
                            <p>Never Worry About What to Do About Banking Again With These Tips</p>
                        </div>
                    </div>
                </div>


                <div className="lg:w-1/2">
                    <div className=" flex flex-col gap-10">
                        <Newscard />
                        <Newscard />
                    </div>
                    <div className="text-left flex flex-col justify-center items-center gap-4 mt-5">

                        <button data-aos-duration="1000" data-aos='fade-up'
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className="relative bg-orange-500 text-white px-4 p-5 py-2 rounded-lg focus:outline-none overflow-hidden transition-all duration-300 z-50"
                        >
                            <span className="relative z-10 flex gap-2"><span>More News</span> <FaArrowRight /></span>
                            <div
                                className={`absolute left-0 top-0 h-full ${hover
                                    ? "w-full opacity-100 transition-all duration-500 ease-in-out bg-slate-700"
                                    : "w-0 opacity-0 transition-all duration-500 ease-in-out bg-transparent"
                                    }`}
                            ></div>
                        </button>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Ournews;