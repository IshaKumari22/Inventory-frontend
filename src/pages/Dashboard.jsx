import { useEffect,useState } from "react";
import api from "../api/axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { LineChart, Line } from "recharts";
export default function Dashboard(){
  const [products,setProducts]=useState([]);
  const [stats,setStats]=useState([])

  useEffect(()=>{
    api.get("/stats/").then((res)=>setStats(res.data))
  },[]);

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await api.get("/products/");
      setProducts(res.data);
    };
    fetchData()
  },[]);

  const totalProducts=products.length;
  const lowStock=products.filter(p=>p.quantity<5).length;

  return(
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-700">Total Products</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            
          {totalProducts}
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-700">Low Stock</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {lowStock}
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold text-gray-600 ">Total Suppliers</h2>
            <p className="text-3xl text-green-600 font-bold mt-2">{stats.total_suppliers}
          
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold text-gray-600">Inventory Value</h2>
           <p className="text-3xl text-green-600 font-bold mt-2">{stats.inventory_value}</p>
        </div>
        

      </div>
<div className="mt-12 bg-white p-6 rounded-xl shadow-lg">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">
    Product Quantities
  </h2>

  <div className="h-72">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={products}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantity" fill="#2f27caff" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

     
<div className="mt-12 bg-white p-6 rounded-xl shadow-lg">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">
    Stock Trend
  </h2>

  <div className="h-72">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={products}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="quantity" stroke="#10B981" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

    </div>
    
  ) 
}