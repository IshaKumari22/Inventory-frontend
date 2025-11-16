import { useEffect,useState } from "react";
import api from "../api/axios";
export default function ProductTable(){
    const[products,setProducts]=useState([]);
    const[search,setSearch]=useState("");

    useEffect(()=>{
        api.get('/products/')
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.error("Error fetching products:",err));
    },[]);
    const filteredProducts=products.filter(p=>
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Products</h2>
            <input
                type="text"
                placeholder="Search products..."
                className="border p-2 rounded w-full mb-4"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="p-3 font-medium">Name</th>
                            <th className="p-3 font-medium">Price</th>
                            <th className="p-3 font-medium">Quantity</th>
                            <th className="p-3 font-medium">Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product)=>(
                            <tr key={product.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{product.name}</td>
                                <td className="p-3">{product.price}</td>
                                <td className="p-3">{product.quantity}</td>
                                <td className="p-3">{product.supplier_name}</td>
                            </tr>    
                        ))}
                    </tbody>
                </table>
            </div>
          
        </div>
    )
}