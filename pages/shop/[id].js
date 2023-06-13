import React, {useEffect, useState} from 'react'
import MyLayout from '../myLayout'
import { useRouter } from "next/router"
import {db,auth} from '../firebase';
import {collection, getDocs, query, where, doc, updateDoc, increment, addDoc} from 'firebase/firestore';

const IndProduct = () => {
    const router = useRouter();
    const id = router.query.id;
    const [product, setProduct] = useState(null);

    useEffect(() => {
         async function getData() {
            const q = query(collection(db,'products'), where("name", "==", id));
            const qs = await getDocs(q);
            console.log("Product is: ");
            console.log(qs.docs[0].data());
            setProduct(qs.docs[0].data());
        }
        getData()
    },[])

    function GetUserUid(){
        const [uid, setUid]=useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    setUid(user.uid);
                }
            })
        },[])
        return uid;
      }
    
      const uid = GetUserUid();
    
      let Product;
      const addToCart = async (product)=>{
          if(uid!==null){
              // console.log(product);
              const q = query(collection(db,'cart'), where("userID", "==", uid));
              const qs = await getDocs(q);
              console.log(qs);
              
              if(qs.docs.length){
                const docRef = doc(db, "cart", qs.docs[0].id);
                const colRef = collection(docRef,"cartProducts");
                let q2 = null, qs2=null;
                if(colRef) q2 = query(colRef, where("name","==",product.name));
                if(q2) {qs2 = await getDocs(q2); console.log(qs2);}
                if(!q2 || !qs2 || !qs2.docs.length){ 
                  Product=product;
                  Product['qty']=1;
                  Product['TotalProductPrice']=Product.qty*Product.price; 
                    addDoc(colRef,Product)
                  .then(() => {
                    console.log("Document successfully updated!");
                  })
                  .catch((error) => {
                    console.error("Error updating document: ", error);
                  });
                }
                else{
                  const prodRef = doc(docRef, "cartProducts", qs2.docs[0].id);
                  updateDoc(prodRef,{qty: increment(1), TotalProductPrice: increment(product.price)})
                  .then(() => {
                    console.log("Document successfully updated!");
                  })
                  .catch((error) => {
                    console.error("Error updating document: ", error);
                  });
                }
              }
          }
          else{
              props.history.push('/login');
          }
          
      }
  return (
    <MyLayout pageName="shop">
    <div>
        <div>
            {
                product ?
                <div className='flex items-center'>
                    <div className='w-64 mx-10'>
                        <img src = {product.photoURL} alt={product.name}/>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl'>{product.name}</h1>
                        <button className="bg-lightskyblue px-2 py-1 rounded-full" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div> :
                <div></div>
            }
        </div>
    </div>
    </MyLayout>
  )
}

export default IndProduct