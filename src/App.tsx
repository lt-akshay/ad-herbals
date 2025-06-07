import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Medicine from './pages/Medicine';
import ScrollToTop from './pages/ScrollToTop';
import Cosmetics from './pages/Cosmetics';
// import Dashboard from './pages/admin/Dashboard';
// import AdminProducts from './pages/admin/Products';
// import AdminCategories from './pages/admin/Categories';
// import Login from './pages/admin/Login';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* Admin routes */}
        {/* <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminProducts />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="categories" element={<AdminCategories />} />
        </Route>   */}

        {/* Public routes */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/about" element={<AboutUs />} />  
                  <Route path="/contact-us" element={<ContactUs />} />  
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />  
                  <Route path="/medicine" element={<Medicine />} />
                  <Route path="/cosmetics" element={<Cosmetics />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;