import React from 'react';
import ProductsTable from "../components/ProductsTable";
export default function Products() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Products Page</h1>
      <p>Product list will appear here.</p>
      <ProductsTable/>
    </div>
  );
}
