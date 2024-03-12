import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen flex-col bg-slate-950">
          <p className="logo1 !text-5xl mb-10 text-yellow-500">Learnify</p>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <AdminNavbar/>
          <Outlet />
        </>
      )}
    </>
  );
}

export default AdminLayout