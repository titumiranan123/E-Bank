
import { FaArrowRight } from "react-icons/fa";

const SecureFinanceCard = ({ title, image }) => {


    return (
        <div className="flex justify-center mt-10 ">
            <div className="card w-96 bg-base-100 shadow-xl image-full group relative">
                <div>
                    <img className="rounded-lg shadow-lg" src={image} alt="Shoes" />

                </div>
                <div className="card-body bg-black bg-opacity-10 group-hover:bg-opacity-40 h-full  absolute text-white bottom-0  py-28 p-5 space-y-2">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className=" absolute w-1/2 ">
                        <div className="group-hover:opacity-0">
                            <FaArrowRight className="text-orange-500" />
                        </div>
                        <div className="text-orange-500 flex justify-center items-center gap-2 transition-all duration-700 ease-in-out absolute top-0 font-bold opacity-0 group-hover:opacity-100">
                            Read more <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>





        </div >

    );
};

export default SecureFinanceCard;