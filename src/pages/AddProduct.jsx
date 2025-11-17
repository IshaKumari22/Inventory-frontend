import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct(){
    const navigate=useNavigate()
    const [form,setForm]=useState({
        name:"",
        price:"",
        quantity:"",
        supplier_name:""

    });
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await api.post("/products/",form);
            alert("Product added successfully!");
            setForm({name:"",price:"",quantity:"",supplier_name:""});
            navigate("/");
        }catch(error){
            console.error(error);
            alert("Failed to add product.")
        }

    };
    return(
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                   type="text"
                   name="name"
                   placeholder="Product Name"
                   className="w-full border p-2 rounded"
                   value={form.name}
                   onChange={handleChange}
                   required
                 />
                 <input
                   type="number"
                   name="price"
                   placeholder="Price"
                   className="w-full border p-2 rounded"
                   value={form.price}
                   onChange={handleChange}
                   required
                 />
                 <input
                   type="number"
                   name="quantity"
                   placeholder="Quantity"
                   className="w-full border p-2 rounded"
                   value={form.quantity}
                   onChange={handleChange}
                   required
                 />
                 <input
                  type="text"
                  name="supplier_name"
                  placeholder="Supplier Name"
                  className="w-full border p-2 rounded"
                  value={form.supplier_name}
                  onChange={handleChange}
                  required
                 />
                 <button
                 type="submit"
                 className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                 >
                    Add Product
                </button>
            </form>
        </div>
    )
}