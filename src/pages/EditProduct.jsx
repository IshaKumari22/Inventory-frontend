import { useEffect, useState } from "react";
import api from '../api/axios';
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function EditProduct(){
    const {id}=useParams();
    const navigate=useNavigate()
    const [form,setForm]=useState({
        name:"",
        price:"",
        quantity:"",
        supplier_name:""
    });

    useEffect(()=>{
        const fetchProduct=async()=>{
            const res=await api.get(`/products/${id}`);
            setForm(res.data)
        }
        fetchProduct();
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
        await api.put(`/products/${id}/`,form);
        alert("Product updated successfully!");
        navigate("/");
    }catch(error){
        console.error(error);
        alert("Failed to update product")
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
          <label className="block text-gray-700 font-medium mb-1">Product Name</label>
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
          <label className="block text-gray-700 font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Supplier Name</label>
          <input
            type="text"
            name="supplier_name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.supplier_name}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Update Product
        </button>

      </form>

    </div>
  </div>
);

}