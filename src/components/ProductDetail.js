import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import { rqGetProductId } from '../actions/product';

ProductDetail.propTypes = {
    
};

function ProductDetail(props) {
    const {id}=useParams()
    const productDetail = useSelector(state=>state.product.productDetail)
    const dispatch = useDispatch()
    // const [] = useState('')
    useEffect(()=>{
        
        const action = rqGetProductId(id);
        dispatch(action)
    },[])
    
    return (
        <div>
            <h1>{productDetail.productName}</h1>
            <img src={productDetail.image} />
            <h3>Gia san pham:{productDetail.price}</h3>
            <p>Noi dung chi tiet san pham:{productDetail.content}</p>
            
            
        </div>
    );
}

export default ProductDetail;