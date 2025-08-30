import React, { useContext } from 'react'
import { ProductContext } from '../utils/Contextt';
import { Link } from 'react-router-dom';

function Nav() {
  const [data] = useContext( ProductContext);
  let distict_cat = data && data.reduce((acc,cv) => [...acc,cv.category],[]);
  distict_cat = [...new Set(distict_cat)];
  console.log(distict_cat)

  return (
     <nav className='w-[14%] h-screen bg-linear-65 from-pink-200 to-purple-400 flex flex-col  items-center pt-10 border'>
      <Link to="/" className='p-5 px-7 text-2xl text-black w-full bg-black text-pink-500 text-center  mb-10'  >Home </Link>
      <a className='p-5 px-7 text-2xl text-black border' href="/create">Add New Product </a>
      <hr className='mt-5 w-[95%] py-5'/>
      <h1 className='text-3xl font-semibold py-5  '>Categories</h1>

      <ul className='  w-full text-2xl py-4 flex flex-col items-center gap-3 '>
        {distict_cat.map((c,i)=>(
          
        <  Link to= {`/category/${c}`} className=' border text-black py-4 px-10 w-[50%] hover:bg-pink-500 hover:text-white' key={i} > {c}</Link>
        ))}

      </ul>
      <hr className='mt-5 w-[95%] py-5'/>
    </nav>
  )
}

export default Nav