import React from "react";
import {Link} from 'react-router-dom';
export default function Navbar(){
    return(
        <nav className="bg-white shadow-sm">
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Inventory Management System</h1>
                <div className="flex justify-center gap-8 text-gray-700 font-medium mb-10">
                    <Link to='/' className="hover:text-blue-600">Products</Link>
                    <Link to ='/dashboard' className="hover:text-blue-600">Dashboard</Link>
                    <Link to='/add-product' className="hover:text-blue-600">Add Product</Link>
                </div>
            </div>
        </nav>
    )
}