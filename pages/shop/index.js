import React , {useState, useEffect} from 'react'
import useFetchProducts from '../../hooks/fetchData';
import MyLayout from '../myLayout';
import Card from '@/components/card';
import {db, auth} from '../firebase';
import {increment, collection, addDoc, updateDoc, doc, getDocs, query, where} from 'firebase/firestore';

const Shop = () => {
  const { loading, error, products, setProducts } = useFetchProducts();
  console.log(products);

  
  return (
    <MyLayout pageName='shop'>
      <div className='bg-mainBackground min-h-screen'>
        <div className='flex items-center my-6'>
          <div className='w-64  rounded-full border border-gray-400 mx-10 p-2'><input type="text" placeholder='Search' className='px-2'/></div>
          <div className='rounded-full border border-gray-400 mx-10 p-2'>
            <select name="Filter" id="Filter">
              <option value="By Price">By Price</option>
              <option value="By Popularity">By Popularity</option>
              <option value="By Date">By Date</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
              {
                products == null ? `No Products` :
                  products.map((product) => (
                      <Card props={product} key={product._id}/>
                  ))
              }
          </div>
      </div>
    </MyLayout>
  )
}

export default Shop