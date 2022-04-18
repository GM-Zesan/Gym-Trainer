import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import NoPage from "./Pages/NoPage/NoPage";
import Login from "./Pages/RegisterLogin/Login/Login";
import Register from "./Pages/RegisterLogin/Register/Register";
import RequireAuth from "./Pages/RegisterLogin/RequireAuth/RequireAuth";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/checkout/:checkoutId" element={<RequireAuth>
                    <Checkout></Checkout>
                </RequireAuth>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="*" element={<NoPage></NoPage>}></Route>
            </Routes>
        </div>
    );
}

export default App;
