
const Heading = ({ mainHeading, title, subHeading }) => {
    return (
        <div className="flex flex-col justify-center items-center mt-20">

            <div data-aos-duration="1000" data-aos="fade-down" className="flex  items-center gap-4 ">
                <span className="border-2 border-orange-400 w-[45px]"></span>
                <span className="text-white">{title}</span>
            </div>
            <div
                data-aos-duration="1000" data-aos="fade-down"
                data-aos-anchor-placement="bottom-bottom"
                className=" text-center">
                <h2 className="text-white text-4xl lg:text-[60px]">{mainHeading}</h2>
            </div>
            <div data-aos-duration="1000" data-aos-delay="100" data-aos='fade-left' className="text-left">
                <p className="text-white mt-8 lg:mt-3 text-center text-[20px]">{subHeading} </p>
            </div>



        </div>
    );
};

export default Heading;