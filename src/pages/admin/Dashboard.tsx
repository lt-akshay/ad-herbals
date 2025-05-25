import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LayoutDashboard, Package, Cat as Categories, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
        </div>
        <nav className="mt-6">
          <Link
            to="/admin"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Overview
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
          >
            <Package className="w-5 h-5 mr-3" />
            Products
          </Link>
          <Link
            to="/admin/categories"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
          >
            <Categories className="w-5 h-5 mr-3" />
            Categories
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;