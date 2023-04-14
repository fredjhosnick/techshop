import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import '../Shop/Shop.css'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>The Sultan Market</h1>
        </div>
        <div className='products'>{PRODUCTS.map((product)=>(
            <Product data={product}/>
        ))}
        </div>
    </div>
  )
}

export default Shop