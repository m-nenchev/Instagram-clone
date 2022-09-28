import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import ErrorPage from "./pages/ErrorPage";
import Explore from "./pages/Explore";
import ModalWrapper from "./components/ModalWrapper/ModalWrapper";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getIsVisible } from "./store/modalSlice";

function App() {
    const isVisible = useSelector(getIsVisible);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflowY = "none";
        } else {
            document.body.style.overflowY = "scroll";
        }
    }, [isVisible]);

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            {isVisible && <ModalWrapper />}
        </div>
    );
}

export default App;
