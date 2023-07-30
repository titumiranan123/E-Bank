
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaArrowRight } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { Authcontext } from "../../../Provider/Provider";
const Header = () => {
    const [hover, setHover] = useState(false);
    const { user } = useContext(Authcontext)
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true
        });
        const carouselElement = document.querySelector('.carousel-container');
        carouselElement.addEventListener('onSlideStart', () => {
            AOS.refresh();
        });

        // Clean up the event listener on component unmount
        return () => {
            carouselElement.removeEventListener('onSlideStart', () => {
                AOS.refresh();
            });
        };
    }, [])
    return (
        <div className="z-0">
            <Carousel
                className="carousel-container"
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={5000} // Set the interval based on your preference
                onClickItem={() => { }}
            >
                <div   >
                    <div className=" h-full w-full items-center  shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out bg-black bg-opacity-30" />
                    <img src="https://img.freepik.com/premium-photo/business-people-modern-office_52137-27681.jpg?w=740" />
                    <div className="absolute bottom-5 md:top-[10%]  lg:top-[20%] left-16">
                        <div data-aos-duration="1000" data-aos="fade-down" className="flex  items-center text-sm lg:text-lg gap-4 ">
                            <span className="border-2 border-orange-400 w-[30px]"></span>
                            <span className="text-white">simple & secure Payment Banking</span>
                        </div>
                        <div
                            data-aos-duration="1000" data-aos="fade-down"
                            data-aos-anchor-placement="bottom-bottom"
                            className="text-left ">
                            <h2 className="text-white lg:text-[60px] md:text-[60px] ">Innovative Banking  Compact <br /> Solutions For Fututre</h2>
                        </div>
                        <div data-aos-duration="1000" data-aos-delay="100" data-aos='fade-left' className="text-left">
                            <p className="text-white md:text-[20px] text-sm lg:text-lg">Morbi tristique sentcuts sit amet consectetur adipiscing elit .Nunc <br /> Vulputate libero velit officiis quis saepe recusandae </p>
                        </div>
                        <div className="text-left flex gap-4 mt-5">

                            <button data-aos-duration="1000" data-aos='fade-up'
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                className="relative bg-orange-500 text-white px-4 p-5 py-2 rounded-lg focus:outline-none overflow-hidden transition-all duration-300 z-50"
                            >
                                <span className="relative z-10 flex gap-2"><span>Make An Appointment</span> <FaArrowRight /></span>
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
                <div  >
                    <div className=" h-full w-full items-center  shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out bg-black bg-opacity-30" />
                    <img src="https://img.freepik.com/premium-photo/business-people-modern-office_52137-27681.jpg?w=740" />
                    <div className="absolute bottom-5 md:top-[10%]  lg:top-[20%] left-16">
                        <div data-aos-duration="1000" data-aos="fade-down" className="flex  items-center text-sm lg:text-lg gap-4 ">
                            <span className="border-2 border-orange-400 w-[30px]"></span>
                            <span className="text-white">simple & secure Payment Banking</span>
                        </div>
                        <div
                            data-aos-duration="1000" data-aos="fade-down"
                            data-aos-anchor-placement="bottom-bottom"
                            className="text-left ">
                            <h2 className="text-white lg:text-[60px] md:text-[60px] ">Innovative Banking  Compact <br /> Solutions For Fututre</h2>
                        </div>
                        <div data-aos-duration="1000" data-aos-delay="100" data-aos='fade-left' className="text-left">
                            <p className="text-white md:text-[20px] text-sm lg:text-lg">Morbi tristique sentcuts sit amet consectetur adipiscing elit .Nunc <br /> Vulputate libero velit officiis quis saepe recusandae </p>
                        </div>
                        <div className="text-left flex gap-4 mt-5">

                            <button data-aos-duration="1000" data-aos='fade-up'
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                className="relative bg-orange-500 text-white px-4 p-5 py-2 rounded-lg focus:outline-none overflow-hidden transition-all duration-300 z-50"
                            >
                                <span className="relative z-10 flex gap-2"><span>Make An Appointment</span> <FaArrowRight /></span>
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
                <div >
                    <div className=" h-full w-full items-center  shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out bg-black bg-opacity-30" />
                    <img src="https://img.freepik.com/premium-photo/business-people-modern-office_52137-27681.jpg?w=740" />

                    <div className="absolute bottom-5 md:top-[10%]  lg:top-[20%] left-16">
                        <div data-aos-duration="1000" data-aos="fade-down" className="flex  items-center text-sm lg:text-lg gap-4 ">
                            <span className="border-2 border-orange-400 w-[30px]"></span>
                            <span className="text-white">simple & secure Payment Banking</span>
                        </div>
                        <div
                            data-aos-duration="1000" data-aos="fade-down"
                            data-aos-anchor-placement="bottom-bottom"
                            className="text-left ">
                            <h2 className="text-white lg:text-[60px] md:text-[60px] ">Innovative Banking  Compact <br /> Solutions For Fututre</h2>
                        </div>
                        <div data-aos-duration="1000" data-aos-delay="100" data-aos='fade-left' className="text-left">
                            <p className="text-white md:text-[20px] text-sm lg:text-lg">Morbi tristique sentcuts sit amet consectetur adipiscing elit .Nunc <br /> Vulputate libero velit officiis quis saepe recusandae </p>
                        </div>
                        <Link to={`${!user && '/login'}`} className="text-left flex gap-4 mt-5">

                            <button data-aos-duration="1000" data-aos='fade-up'
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                className="relative bg-orange-500 text-white px-4 p-5 py-2 rounded-lg focus:outline-none overflow-hidden transition-all duration-300 z-50"
                            >
                                <span className="relative z-10 flex gap-2"><span>Make An Appointment</span> <FaArrowRight /></span>
                                <div
                                    className={`absolute left-0 top-0 h-full ${hover
                                        ? "w-full opacity-100 transition-all duration-500 ease-in-out bg-slate-700"
                                        : "w-0 opacity-0 transition-all duration-500 ease-in-out bg-transparent"
                                        }`}
                                ></div>
                            </button>

                        </Link >
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default Header;