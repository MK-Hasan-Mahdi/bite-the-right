import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product);
    const { id, name, price } = product;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default ProductCard;