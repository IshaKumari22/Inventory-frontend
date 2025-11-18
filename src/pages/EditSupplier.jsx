import { useEffect, useState } from "react";
import api from '../api/axios';
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function EditProduct(){
    const {id}=useParams();
    const navigate=useNavigate()
    const [form,setForm]=useState({
        name:"",
        contact:"",
        email:"",
        address:""
    });

    useEffect(()=>{
        const fetchSupplier=async()=>{
          try{

            const res=await api.get(`/suppliers/${id}/`);
            setForm(res.data)
          }catch(error){
            console.error(error);
            alert("Failed to load supplier")
          }
        };
        fetchSupplier();
    },[id]);
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit=async(e)=>{
       e.preventDefault();
    
    try{
        await api.put(`/suppliers/${id}/`,form);
        alert("Product updated successfully!");
        navigate("/suppliers");
    }catch(error){
        console.error(error);
        alert("Update failed")
    }
  };
  return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md">

      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Edit Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Contact</label>
          <input
            type="number"
            name="contact"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Update Supplier
        </button>

      </form>

    </div>
  </div>
);

}