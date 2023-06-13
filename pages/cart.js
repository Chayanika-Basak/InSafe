import React, {useState, useEffect} from 'react'
import MyLayout from './myLayout'
import { doc, getDocs, collection, query, where } from 'firebase/firestore'
import StripeCheckout from 'react-stripe-checkout';
import { db, auth } from './firebase'
import ItemCard from './itemCard'

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [uid, setUid]=useState("04BSM7lQSKhqrH8DAkzOlbZXau03");
  const [total, setTotal] = useState(0);
  let price=0;
  // function GetUserUid(){
    // const [uid, setUid]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                setUid(user.uid);
            }
        })
    },[])
  //   return uid;
  // }

  // const uid = GetUserUid();
useState(() => {
  setTotal(price);
},[])
  useEffect(() => {
    async function fetchCartData(uid) {
        try {
          console.log("User Id: ")
          console.log(uid);
            const q = query(collection(db,'cart'), where("userID", "==", uid));
            const qs = await getDocs(q);
            console.log(qs);
            if (qs.docs.length) {
              const docRef = doc(db, "cart", qs.docs[0].id);
              const colRef = collection(docRef,"cartProducts");
              const allDocs = await getDocs(colRef);
              let Data=[];
              allDocs.forEach((doc) => {
                  Data.push(doc.data());
              })
              setCart(Data);
              console.log("Cart Items: ");
              console.log(cart);
            } 
        } catch (err) {
            setError('Failed to load products')
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    fetchCartData(uid)
}, [])

const handleToken = (token) => {

}
  return (
    <MyLayout>
      <div>
      {
        error ? <h1>{error}</h1> : <div></div>
      }
      {
        loading ? <h1>Loading Cart Items...</h1> : <div></div>
      }
      {
        cart ? 
        cart.map((item) => {
          price += item.TotalProductPrice;
          return <ItemCard item={item}/>
        })
        : <h1>Empty Cart</h1>
      }
      <div className='mx-5 p-5 text-7xl'>Amount Payable: <b>₹ {price}</b></div>
      <div className='mx-5 p-5 text-7xl'>
        <StripeCheckout
          stripeKey='pk_test_51NIc8BSELLA9PilwiI2hD9VT57rgArjXEzoPCl4eRcvWuscoQS5EMveVlny0SkHatqEoNBpEDOnIlkGk9EBim0Ap00wjVPp6UC'
          token={handleToken}
          billingAddress
          shippingAddress
          name="All Products"
          amount={price*100}
          currency='INR'
        >
        </StripeCheckout>
      </div>
    </div>
    </MyLayout>
  )
}

export default Cart