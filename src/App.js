import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Signup from "./components/Auth/Signup/Signup";
import Blogs from "./components/Blogs/Blogs";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import ResetPass from "./components/Auth/ResetPass/ResetPass";

function App() {
    return (
        <div>

            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route
                    path='/checkout'
                    element={
                        <RequireAuth>
                            <Checkout />
                        </RequireAuth>
                    }
                />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/resetpass' element={<ResetPass />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
