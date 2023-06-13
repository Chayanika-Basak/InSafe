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
      <div>
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