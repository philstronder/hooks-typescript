// import React, {useContext} from 'react'
// import CartContext from './CartContext';

// const AppContext: React.FC = () => {
//     const {products} = useContext(CartContext);

//     return (
//     <ul>
//         {products?.map(product => product.name)}
//     </ul>
//     )
// }

// export default AppContext; 


import React, { useReducer } from 'react'

interface Cart {
    products: string[],
    shipping_value?: number
}

type CartActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppContext: React.FC = () => {
    const cart = useReducer(
        (state: Cart, action: CartActionType) => {
            switch(action.type) {
                case 'ADD_PRODUCT':
                    return {
                        ...state,
                        products: [...state.products, 'Produto novo']
                    }
                
                default:
                    return state;
            }
        },
        {
            products: [],
            shipping_value: 0,
        }
    );

    return(
        <ul>

        </ul>
    );
}

export default AppContext; 