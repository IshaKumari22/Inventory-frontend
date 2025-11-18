import { useState } from "react";
import api from "../api/axios";

export default function AddSupplier(){

    const[name,setName]=useState("");
    const[contact,setContact]=useState("");
    const[email,setEmail]=useState("");
    const[address,setAddress]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await api.post("/suppliers/",{name,contact,email,address});
        window.location.href="/suppliers";
    };
    return(
        <div className="p-6">

            <h1 className="text-3xl font-bold text-center mb-6">Add Supplier</h1>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow">

             <input className="w-full p-2 mb-2 border rounded"
              placeholder="Name" value={name}
              onChange={(e)=>setName(e.target.value)}
             />
             <input className="w-full p-2 mb-2 border rounded"
             placeholder="Contact" value={contact}
             onChange={(e)=>setContact(e.target.value)}
             />
             <input className="w-full p-2 mb-2 border rounded"
             placeholder="Email" value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
             <input className="w-full p-2 mb-2 border rounded"
             placeholder="Address" value={address}
             onChange={(e)=>setAddress(e.target.value)}
             />
             <button className="bg-blue-600 text-white px-4 py-2">
                Save
             </button>
            </form>
        </div>
    )
}