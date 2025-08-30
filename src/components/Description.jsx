import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Contextt';
import axios from '../utils/axios';
import Load from './Load';
function Description() {

  const {id} = useParams();
const [products] = useContext( ProductContext);
 const navigate =useNavigate()
  const handle =()=>{
    navigate( -1);
  }
  const[single , setsingle] = useState({});
  const getsingledata = async()=>{
try{
const {data} = await axios.get(`/products/${id}`);
setsingle(data)
}
catch(error){
  console.log(error);
}
  }
  useEffect(()=>{
    getsingledata()
  },[]);
  
  return single ?(
    <div className='w-screen h-screen bg-linear-65 from-purple-300 to-pink-200 pt-1 '>
      <div className='container mx-auto bg-zinc-100 flex flex-col items-center justify-center py-15 mt-10 '> 
    <h1 className='text-6xl font-bold  mb-15 w-full px-10' >Product Details -</h1>
    <img  className='w-130 h-150' src={single.image} alt="" />
    <div className="content  w-full px-20 mt-5 h-90 mb-10 ">
      <h1 className='text-3xl mb-4 font-bold'>{single.title}</h1>
      <h1 className='text-3xl mb-4 font-semibold'> {single.price} :  $ 773.89</h1>
      <h1 className='text-2xl mb-4'>Description : {single.description}</h1>
      <h1 className='text-2xl mb-4'>Category : {single.category}</h1>

      
    </div>
    <button onClick={handle} className='px-10 py-6 text-3xl bg-linear-65 from-purple-300 to-pink-200 rounded-xl'>Back To home </button>
    
    </div>
    </div>
  ) :( <Load/>)
}

export default Description