import React, { useState, useEffect, useRef } from 'react'
import { doc, getDocs, collection } from 'firebase/firestore'
// import { useAuth } from '../context/AuthContext'
import { db } from '../pages/firebase'

export default function useFetchProducts() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState(null)

    // const { currentUser } = useAuth()

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = collection(db, 'products')
                const docSnap = await getDocs(docRef)
                if (docSnap) {
                    let Data = [];
                    docSnap.forEach(doc => {
                        Data.push(doc.data());
                    })
                    setProducts(Data)
                    // setProducts('Products' in docSnap.data() ? docSnap.data().Products : {})
                } else {
                    setProducts([])
                }
            } catch (err) {
                setError('Failed to load products')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { loading, error, products, setProducts }
}