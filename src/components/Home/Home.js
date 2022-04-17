import Achievements from "../Achievements/Achievements";
import Services from "../Services/Services";
import Footer from "./Footer";
import Header from "./Header";




const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Achievements />
            <Footer />
        </div>
    );
};

export default Home;