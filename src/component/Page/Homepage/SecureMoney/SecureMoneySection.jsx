
import Heading from "../../Heading/Heading";
import SecureFinanceCard from "../../Secure&financeCard/SecureFinanceCard";
import img1 from '../../../../assets/trade.jpg'
import img2 from '../../../../assets/mutal.jpg'
import img3 from '../../../../assets/multicurency.jpg'

const SecureMoneySection = () => {
    const title = 'We Offer Banking For EveryOne'
    const subHeading = 'Blandit vel varius ultrices. Mattis accumsan egestas pulvinar'
    const mainHeading = ' Secure Your Money '
    return (

        <div >
            <div>
                <Heading title={title} mainHeading={mainHeading} subHeading={subHeading} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <SecureFinanceCard title={'Trades FX'} image={img1} />
                <SecureFinanceCard title={'Mutual Funds'} image={img2} />
                <SecureFinanceCard title={"Multi Currency AC's"} image={img3} />
            </div>

        </div>
    );
};

export default SecureMoneySection;