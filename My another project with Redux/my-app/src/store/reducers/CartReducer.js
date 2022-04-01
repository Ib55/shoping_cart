
const CartReducer = (state=[],action) =>{
    switch(action.type){
        case 'ADD_TO_CART':{
            const product = state.find(item=>item.id===action.payload.id)
            return product?state.map(item=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item):[...state,{...action.payload,quantity:1}]
        }
        case 'REMOVE_ITEM':{
            return state.filter(item=>item.id!==action.payload.id)
        }
        case 'CLEAR_ALL':{
            return []
        }
        case 'MODIFY_QUANTITY':{
            const product = state.find(item=>item.id===action.payload.id)
            return state.map(item=>item.id===product.id?{...product,quantity:action.payload.quantity}:item)
        }
        default :{
            return state
        }
    }
    }
    export default CartReducer