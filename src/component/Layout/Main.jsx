import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Share/Footer";
import Navbar from "../Share/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Main = () => {
    const location = useLocation();
    const path = location.pathname;
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true
        });
    }, [])

    return (
        <div>
            {
                path !== '/login' && <Navbar />
            }
            <Outlet />
            {
                path !== '/singup' && <Footer />
            }

        </div>
    );
};

export default Main;