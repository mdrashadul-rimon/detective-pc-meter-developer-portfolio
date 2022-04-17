import { Link } from "react-router-dom";
import "./Home.css";


const Header = () => {
    return (
        <section className="">
            <div className="home-container">
                <div className="header-title">
                    <h3 className="text-6xl">PRODOSH C. MITTER</h3>
                    <p className="text-4xl">Private Detective</p>
                    <br />
                    <p>21, Rajani Sen Road <br /> Calcutta - 700029 <br />Phone - 75-7518</p>
                    <Link to="/checkout">
                        <button>Get Appointment</button>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default Header;
