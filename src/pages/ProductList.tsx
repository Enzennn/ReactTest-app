import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';
import ProductTable from '../components/ProductTable';

const ProductList = () => {
  const { data, isLoading, isError } = useQuery(['products'], fetchProducts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching products.</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ProductTable data={data.products} />
    </div>
  );
};

export default ProductList;