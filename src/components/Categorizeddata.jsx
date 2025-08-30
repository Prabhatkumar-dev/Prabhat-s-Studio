import React, { useContext } from 'react'
import { ProductContext } from '../utils/Contextt';
import Nav from './Nav'
import Load from './Load'
import { Link, useParams } from 'react-router-dom';

const Categorizeddata = () => {
    const [data] = useContext( ProductContext);
   const {cat }= useParams();
  
  return  data ? (
    
  <div className='h-screen w-screen flex'>
     <Nav/>
    <div className="homepage w-[86%] h-full  bg-linear-65 from-purple-300 to-pink-200 overflow-x-hidden overflow-y-auto  ">
     <div className=" h-[8%] w-full flex items-center flex-col  justify-center">
     <h1 className='text-5xl font-bold'><i>PRABHAT's  STUDIOS</i></h1>
   </div>
    <hr className='mt-5 w-[100%] py-5'/>
    <div className="products flex flex-wrap gap-20 pl-50  ">
      {data
  .filter(product => product.category === cat).map((p,i)=>
         (
       <div className="card  flex flex-col items-center pt-2 h-150 w-120  bg-zinc-100 rounded-xl shadow hover:shadow-xl/30  ">

      <img  className='w-100 h-100' src={p.image} alt="" />
       <h1  className='mt-4 text-2xl font-bold' >{p.title}</h1>
       <h1 className='text-2xl font-semibold' >$ {p.price} </h1>
       <Link to= {`/description/${p.id}`} className=' mt-4 px-7 py-3 bg-linear-65 from-purple-300 to-pink-200 rounded-xl text-2xl '>Click To View More</Link>

         </div>
        ))}
      
    
      
     </div>
     </div>
    
  </div>
                
  ):(  <Load/>)
}

export default Categorizeddata