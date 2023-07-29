import Heading from "../../Heading/Heading";
import Servicecard from "../../ServiceCard/Servicecard";


const Service = () => {
    const title = 'We Offer Banking For Everyone'
    const mainHeading = 'World Class Banking Services'
    const subHeading = 'In quam eveniet non dolorem totam et minus sed aliquid tempore'
    return (
        <div>
            <div>
                <Heading title={title} mainHeading={mainHeading} subHeading={subHeading} />
            </div>
            <div className="mt-20 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-5 ">
                <Servicecard title={'Mobile Banking'} />
                <Servicecard title={'Return Strategies'} />
                <Servicecard title={'Saving Account'} />
            </div>

        </div>
    );
};

export default Service;