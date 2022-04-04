import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
Product.propTypes = {
    
};

function Product(props) {
    const {product} = props;
    return (
        <div>
            <p>{product.productName}</p>
            <Link to={`/chi-tiet-san-pham/${product.productId}`} >Xem chi tiet</Link>
        </div>
    );
}

export default Product;