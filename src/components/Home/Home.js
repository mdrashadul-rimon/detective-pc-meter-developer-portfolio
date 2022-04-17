import Achievements from "../Achievements/Achievements";
import Services from "../Services/Services";
import Header from "./Header";




const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Achievements />
        </div>
    );
};

export default Home;