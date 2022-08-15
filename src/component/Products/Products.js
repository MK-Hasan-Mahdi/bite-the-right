import React, { useContext, useEffect, useState } from 'react';
import { produtsDataContext } from '../../App';
import ProductCard from './ProductCard';

const Products = () => {
    const valueObj = useContext(produtsDataContext);
    const { products } = valueObj;
    // console.log(products);
    return (
        <div>
            <div className=' mid-container'>
                <div>
                    <h4>Our Products</h4>
                </div>
                <div className='grid lg:grid-cols-3 gap-4'>
                    <div className="grid gap-5 mt-3">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            ></ProductCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;