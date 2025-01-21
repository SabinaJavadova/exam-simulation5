import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant";
import Grid from '@mui/material/Grid2';
import style from "./index.module.scss";
import { IoSearchCircleSharp } from "react-icons/io5";
const Products = () => {
  const [product, setProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getProduct = async () => {
    try {
      const res = await axios(`${BASE_URL}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const filteredProducts = product.filter((w) => {
   return w.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
  });
  
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className={style["container"]}>
      <div>  <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products"
        /> <IoSearchCircleSharp className={style["ikon"]}/></div>
        <Grid container spacing={2}>
          {product.length > 0 && filteredProducts.map((product) => (
            <Grid size={{ lg: 3, md: 6, xs: 12 }} key={product._id}>
              <div>
                {product.img && (
                  <img src={product.img} alt={product.name} />
                )}

                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Products;
