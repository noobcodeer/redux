export const rqGetPagination =(pageSize,keyWord)=>{
    //goi api lay du lieu
    var model = { PageSize: pageSize, PageIndex: 1,KeyWord:keyWord}

    return dispatch=>{
        fetch('http://study.imic.edu.vn/api/product/get-pagination', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify(model)
    })
    .then(s=>s.json())
    .then((data)=> {
    
       dispatch(GetPagination(data))
    })
    .catch( (error)=>{
            //do something with error
    })
    }
}

export const GetPagination=(data)=>{
    return {
        type:'GET_PAGINATION',
        payload:data
    }
}

//lay san pham chi tiet
export const rqGetProductId =(productId)=>{
    //goi api lay du lieu
    // var model = { PageSize: pageSize, PageIndex: 1,KeyWord:keyWord}

    return dispatch=>{
        fetch('http://study.imic.edu.vn/api/product/'+productId)
    .then(s=>s.json())
    .then((data)=> {
    
       dispatch(GetProductId(data))
    })
    .catch( (error)=>{
            //do something with error
    })
    }
}

export const GetProductId=(data)=>{
    return {
        type:'GET_PRODUCT_DETAIL',
        payload:data
    }
}