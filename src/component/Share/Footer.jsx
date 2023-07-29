
import { FaMoneyBillAlt, FaQuestionCircle, FaLifeRing, FaHandsHelping } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className=" text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Product and Service */}
                    <div className="footer-column mb-4">
                        <h4 className="font-semibold mb-2">Product and Service</h4>
                        <ul>
                            <li>Personal Banking</li>
                            <li>Business Banking</li>
                            <li>Loans</li>
                            <li>Credit Cards</li>
                            {/* Add more product and service items here */}
                        </ul>
                    </div>

                    {/* Why USB? */}
                    <div className="footer-column mb-4">
                        <h4 className="font-semibold mb-2">Why USB?</h4>
                        <ul>
                            <li>Security</li>
                            <li>Reliability</li>
                            <li>Customer Support</li>
                            {/* Add more reasons here */}
                        </ul>
                    </div>

                    {/* Get Advice */}
                    <div className="footer-column mb-4">
                        <h4 className="font-semibold mb-2">Get Advice</h4>
                        <ul>
                            <li>Financial Planning</li>
                            <li>Investment</li>
                            <li>Tax Planning</li>
                            {/* Add more advice topics here */}
                        </ul>
                    </div>

                    {/* Help and Service */}
                    <div className="footer-column mb-4">
                        <h4 className="font-semibold mb-2">Help and Service</h4>
                        <ul>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            {/* Add more help and service items here */}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="footer-column mb-4">
                        <h4 className="font-semibold mb-2">Connect</h4>
                        <ul className="flex items-center">
                            <li className="mr-4">
                                <a href="#">
                                    <FaMoneyBillAlt className="text-xl" />
                                </a>
                            </li>
                            <li className="mr-4">
                                <a href="#">
                                    <FaQuestionCircle className="text-xl" />
                                </a>
                            </li>
                            <li className="mr-4">
                                <a href="#">
                                    <FaLifeRing className="text-xl" />
                                </a>
                            </li>
                            <li className="mr-4">
                                <a href="#">
                                    <FaHandsHelping className="text-xl" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <RiContactsLine className="text-xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
