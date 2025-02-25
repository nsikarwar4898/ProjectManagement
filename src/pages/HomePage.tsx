import LandingPage from '../components/templates/LandingPage';
import Navbar from '../components/templates/Navbar';

const HomePage = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <LandingPage />
        </div>
    );
};

export default HomePage;
