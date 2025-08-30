import React, { createContext, use, useEffect, useState } from 'react'
 export const ProductContext = createContext();
 import axios from './axios';
const Contextt = (props) => {
    const [products , setproducts] = useState();
   const getproduct = async()=>{
    try{
        const {data} = await axios("/products")
        // console.log(products)
        setproducts(data)
    }
    catch(error){
        console.log(error)
    }
   }
   useEffect(()=>{
    getproduct()
   } ,[])
  return (
   < ProductContext.Provider value ={[products , setproducts]}>
   {props.children}
   </ProductContext.Provider>
  )
}

export default Contextt