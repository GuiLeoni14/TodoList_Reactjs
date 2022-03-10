import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../styles/global';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
export default function MyRoutes() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
