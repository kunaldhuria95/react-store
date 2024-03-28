import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                setError(false)
                const response = await axios.get('https://fakestoreapi.com/products')
                
                setProducts(response.data)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        })()
    }, [])


    const sortByTitle = () => {
        const sorted = [...products].sort((a, b) => a.title.localeCompare(b.title))
        console.log(sorted)
        setProducts(sorted)
    }

    const sortByPrice = () => {
        const sorted =[...products].sort((a,b)=>a.price - b.price)
        setProducts(sorted)
    }


    if (error) {
        return (
            <h4>
                Something went wrong
            </h4>
        )
    }

    return (
        <div style={{marginTop:'100px'}}>
            <div className={styles.heading}>
                <h1 style={{ marginBottom: '5px' }}>Products</h1>
                {!loading && <div className={styles.dropdown}>
                    <h4 className={styles.sort}>Sort By</h4>
                    <div className={styles.sortContent}>
                        <a onClick={sortByTitle}>Title</a>
                        <a onClick={sortByPrice}>Price</a>
                    </div>
                </div>}
            </div>

            {loading ? <h4 className={styles.loading}>Loading...</h4> :
                <div className={styles.productContainer}>
                    {Array.isArray(products) && products.map((product, index) => {
                        return (
                            <Link to={`/react-store/product/${product.id}`} key={product.id}>
                                <div className={styles.product} >
                                    <img src={product.image} className={styles.image} />
                                    <span style={{ fontWeight: '500' }}> ₹ {product.price}</span>
                                    <h5>{product.title}</h5>
                                    <p style={{ fontWeight: '300' }}>{product.category}</p>

                                </div>
                            </Link>
                        )
                    })}
                </div>
            }

        </div>
    )
}

export default Home