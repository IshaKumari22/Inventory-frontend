import { useEffect,useState,UseState } from "react";
import api from "../api/axios";

export default function Suppliers(){
    const [suppliers,setSuppliers]=useState([]);
    useEffect(()=>{
        api.get("/suppliers/")
        .then(res=>setSuppliers(res.data));
    },[]);
    return (
       <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Suppliers</h1>
        <a href="/add-supplier" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Supplier</a>
        <div className="mt-6 bg-white rounded-lg shadow p-4">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b">
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Contact</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Address</th>
                        <th className="p-3 text-left">Action</th>


                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(s=>(
                        <tr key={s.id} className="border-b">
                           <td className="p-3 text-left">{s.name}</td>
                            <td className="p-3 text-left">{s.contact}</td>
                           <td className="p-3 text-left">{s.email}</td>
                           <td className="p-3 text-left">{s.address}</td>
                            <td className="py-4 px-3 flex items-center gap-4">
                            <button>
                            <a href={`/edit-supplier/${s.id}`} className="bg-green-600 text-white px-2 py-2 rounded hover:bg-green-600 transition">Edit</a>
                            </button>
                             <button className="bg-red-600 text-white px-2 py-2 rounded hover:bg-red-600 transition"
                    onClick={async () => {
                      await api.delete(`/suppliers/${s.id}/`);
                      setSuppliers(suppliers.filter(x => x.id !== s.id));
                    }}>
                    Delete
                  </button>
                           </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
       </div>
    )
}