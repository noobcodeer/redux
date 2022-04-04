//lay sanh sach san pham theo trang
//action co type va co payload

const initialstate={list:[],productDetail:{}}

const productReducer=(state=initialstate,action)=>{
    switch (action.type){
        case 'GET_PAGINATION':{
            return{
                ...state,
                list:action.payload
            }
        }
        case 'GET_PRODUCT_DETAIL':{
            return{
                ...state,
                productDetail:action.payload
                
            }
        }
        default:
            {
                return{
                    ...state
                }
            }
    }
}

export default productReducer