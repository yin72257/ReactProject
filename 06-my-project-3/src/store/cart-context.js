import React from "react";

//Initial context to provide template for IDE. Doesnt actually matter

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;