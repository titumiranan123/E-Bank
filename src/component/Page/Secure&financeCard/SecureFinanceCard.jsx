import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import './style.css'

import loan from '../../../assets/loan.png'
import loanForfamily from '../../../assets/loanForfamily.jpg'

const LoanFinance_card = ({ title }) => {
    const [hover, setHover] = useState(false)


    return (
        <div >
            <div data-aos='fade-left' data-aos-duration="1000" className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <div
                        className="relative " >
                        <div className="i h-full w-full items-center  shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out" />
                        <img className="" src={loanForfamily} alt="" />
                        <img className="w-24 border bg-white absolute -bottom-12 left-[38%] h-24 mb-3 rounded-full shadow-lg" src={loan} alt="Bonnie image" />
                    </div>
                    <div className="mt-10 text-center">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iure corrupti quae.</span>
                    </div>

                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <button data-aos-duration="1000" data-aos='fade-up'
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className="relative bg-orange-500 text-white px-4 p-5 py-2 rounded-lg focus:outline-none overflow-hidden transition-all duration-300 z-50"
                        >
                            <span className="relative z-10 flex gap-2"><span>Read More</span> <FaArrowRight /></span>
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

export default LoanFinance_card;