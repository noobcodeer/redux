import React from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import {Link,Routes,Route} from 'react-router-dom'
import ProductDetail from './ProductDetail';

Layout.propTypes = {
    
};

function Layout(props) {
    return (
        <div>
            <ul>
                <Link to='/'>TRang chu</Link>
            </ul>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/chi-tiet-san-pham/:id' element={<ProductDetail/>}/>
            </Routes>
            
        </div>
    );
}

export default Layout;