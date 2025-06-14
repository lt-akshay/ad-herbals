import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LayoutDashboard, Package, Cat as Categories, Settings, LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-green-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r border-green-100">
        <div className="p-6 bg-green-700">
          <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
          <p className="text-green-100 text-sm mt-1">Verdant Cosmetics</p>
        </div>
        <nav className="mt-6">
          <Link
            to="/admin"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-r-2 hover:border-green-700 transition-all duration-200"
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Overview
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-r-2 hover:border-green-700 transition-all duration-200"
          >
            <Package className="w-5 h-5 mr-3" />
            Products
          </Link>
          <Link
            to="/admin/categories"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-r-2 hover:border-green-700 transition-all duration-200"
          >
            <Categories className="w-5 h-5 mr-3" />
            Categories
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-r-2 hover:border-green-700 transition-all duration-200"
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-6">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-md transition-all duration-200"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;