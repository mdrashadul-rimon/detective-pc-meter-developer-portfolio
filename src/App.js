import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Signup from "./components/Auth/Signup/Signup";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";

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
                <Route path='/about' element={<About/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
