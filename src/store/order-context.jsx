import { createContext } from "react";
import { useReducer } from "react";

export const OrderContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action){
    if(action.type === "ADD_ITEM"){
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if(existingCartItem){
            const updatedItem ={
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
    } else {
        // const product = availa
        updatedItems.push({
            id: action.payload,
            name: product.title,
            price: product.price,
            quantity: 1,
        });
    }
    return {
        ...state, // not needed here because we have only one value
        items: updatedItems,
    };
    if(action.type ==="UPDATE_ITEM"){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );
    
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
    
        updatedItem.quantity += action.payload.amount;
    
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
    
        return {
          ...state, // not needed here
          items: updatedItems,
        };
    }
    return state;
}

export default function OrderContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        ShoppingCartReducer,
        {
            items: [],
        }
    );

    function handleAddItemToCart(id){
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id,
        });
    }

    function handleUpdateCartItemQuantity(productId, amount){
        shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: {
                productId,
                amount
            },
        });
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    }

  return <OrderContext.Provider>{children}</OrderContext.Provider>;
}
