import { Parallax } from "react-parallax";
import Heading from "../../Heading/Heading";
import LoanFinance_card from "../../Loan_finanace_card/LoanFinance_card";


const LoanFinance = () => {
    const title = 'we offer for Everyone'
    const mainHeading = 'Loans & Finances'
    const subHeading = 'Blandit vel ultrices. Mattis Accumsan egestas pulvinar'
    return (
        <div className="mt-20 ">
            <Parallax
                className="p-10 "
                blur={{ min: -5, max: 10 }}
                bgImage="https://img.freepik.com/premium-photo/businessman-having-presentation-with-colleagues-about-project-he-working-office_232070-13904.jpg?w=826" bgImageAlt="the cat" strength={200}>

                <div>
                    <Heading title={title} mainHeading={mainHeading} subHeading={subHeading} />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">

                        <LoanFinance_card title={'Loan For Home'} />
                        <LoanFinance_card title={'Loan For Business'} />
                        <LoanFinance_card title={'Loan For Students'} />
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default LoanFinance;