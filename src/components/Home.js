import React from 'react';
import Product from './Product';
import {rqGetPagination} from '../actions/product'
import { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'

Home.propTypes = {
    
};

function Home(props) {
    const products = useSelector(state=>state.product.list)
    // console.log(products)
    const dispatch = useDispatch()
    const [keyword,setKeyword] = useState('')
    const [pageSize,setPageSize] = useState(5)
    useEffect(()=>{
        
        const action = rqGetPagination(pageSize,keyword);
        dispatch(action)
    }, [pageSize,keyword])


    const display=()=>{
        return products.map((s,i)=>{
            return <Product key={i} product={s}>
                
            </Product>
        })
    }
    const search=(e)=>{
        const value= e.target.value;
        setKeyword(value)
    }
    const pagination=()=>{
        // let _index= index;
        setPageSize(pageSize+5)
    }
    return (
        <div>
            day la home
            <label>Nhap tu khoa</label>
            <input onInput={(e)=>{
                search(e)
            }}></input>
            {display()}
            <button onClick={()=>pagination()}>Xemthem</button>
        </div>
    );
}

export default Home;