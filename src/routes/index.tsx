import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../styles/global';
import Header from '../layout/SideBar';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import { MainContainer } from '../styles/container';
export default function MyRoutes() {
    return (
        <Router>
            <GlobalStyle />
            <MainContainer>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MainContainer>
        </Router>
    );
}
