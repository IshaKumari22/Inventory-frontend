import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
export default function ProductTable(){
    const[products,setProducts]=useState([]);
    const[search,setSearch]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        api.get('/products/')
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.error("Error fetching products:",err));
    },[]);
    const filteredProducts=products.filter(p=>
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    const handleDelete=async(id)=>{
        if(!confirm("Are you sure?")) return ;
        try{
            await api.delete(`/products/${id}/`);
            setProducts(products.filter((p)=>p.id !== id));
        }catch(error){
            console.error(error);
            alert("Failed to delete product");
        }
    }
    return(
<div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Products</h2>
            <input
                type="text"
                placeholder="Search products..."
                className="border p-1 rounded w-72 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <div className="bg-white shadow-xl rounded-xl p-6 w-full">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="p-3 font-bold text-700">Name</th>
                            <th className="p-3 font-bold text-700">Price</th>
                            <th className="p-3 font-bold text-700">Quantity</th>
                            <th className="p-3 font-bold text-700">Supplier</th>
                            <th className="p-3 font-bold text-700">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product)=>(
                            <tr key={product.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{product.name}</td>
                                <td className="p-3">{product.price}</td>
                                <td className="p-3">{product.quantity}</td>
                                <td className="p-3">{product.supplier_name}</td>
                                <td className="p-3 flex gap-3">
                                    <button
                                        onClick={()=>navigate(`/edit-product/${product.id}`)}
                                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2"
                                        >Edit
                                    </button>

                                </td>
                                <td className="p-3 flex gap-3">
                                    <button
                                          onClick={()=>handleDelete(product.id)}
                                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
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