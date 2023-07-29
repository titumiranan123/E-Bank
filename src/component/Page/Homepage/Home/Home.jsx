
import Header from "../Header/Header";
import LoanFinance from "../Loan&finance/LoanFinance";
import SecureMoneySection from "../SecureMoney/SecureMoneySection";
import Service from "../Service/Service";





const Home = () => {
    return (
        <div className="h-[5414px]">

            <div>
                <Header />
            </div>
            <div className="">
                <Service />
            </div>
            <LoanFinance />
            <SecureMoneySection />

        </div>
    );
};

export default Home;