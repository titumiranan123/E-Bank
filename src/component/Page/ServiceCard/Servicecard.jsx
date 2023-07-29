import { FaMobile } from "react-icons/fa";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Servicecard = ({ title }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (


        <div className="relative flex  flex-col justify-center overflow-hidden py-6 px-6 sm:py-6 ">
            <div
                className="group   relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#6e4be4] transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-[#6e4be4] transition-all duration-300 group-hover:bg-[#6e4be4]">
                        <FaMobile className="h-16 w-16 text-white group-hover:text-orange-400 transition-all" />
                    </span>
                    <div className="text-2xl font-bold group-hover:text-orange-400 text-black">
                        {title}
                    </div>
                    <div
                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>Velit officiis quis sit amet, aliqute consectetur adipiscing elit. Nyc priotic vulputate libero et velit odio.</p>
                    </div>
                    <div className="pt-5 text-base font-semibold leading-7">
                        <p>
                            <a href="#" className="text-sky-500 transition-all  duration-300 group-hover:text-orange-500">Read the docs
                                &rarr;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Servicecard;