import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="bg-white shadow-sm">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex justify-between h-16">
                 <div className="flex">
                   <div className="flex-shrink-0 flex items-center">
                     <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                   </div>
                   <nav className="ml-6 flex space-x-8">
                     <Link to="/Dashboard" className="border-indigo-500 text-indigo-600 hover:text-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Dashboard
                     </Link>
                     <Link to="/incident-report" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Incident Report
                     </Link>
                     <Link to="/scheduling" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Scheduling & Assessment
                     </Link>
                     <Link to="/gis-mapping" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       GIS Mapping
                     </Link>
                     <Link to="/patrol-logs" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Patrol Logs
                     </Link>
                     <Link to="/accounts" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Accounts
                     </Link>
                   </nav>
                 </div>
                 <div className="flex items-center">
                   <div className="flex-shrink-0">
                     <span className="relative inline-block">
                       <img
                         className="h-8 w-8 rounded-full"
                         src="/api/placeholder/150/150"
                         alt="User avatar"
                       />
                       <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white"></span>
                     </span>
                   </div>
                 </div>
               </div>
             </div>
           </header>
      <div className="homepage-wrapper">
        <div className="homepage-welcome">
          <h1>Welcome to BarangayWatch Admin Panel 🧑‍💼</h1>
          <p className="homepage-tagline">Manage user roles, accounts, and barangay access</p>
        </div>

        <div className="homepage-grid">
          <Link to="/accounts/residents" className="homepage-card">
            <h3>🏠 Resident Accounts</h3>
            <p>View and manage registered residents</p>
          </Link>

          <Link to="/accounts/barangay-officers" className="homepage-card">
            <h3>🧑 Barangay Officers</h3>
            <p>Manage officer accounts and privileges</p>
          </Link>

          <Link to="/accounts/admins" className="homepage-card">
            <h3>👮 Admin Accounts</h3>
            <p>Control admin-level users and access</p>
          </Link>

          <Link to="/accounts/create" className="homepage-card">
            <h3>➕ Create Account</h3>
            <p>Add new residents or officers to the system</p>
          </Link>

          <Link to="/accounts/logs" className="homepage-card">
            <h3>📜 Account Logs</h3>
            <p>View account activity and login logs</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
