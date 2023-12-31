
import Header from "../Header/Header";
import LoanFinance from "../Loan&finance/LoanFinance";
import Ournews from "../OurNews/Ournews";
import SecureMoneySection from "../SecureMoney/SecureMoneySection";
import Service from "../Service/Service";





const Home = () => {
    return (
        <div className="mx-auto">
            <Header />
            <Service />
            <LoanFinance />
            <SecureMoneySection />
            <Ournews />
        </div>
    );
};

export default Home;