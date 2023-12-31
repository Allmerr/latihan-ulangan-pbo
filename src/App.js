import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import PNavbar from "./partials/PNavbar";
import PFooter from "./partials/PFooter";

function App() {
    return (
        <>
            <PNavbar></PNavbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <PFooter></PFooter>
        </>
    )
}

export default App;