import React, { useEffect, useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchproducts();
  }, []);
  return (
      <div className="productsWrapper">
{
    products.map((product,index)=>{

    })
}
</div>
  );
};

export default Products;
