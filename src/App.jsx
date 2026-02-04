import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import SleevesLanding from './pages/SleevesLanding';
import SleeveDetail from './pages/SleeveDetail';
import CoatingsLanding from './pages/CoatingsLanding';
import CoatingDetail from './pages/CoatingDetail';
import ResinSandDetail from './pages/ResinSandDetail';
import AntiPipingDetail from './pages/AntiPipingDetail';
import SteelMeltingLanding from './pages/SteelMeltingLanding';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="app-layout">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />

                        {/* Specific Category Routes */}
                        <Route path="/products/sleeves" element={<SleevesLanding />} />
                        <Route path="/products/sleeves/:type" element={<SleeveDetail />} />

                        <Route path="/products/coatings" element={<CoatingsLanding />} />
                        <Route path="/products/coatings/:id" element={<CoatingDetail />} />

                        <Route path="/products/resin-coated-sand" element={<ResinSandDetail />} />
                        <Route path="/products/anti-piping-and-exothermic-compounds" element={<AntiPipingDetail />} />
                        <Route path="/products/steel-melting-products" element={<SteelMeltingLanding />} />

                        {/* Generic category page for other categories */}
                        <Route path="/products/:slug" element={<CategoryPage />} />
                        <Route path="/infrastructure" element={<Infrastructure />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
