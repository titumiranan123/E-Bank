import { FaCalendarAlt, FaCommentDots, FaSearch } from "react-icons/fa";
import moduleName from '../../../assets/mutal.jpg';
const Newscard = () => {
    return (
        <div className="group flex gap-10 border p-5 border-r-2 items-center rounded-lg lg:h-[180px] ">
            <div className="relative">
                <img className=" rounded-lg lg:h-[120px] h-full w-full" src={moduleName} alt="" />
                <div className="absolute  rounded-lg  bg-opacity-0 w-full lg:h-[120px]  h-full group-hover:bg-opacity-25 bg-black top-0 flex justify-center items-center">
                    <FaSearch className="text-white opacity-0 group-hover:opacity-80" />
                </div>

            </div>
            <div >
                <div className="flex items-center gap-5 text-white ">
                    <div className="flex gap-4 items-center hover:text-orange-400"> <FaCalendarAlt />  June 8, 2023  </div>
                    <div className="flex gap-4 items-center hover:text-orange-400"> <FaCommentDots />  0 comment  </div>
                </div>
                <div className="text-white font-[600] text-xl mt-5 hover:text-orange-400">
                    <p>Never Worry About What to Do About Banking Again With These Tips</p>
                </div>
            </div>

        </div>
    );
};

export default Newscard;