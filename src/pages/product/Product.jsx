import React, { useEffect, useState } from 'react'
import styles from './product.module.css'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import axios from 'axios'
const Product = () => {
  const [product, setProduct] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const params = useParams()
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
     
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
       
        setError(error)
      }
    })()
  }, [])
  return (
    <div style={{ padding: '50px',marginTop:'80px' }} >
      <Link to="/react-store">
      <div className={styles.header}>
        <MdOutlineKeyboardArrowLeft/>
        <span>Back</span>
      </div>
      </Link>
      {loading ? <h4 className={styles.loading}>Loading...</h4> :
        <div className={styles.productContainer}>
          <div className={styles.left}>
            <img src={product.image} className={styles.image} />
          </div>
          <div className={styles.info}>
            <h2 style={{ marginBottom: '10px' }}>{product.title}</h2>

            <span className={styles.price}>₹ {product.price}</span>
            <div className={styles.starContainer}><FaStar className={styles.star} />
              <span style={{ fontSize: '18px' }}>{product.rating?.rate}</span> </div>
              <p style={{ fontWeight: '500',marginBottom:'5px' }}>Category: {product.category}</p>
            <p style={{ fontWeight: '300' }}>{product.description}</p>
          </div>

        </div>
      }
    </div>
  )
}

export default Product