import React from "react";
import {Link} from 'react-router-dom';
export default function Navbar(){
    return(
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="font-semibold text-lg">Inventory</div>
                <div className="space-x-4">
                    <Link to='/' className="hover:underline">Products</Link>
                    <Link to ='/dashboard' className="hover:underline">Dashboard</Link>
                </div>
            </div>
        </nav>
    )
}